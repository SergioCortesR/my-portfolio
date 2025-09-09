<template>
  <header class="fixed top-0 left-0 w-full shadow-md z-50 bg-gray-800">
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo o Nombre -->
      <h1 class="text-xl font-bold text-gray-200">El portafolio de Checo</h1>

      <!-- Links -->
      <ul class="hidden md:flex space-x-6 text-gray-300 font-medium">
        <li><a href="#hero" class="hover:text-white hover:border-2 rounded-2xl lg:p-2 border-gray-700">Inicio</a></li>
        <li><a href="#experience"
            class="hover:text-white hover:border-2 rounded-2xl lg:p-2 border-gray-700">Experiencia</a></li>
        <li><a href="#about" class="hover:text-white hover:border-2 rounded-2xl lg:p-2 border-gray-700">Sobre mi</a>
        </li>
        <li><a href="#projects" class="hover:text-white hover:border-2 rounded-2xl lg:p-2 border-gray-700">Proyectos</a>
        </li>
        <li><a href="#skills" class="hover:text-white hover:border-2 rounded-2xl lg:p-2 border-gray-700">Habilidades</a>
        </li>
        <li><a href="https://wa.me/524496050497" class="hover:text-white hover:border-2 rounded-2xl lg:p-2 border-gray-700">Contáctame</a>
        </li>
      </ul>
      <!-- Botón para móviles -->
      <button class="lg:hidden md:hidden text-white focus:outline-none" @click.stop="displayList">
        ☰
      </button>
      <div v-show="flagList" ref="menuRef"
        class="lg:hidden md:hidden absolute top-14 right-2 z-50 w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <a href="#hero"
          class="h-16 relative inline-flex items-center w-full px-4 py-2  font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Inicio
        </a>
        <a href="#experience"
          class="h-16 relative inline-flex items-center w-full px-4 py-2  font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Experiencia
        </a>
        <a href="#about"
          class="h-16 relative inline-flex items-center w-full px-4 py-2  font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Sobre mi
        </a>
        <a href="#skills"
          class="h-16 relative inline-flex items-center w-full px-4 py-2  font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Habilidades
        </a>
        <a href="#projects"
          class="h-16 relative inline-flex items-center w-full px-4 py-2  font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Proyectos
        </a>
        <a href="https://wa.me/524496050497"
          class="h-16 relative inline-flex items-center w-full px-4 py-2  font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
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
