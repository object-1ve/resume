<script setup lang="ts">
import type { SkillGroup } from '../data'

interface Props {
  skills: SkillGroup[]
}

defineProps<Props>()
</script>

<template>
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
</template>
