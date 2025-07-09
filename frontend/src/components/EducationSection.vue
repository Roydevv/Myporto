<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const educationHistory = ref([]);
onMounted(async () => {
  try { const response = await
axios.get('http://localhost:3000/api/education');
educationHistory.value = response.data; } catch (error) {
console.error(error); }
});
</script>
<template>
  <section id="pendidikan" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative">
        <div class="absolute h-full border-r-2 border-gray-300" style="left: 50%;"></div>
        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-8 flex justify-between items-center w-full">
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right"><p class="font-semibold text-blue-600">{{ edu.period }}</p><h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3><p class="text-gray-600">{{ edu.major }}</p></div>
            <div class="w-1/2 flex justify-start"><div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div></div>
          </div>
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end"><div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div></div>
            <div class="w-1/2 pl-8 text-left"><p class="font-semibold text-blue-600">{{ edu.period }}</p><h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3><p class="text-gray-600">{{ edu.major }}</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
