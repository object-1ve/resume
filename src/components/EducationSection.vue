<script setup lang="ts">
import type { Education } from '../data'

interface Props {
  education: Education[]
}

defineProps<Props>()
</script>

<template>
  <section class="md:col-span-4 bg-white rounded-[2.5rem] p-10 border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between group">
    <div class="space-y-10">
      <h2 class="text-2xl font-black text-gray-900 flex items-center gap-4">
        <span class="w-10 h-10 flex items-center justify-center bg-blue-100/50 text-blue-600 rounded-2xl text-lg">🎓</span>
        教育背景
      </h2>
      <div v-for="edu in education" :key="edu.school" class="space-y-8">
        <div class="group/edu">
          <a v-if="edu.link" :href="edu.link" target="_blank" class="group/school inline-block">
            <h3 class="text-xl font-black text-gray-900 group-hover/school:text-blue-600 transition-colors">{{ edu.school }}</h3>
          </a>
          <h3 v-else class="text-xl font-black text-gray-900">{{ edu.school }}</h3>
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
</template>
