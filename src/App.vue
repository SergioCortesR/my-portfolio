<template>
  <div class="bg-gray-900 text-gray-50 font-sans">
    <AppHeader id="header" />
    <HeroSection id="hero" />
    <ExperienceSection id="experience" />
    <AboutSection id="about" />
    <ProjectList id="projects" />
    <SkillList id="skills" />
    <ContactForm id="contact" />
    <AppFooter id="footer" />
  </div>
</template>

<script setup>
import AboutSection from './components/AboutSection.vue'
import ContactForm from './components/ContactForm.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectList from './components/ProjectList.vue'
import SkillList from './components/SkillList.vue'
</script>
