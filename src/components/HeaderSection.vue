<script setup lang="ts">
interface Props {
  contactInfo: {
    name: string
    role: string
    intro: string
  }
}

defineProps<Props>()
</script>

<template>
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
</template>
