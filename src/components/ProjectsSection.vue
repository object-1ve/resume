<script setup lang="ts">
import type { Project } from '../data'

interface Props {
  projects: Project[]
}

defineProps<Props>()
</script>

<template>
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
            <h3 class="text-xl font-black text-gray-900 tracking-tight">{{ project.name }}</h3>
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
</template>
