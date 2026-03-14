<script setup lang="ts">
import type { Internship } from '../data'

interface Props {
  internships: Internship[]
}

defineProps<Props>()
</script>

<template>
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
            <a v-if="job.link" :href="job.link" target="_blank" class="group/link inline-block">
              <h3 class="text-3xl font-black text-gray-900 group-hover/link:text-orange-600 transition-colors">{{ job.company }}</h3>
            </a>
            <h3 v-else class="text-3xl font-black text-gray-900">{{ job.company }}</h3>
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
</template>
