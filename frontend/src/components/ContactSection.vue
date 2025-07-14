<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

// State untuk menyimpan data form
const form = reactive({
  name: '',
  email: '',
  message: ''
});

// State untuk UI
const isSending = ref(false);
const messageSent = ref(false);
const errorMessage = ref('');

// Fungsi untuk menangani submit form
async function handleSubmit() {
  isSending.value = true;
  errorMessage.value = '';
  try {
    // Kirim data ke backend - UBAH KE URL RELATIF
    await axios.post('/api/send-email', form);
    messageSent.value = true;
  } catch (error) {
    errorMessage.value = 'Gagal mengirim pesan, coba lagi nanti.';
    console.error(error);
  } finally {
    isSending.value = false;
  }
}
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />

      <div v-if="messageSent" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Terima kasih!</strong>
        <span class="block sm:inline"> Pesanmu sudah berhasil terkirim.</span>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="max-w-xl mx-auto p-8 bg-gray-700 rounded-lg shadow-md">
        <div class="mb-4">
          <input v-model="form.name" type="text" placeholder="Nama Anda" required class="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
          <input v-model="form.email" type="email" placeholder="Email Anda" required class="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-6">
          <textarea v-model="form.message" placeholder="Pesan Anda" rows="4" required class="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <button type="submit" :disabled="isSending" class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-500">
          {{ isSending ? 'Mengirim...' : 'Kirim Pesan' }}
        </button>

        <p v-if="errorMessage" class="text-red-400 mt-4">{{ errorMessage }}</p>
      </form>

      <div class="flex justify-center space-x-6 mt-12 mb-8">
        <a href="#" target="_blank" class="text-gray-400 hover:text-blue-500 transition-colors duration-300">
          <i class="fab fa-github text-4xl"></i>
        </a>
        <a href="#" target="_blank" class="text-gray-400 hover:text-blue-500 transition-colors duration-300">
          <i class="fab fa-linkedin text-4xl"></i>
        </a>
        <a href="#" target="_blank" class="text-gray-400 hover:text-blue-500 transition-colors duration-300">
          <i class="fas fa-envelope text-4xl"></i>
        </a>
      </div>
    </div>
  </footer>
</template>
