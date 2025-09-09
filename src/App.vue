<template>
  <div class="bg-gray-900 text-gray-50 font-sans">
    <AppHeader id="header" class="scroll-mt-14"/>
    <HeroSection id="hero" class="scroll-mt-14" />
    <ExperienceSection id="experience" class="scroll-mt-14" />
    <SkillList id="skills" class="scroll-mt-14" />
    <ProjectList id="projects" class="scroll-mt-14" />
    <AboutSection id="about" class="scroll-mt-14" />
    <AppFooter id="footer" class="scroll-mt-14" />
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
</script>
