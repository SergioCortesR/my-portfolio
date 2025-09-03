<template>
  <header class="fixed top-0 left-0 w-full shadow-md z-50 bg-gray-800">
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo o Nombre -->
      <h1 class="text-xl font-bold text-gray-200">El portafolio de Checo</h1>

      <!-- Links -->
      <ul class="hidden md:flex space-x-6 text-gray-300 font-medium">
        <li><a href="#hero" class="hover:text-blue-500">Inicio</a></li>
        <li><a href="#experience" class="hover:text-blue-500">Experiencia</a></li>
        <li><a href="#about" class="hover:text-blue-500">Sobre mi</a></li>
        <li><a href="#skills" class="hover:text-blue-500">Habilidades</a></li>
        <li><a href="#projects" class="hover:text-blue-500">Proyectos</a></li>
        <li><a href="#contact" class="hover:text-blue-500">Contáctame</a></li>
      </ul>

      <!-- Botón para móviles -->
      <button class="md:hidden text-gray-800 focus:outline-none">
        ☰
      </button>
    </nav>
  </header>
</template>
