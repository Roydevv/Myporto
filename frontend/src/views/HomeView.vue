<script setup>
import MainNavbar from '@/components/MainNavbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import EducationSection from '@/components/EducationSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>
<template>
  <div>
    <MainNavbar />
    <main>
      <HeroSection />
      <div v-animate-on-scroll><EducationSection /></div>
      <div v-animate-on-scroll><SkillsSection /></div>
      <div v-animate-on-scroll><ProjectsSection /></div>
      <div v-animate-on-scroll><ContactSection /></div>
    </main>
  </div>
</template>
