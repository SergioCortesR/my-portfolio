<template>
  <header class="fixed top-0 left-0 w-full shadow-lg z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50">
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo o Nombre -->
      <a href="#hero"
        class="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 transition-all duration-300">
        Sergio Cortés
      </a>

      <!-- Links -->
      <ul class="hidden md:flex space-x-2 text-gray-300 font-medium">
        <li>
          <a href="#hero"
            class="px-4 py-2 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
            Inicio
          </a>
        </li>
        <li>
          <a href="#experience"
            class="px-4 py-2 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
            Experiencia
          </a>
        </li>
        <li>
          <a href="#skills"
            class="px-4 py-2 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
            Habilidades
          </a>
        </li>
        <li>
          <a href="#projects"
            class="px-4 py-2 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#about"
            class="px-4 py-2 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="https://wa.me/524496050497" target="_blank"
            class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105">
            Contáctame
          </a>
        </li>
      </ul>

      <!-- Botón para móviles -->
      <button
        class="lg:hidden md:hidden text-white focus:outline-none text-3xl hover:bg-gray-800/50 rounded-lg p-2 transition-colors"
        @click.stop="displayList">
        ☰
      </button>

      <div v-show="flagList" ref="menuRef"
        class="lg:hidden md:hidden absolute top-16 right-2 z-50 w-1/2 rounded-lg bg-gray-800/95 backdrop-blur-xl border border-gray-700 text-white shadow-2xl">
        <a href="#hero"
          class="h-16 relative inline-flex items-center w-full px-4 py-2 font-medium border-b border-gray-700 hover:bg-gray-700/50 hover:text-white transition-colors">
          Inicio
        </a>
        <a href="#experience"
          class="h-16 relative inline-flex items-center w-full px-4 py-2 font-medium border-b border-gray-700 hover:bg-gray-700/50 hover:text-white transition-colors">
          Experiencia
        </a>
        <a href="#skills"
          class="h-16 relative inline-flex items-center w-full px-4 py-2 font-medium border-b border-gray-700 hover:bg-gray-700/50 hover:text-white transition-colors">
          Habilidades
        </a>
        <a href="#projects"
          class="h-16 relative inline-flex items-center w-full px-4 py-2 font-medium border-b border-gray-700 hover:bg-gray-700/50 hover:text-white transition-colors">
          Proyectos
        </a>
        <a href="#about"
          class="h-16 relative inline-flex items-center w-full px-4 py-2 font-medium border-b border-gray-700 hover:bg-gray-700/50 hover:text-white transition-colors">
          Sobre mí
        </a>
        <a href="https://wa.me/524496050497" target="_blank"
          class="h-16 relative inline-flex items-center w-full px-4 py-2 font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors">
          Contáctame
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const flagList = ref(false);
const menuRef = ref(null);

const displayList = () => {
  flagList.value = !flagList.value;
};

const handleClickOutside = event => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    flagList.value = false; // Cierra el menú
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
