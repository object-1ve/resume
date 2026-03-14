import object1veAI from './assets/object1veAI.svg'
import picture from './assets/picture.png'
import MonitoringSystem from './assets/MonitoringSystem.svg'
import OopsLauncher from './assets/OopsLauncher.ico'

export interface Project {
  name: string
  role: string
  link?: string
  github?: string
  icon?: string
  frontendTech: string[]
  backendTech: string[]
}

export interface Internship {
  company: string
  link: string
  department: string
  role: string
  period: string
  tasks: string[]
}

export interface Education {
  school: string
  link: string
  degree: string
  period: string
  awards: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export const contactInfo = {
  name: '应知钊',
  birth: '2004-01',
  gender: '男',
  role: '前端开发工程师',
  phone: '18066261219',
  email: '2672510873@qq.com',
  github: 'https://github.com/object-1ve',
  intro: '乐观积极，热爱技术，有效沟通，逻辑能力强，相信方法总比困难多。'
}

export const education: Education[] = [
  {
    school: '浙江师范大学',
    link: 'https://www.zjnu.edu.cn/',
    degree: '本科 - 计算机科学与技术',
    period: '2022.09 - 2026.06',
    awards: ['蓝桥杯 C/C++ 程序设计大学 B 组省赛二等奖 (2023.04)']
  }
]

export const internships: Internship[] = [
  {
    company: '恒生电子股份有限公司',
    link: 'https://www.hundsun.com',
    department: '人工智能部 (杭州)',
    role: '前端开发实习生',
    period: '2025.07 - 2025.09',
    tasks: [
      'Web 开发：用户 AI 对话消息查询系统，支持管理员审计与检索',
      'Web 开发：模型权限管理界面，支持批量创建、删除及权限分配',
      '数据处理：基于 TypeScript 对 AI 插件使用数据进行统计、代码长度分析及意图打标'
    ]
  }
]

export const projects: Project[] = [
  {
    name: 'object1veAI',
    role: '全栈开发',
    link: 'http://106.52.91.170:88/',
    icon: object1veAI,
    frontendTech: ['Vite', 'Vue 3', 'Element Plus', 'Pinia'],
    backendTech: ['Koa2', 'MySQL', 'OpenAI SDK']
  },
  {
    name: '智能云图库',
    role: '全栈开发',
    link: 'http://106.52.91.170:90/',
    icon: picture,
    frontendTech: ['Vue 3', 'Ant Design Vue', 'Pinia'],
    backendTech: ['Java', 'MyBatis Plus', 'Swagger']
  },
  {
    name: '智能客服质量监测系统',
    role: 'Vibe Coding',
    link: 'http://106.52.91.170:99/',
    icon: MonitoringSystem,
    frontendTech: ['Vue 3', 'Pinia', 'Element Plus', 'ECharts', 'Axios', 'Vite'],
    backendTech: ['FastAPI', 'MySQL', 'SQLAlchemy', 'JWT', 'Docker'],
  },
  {
    name: 'OopsLauncher',
    role: 'Vibe Coding',
    github: 'https://github.com/object-1ve/OopsLauncher',
    icon: OopsLauncher,
    frontendTech: ['Vue 3', 'Element Plus', 'Vue Router', 'Vite'],
    backendTech: ['Rust', 'Tauri 2.0', 'SQLite', 'Windows API']
  },
]

export const skills: SkillGroup[] = [
  { category: 'Web 开发', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Vue 2/3', 'MVVM'] },
  { category: '跨平台/工具', items: ['Electron', 'Tauri', 'Vite', 'Webpack', 'Git'] },
  { category: '后端/数据库', items: ['Node.js', 'Java', 'Python', 'MySQL', 'PostgreSQL', 'Redis'] },
  { category: '运维/部署', items: ['Linux', 'Shell', 'Nginx', 'Docker', '项目部署'] },
  { category: '人工智能', items: ['AI API 调用', '流式输出', 'RAG 优化', 'MCP', 'Agent'] },
  { category: '安全工具', items: ['IDA', 'Jadx-gui', 'BurpSuite', 'AntSword'] }
]
