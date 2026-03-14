<script setup lang="ts">
import { contactInfo, education, internships, projects, skills } from './data'
import HeaderSection from './components/HeaderSection.vue'
import ContactCard from './components/ContactCard.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-[#f7f7f7] text-[#1d1d1f] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-orange-100 selection:text-orange-900">
    <div class="max-w-6xl mx-auto space-y-6">
      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <HeaderSection :contact-info="contactInfo" />
        <ContactCard :contact-info="contactInfo" />
        <ExperienceSection :internships="internships" />
        <EducationSection :education="education" />
        <ProjectsSection :projects="projects" />
        <SkillsSection :skills="skills" />
      </div>

      <AppFooter />
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
