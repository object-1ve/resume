<script setup lang="ts">
import { ref } from 'vue'
import object1veAI from './assets/object1veAI.svg'
import picture from './assets/picture.png'
import MonitoringSystem from './assets/MonitoringSystem.svg'
import OopsLauncher from './assets/OopsLauncher.ico'

const contactInfo = {
  name: '应知钊',
  birth: '2004-01',
  gender: '男',
  role: '前端开发工程师',
  phone: '18066261219',
  email: '2672510873@qq.com',
  github: 'https://github.com/object-1ve',
  intro: '乐观积极，热爱技术，有效沟通，逻辑能力强，相信方法总比困难多。'
}

const education = [
  {
    school: '浙江师范大学',
    degree: '本科 - 计算机科学与技术',
    period: '2022.09 - 2026.06',
    awards: ['蓝桥杯 C/C++ 程序设计大学 B 组省赛二等奖 (2023.04)']
  }
]

const internships = [
  {
    company: '恒生电子股份有限公司',
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

interface Project {
  name: string
  role: string
  link?: string
  github?: string
  icon?: string
  frontendTech: string[]
  backendTech: string[]
}

const projects: Project[] = [

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

const skills = [
  { category: 'Web 开发', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Vue 2/3', 'MVVM'] },
  { category: '跨平台/工具', items: ['Electron', 'Tauri', 'Vite', 'Webpack', 'Git'] },
  { category: '后端/数据库', items: ['Node.js', 'Java', 'Python', 'MySQL', 'PostgreSQL', 'Redis'] },
  { category: '运维/部署', items: ['Linux', 'Shell', 'Nginx', 'Docker', '项目部署'] },
  { category: '人工智能', items: ['AI API 调用', '流式输出', 'RAG 优化', 'MCP', 'Agent'] },
  { category: '安全工具', items: ['IDA', 'Jadx-gui', 'BurpSuite', 'AntSword'] }
]
</script>

<template>
  <div class="min-h-screen bg-[#f7f7f7] text-[#1d1d1f] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-orange-100 selection:text-orange-900">
    <div class="max-w-6xl mx-auto space-y-6">
      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Header Section (Bento Card - Large) -->
        <header class="md:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-700 group">
          <div class="relative shrink-0">
            <div class="w-44 h-44 rounded-[2.5rem] overflow-hidden border-4 border-gray-50 shadow-inner group-hover:scale-[1.02] transition-transform duration-700">
              <img src="/avatar.jpg" alt="Avatar" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-sm animate-pulse"></div>
          </div>
          <div class="flex-1 text-center md:text-left space-y-6">
            <div class="space-y-3">
              <h1 class="text-5xl md:text-6xl font-black tracking-tight text-gray-900">{{ contactInfo.name }}</h1>
              <p class="text-xl font-semibold text-gray-600 mt-2">{{ contactInfo.role }}</p>
            </div>
            <p class="text-gray-700 leading-relaxed text-lg font-medium max-w-xl">
              {{ contactInfo.intro }}
            </p>

            <div class="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <a href="/resume.html" target="_blank" class="px-6 py-3 bg-gray-900 text-white rounded-2xl text-sm font-bold hover:bg-black transition-all hover:translate-y-[-2px] shadow-lg shadow-gray-200/50 active:scale-95">
                在线预览
              </a>
              <a href="/resume.pdf" download="应知钊-个人简历.pdf" class="px-6 py-3 bg-white text-gray-900 border border-gray-100 rounded-2xl text-sm font-bold hover:bg-gray-50 transition-all hover:translate-y-[-2px] shadow-sm active:scale-95">
                下载 PDF
              </a>
            </div>
          </div>
        </header>

        <!-- Contact Bento Card (Small) -->
        <div class="md:col-span-4 bg-white rounded-[2.5rem] p-10 border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-8 flex flex-col justify-center">
          <h3 class="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">Let's Connect</h3>
          <div class="space-y-6">
            <div class="flex items-center gap-5 group cursor-pointer">
              <div class="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-[1.25rem] group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-500">
                <span class="text-xl">📞</span>
              </div>
              <div>
                <p class="text-[10px] text-gray-400 font-black uppercase tracking-widest">Phone</p>
                <p class="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{{ contactInfo.phone }}</p>
              </div>
            </div>
            <div class="flex items-center gap-5 group cursor-pointer">
              <div class="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-[1.25rem] group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-500">
                <span class="text-xl">📧</span>
              </div>
              <div>
                <p class="text-[10px] text-gray-400 font-black uppercase tracking-widest">Email</p>
                <p class="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{{ contactInfo.email }}</p>
              </div>
            </div>
            <div class="flex items-center gap-5 group cursor-pointer">
              <div class="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-[1.25rem] group-hover:bg-purple-50 group-hover:scale-110 transition-all duration-500">
                <svg viewBox="0 0 1024 1024" class="w-6 h-6" fill="currentColor"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"></path></svg>
              </div>
              <div>
                <p class="text-[10px] text-gray-400 font-black uppercase tracking-widest">GitHub</p>
                <a :href="contactInfo.github" target="_blank" class="text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors">@object-1ve</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Bento Card (Wide) -->
        <section class="md:col-span-8 bg-white rounded-[2.5rem] p-10 border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-10 group">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-black text-gray-900 flex items-center gap-4">
              <span class="w-10 h-10 flex items-center justify-center bg-orange-100/50 text-orange-600 rounded-2xl text-lg">💼</span>
              实习经历
            </h2>
          </div>
          <div class="space-y-12">
            <div v-for="job in internships" :key="job.company" class="relative pl-10 border-l-2 border-gray-50 last:pb-0 group/item">
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm group-hover/item:scale-125 transition-transform"></div>
              <div class="flex justify-between items-start flex-wrap gap-4 mb-6">
                <div>
                  <h3 class="text-3xl font-black text-gray-900 group-hover/item:text-orange-600 transition-colors">{{ job.company }}</h3>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="text-orange-600 font-bold text-sm uppercase tracking-wider">{{ job.department }}</span>
                    <span class="text-gray-400">•</span>
                    <span class="text-gray-700 font-bold text-sm uppercase tracking-wider">{{ job.role }}</span>
                  </div>
                </div>
                <span class="px-4 py-1.5 bg-gray-50 text-gray-600 text-xs rounded-full font-black uppercase tracking-widest border border-gray-100">{{ job.period }}</span>
              </div>
              <ul class="space-y-4">
                <li v-for="task in job.tasks" :key="task" class="flex gap-4 text-base text-gray-700 leading-relaxed font-medium group/task">
                  <span class="w-1.5 h-1.5 rounded-full bg-orange-200 mt-2.5 shrink-0 group-hover/task:bg-orange-500 transition-colors"></span>
                  {{ task }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Education Bento Card (Tall) -->
        <section class="md:col-span-4 bg-white rounded-[2.5rem] p-10 border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between group">
          <div class="space-y-10">
            <h2 class="text-2xl font-black text-gray-900 flex items-center gap-4">
              <span class="w-10 h-10 flex items-center justify-center bg-blue-100/50 text-blue-600 rounded-2xl text-lg">🎓</span>
              教育背景
            </h2>
            <div v-for="edu in education" :key="edu.school" class="space-y-8">
              <div class="group/edu">
                <h3 class="text-xl font-black text-gray-900 group-hover/edu:text-blue-600 transition-colors">{{ edu.school }}</h3>
                <p class="text-gray-700 font-bold text-sm mt-2">{{ edu.degree }}</p>
                <p class="text-gray-500 text-[10px] mt-1 font-black uppercase tracking-widest">{{ edu.period }}</p>
              </div>
              <div class="space-y-3">
                <div v-for="award in edu.awards" :key="award" class="p-5 bg-orange-50/30 rounded-[1.5rem] border border-orange-100/30 flex items-start gap-4 hover:bg-orange-50/50 transition-colors">
                  <span class="text-xl">🏆</span>
                  <p class="text-xs font-bold text-orange-800/80 leading-relaxed">{{ award }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 pt-10 border-t border-gray-50">
            <p class="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-6">Skill Stack</p>
            <div class="space-y-4">
              <div class="flex h-3 rounded-full overflow-hidden bg-gray-50 shadow-inner">
                <div class="w-[40%] bg-orange-500/90" title="Frontend"></div>
                <div class="w-[25%] bg-blue-500/90" title="Backend"></div>
                <div class="w-[30%] bg-purple-500/90" title="AI"></div>
                <div class="w-[5%] bg-gray-200" title="Other"></div>
              </div>
              <div class="grid grid-cols-2 gap-y-2 gap-x-4">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span class="text-[10px] font-black text-gray-500 uppercase">Frontend</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span class="text-[10px] font-black text-gray-500 uppercase">Backend</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span class="text-[10px] font-black text-gray-500 uppercase">AI/LLM</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-gray-200"></span>
                  <span class="text-[10px] font-black text-gray-500 uppercase">Others</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Section (Full Width) -->
        <section class="md:col-span-12 space-y-8 py-4">
          <div class="flex items-center justify-between">
            <h2 class="text-4xl font-black text-gray-900 tracking-tight flex items-center gap-4">
              项目
              <span class="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] ml-2">Works</span>
            </h2>
            <div class="h-px flex-1 bg-gray-100/80 mx-8 hidden md:block"></div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="project in projects" :key="project.name" class="bg-white p-8 rounded-[2.5rem] border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 group">
              <div class="flex items-start justify-between mb-8">
                <div class="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-50 group-hover:rotate-6 transition-all duration-500 overflow-hidden">
                  <img v-if="project.icon" :src="project.icon" class="w-full h-full object-cover p-2 group-hover:scale-110 transition-transform" />
                  <span v-else class="text-2xl group-hover:scale-110 transition-transform">🚀</span>
                </div>
                <div class="flex gap-2">
                  <a v-if="project.github" :href="project.github" target="_blank" class="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-white hover:shadow-md rounded-xl transition-all" title="GitHub">
                    <svg viewBox="0 0 1024 1024" class="w-5 h-5" fill="currentColor"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"></path></svg>
                  </a>
                  <a v-if="project.link" :href="project.link" target="_blank" class="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-500 hover:text-orange-600 hover:bg-white hover:shadow-md rounded-xl transition-all" title="Demo">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div class="flex-1 space-y-4">
                <div class="space-y-1">
                  <template v-if="project.link || project.github">
                    <a :href="project.link || project.github" target="_blank" class="block group/title">
                      <h3 class="text-xl font-black text-gray-900 group-hover/title:text-orange-600 transition-colors tracking-tight">{{ project.name }}</h3>
                    </a>
                  </template>
                  <h3 v-else class="text-xl font-black text-gray-900 tracking-tight">{{ project.name }}</h3>
                  <p class="text-[10px] text-orange-600 font-black uppercase tracking-widest">{{ project.role }}</p>
                </div>
                
                <div class="space-y-3">
                  <div>
                    <p class="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1.5">Frontend</p>
                    <div class="flex flex-wrap gap-1.5">
                      <span v-for="t in project.frontendTech" :key="t" class="px-2 py-0.5 bg-gray-50/80 text-gray-600 text-[8px] font-black uppercase rounded-md border border-gray-100 group-hover:border-orange-100/50 group-hover:text-orange-500 transition-all">
                        {{ t }}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p class="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1.5">Backend</p>
                    <div class="flex flex-wrap gap-1.5">
                      <span v-for="t in project.backendTech" :key="t" class="px-2 py-0.5 bg-gray-50/80 text-gray-600 text-[8px] font-black uppercase rounded-md border border-gray-100 group-hover:border-orange-100/50 group-hover:text-orange-500 transition-all">
                        {{ t }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <a v-if="project.link || project.github" :href="project.link || project.github" target="_blank" class="pt-8 border-t border-gray-50 mt-8 group-hover:border-orange-50 transition-colors flex items-center justify-between cursor-pointer">
                <span class="text-[10px] font-black text-gray-500 group-hover:text-orange-400 transition-colors uppercase tracking-[0.2em]">Explore Project</span>
                <span class="text-gray-400 group-hover:text-orange-300 transition-colors">→</span>
              </a>
              <div v-else class="pt-8 border-t border-gray-50 mt-8 group-hover:border-orange-50 transition-colors flex items-center justify-between">
                <span class="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Ongoing Project</span>
                <span class="text-gray-400">...</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Skills Section (Full Width) -->
        <section class="md:col-span-12 bg-white rounded-[2.5rem] p-12 border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-12 group">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-black text-gray-900 flex items-center gap-4">
              <span class="w-10 h-10 flex items-center justify-center bg-purple-100/50 text-purple-600 rounded-2xl text-lg">⚡</span>
              技术能力
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div v-for="group in skills" :key="group.category" class="space-y-6 group/skill">
              <h4 class="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-orange-500 group-hover/skill:scale-150 transition-transform"></span>
                {{ group.category }}
              </h4>
              <div class="flex flex-wrap gap-3">
                <span v-for="skill in group.items" :key="skill" class="px-5 py-2.5 bg-gray-50/50 border border-gray-100/50 rounded-2xl text-sm text-gray-700 font-bold hover:bg-white hover:shadow-md hover:border-orange-200/50 hover:text-orange-600 transition-all cursor-default">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>

      <!-- Footer -->
      <footer class="text-center py-12">
        <p class="text-gray-600 text-sm font-medium tracking-tight">© 2026 by object1ve</p>
      </footer>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #f7f7f7;
  margin: 0;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for a more premium feel */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #e5e5e5;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d1d1d1;
}
</style>
