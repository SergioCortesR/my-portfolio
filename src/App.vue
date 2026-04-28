<template>
  <div class="bg-[var(--bg-base)] text-[var(--text-primary)]">
    <AppHeader id="header" class="scroll-mt-20" />
    <main>
      <HeroSection id="hero" class="scroll-mt-20" />
      <ExperienceSection id="experience" class="scroll-mt-20" />
      <SkillList id="skills" class="scroll-mt-20" />
      <ProjectList id="projects" class="scroll-mt-20" />
      <AboutSection id="about" class="scroll-mt-20" />
    </main>
    <AppFooter id="footer" class="scroll-mt-20" />
  </div>
</template>

<script setup>
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectList from './components/ProjectList.vue'
import SkillList from './components/SkillList.vue'
import { useGsap } from './composables/useGsap.js'

useGsap()
</script>
