import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 设置冷却时间（单位：毫秒）。默认 24 小时 (24 * 60 * 60 * 1000)
const COOLDOWN_MS = 1 * 60 * 60 * 1000

export const recordVisit = async () => {
  try {
    const lastVisitStr = localStorage.getItem('last_visit_time')
    const now = Date.now()

    // 如果 24 小时内已经记录过，则跳过，避免频繁插入
    if (lastVisitStr) {
      const lastVisit = parseInt(lastVisitStr, 10)
      if (now - lastVisit < COOLDOWN_MS) {
        console.log('Skipping visit record (within cooldown period)')
        return
      }
    }

    // 获取公网 IP (使用第三方服务)
    const ipRes = await fetch('https://api.ipify.org?format=json')
    const { ip } = await ipRes.json()

    // 获取地理位置 (可选，同样使用第三方服务)
    let location = 'Unknown'
    try {
      const locRes = await fetch(`https://ipapi.co/${ip}/json/`)
      const locData = await locRes.json()
      location = `${locData.city}, ${locData.region}, ${locData.country_name}`
    } catch (e) {
      console.error('Failed to fetch location:', e)
    }

    const { error } = await supabase.from('visits').insert([
      {
        ip,
        location,
        user_agent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
        path: window.location.pathname,
        visited_at: new Date().toISOString()
      }
    ])

    if (error) throw error
    
    // 插入成功后，记录当前时间
    localStorage.setItem('last_visit_time', now.toString())
    console.log('Visit recorded successfully')
  } catch (error) {
    console.error('Error recording visit:', error)
  }
}
