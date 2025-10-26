<template>
  <section
    class="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-4 lg:pb-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white relative overflow-hidden">

    <!-- Efectos de fondo animados -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob">
      </div>
      <div
        class="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000">
      </div>
    </div>

    <div
      class="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 w-full max-w-7xl">
      <!-- Contenido de texto -->
      <div class="text-center lg:text-left lg:w-1/2 space-y-4 sm:space-y-6 w-full px-4">
        <!-- Badge profesional -->
        <div
          class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-[10px] sm:text-xs md:text-sm font-medium text-indigo-300 mb-3 sm:mb-4">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span class="whitespace-nowrap">Disponible para proyectos</span>
        </div>

        <!-- Título principal -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span class="text-white">
            Sergio Manuel
          </span>
          <br>
          <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Cortés Ramos
          </span>
        </h1>

        <!-- Subtítulo -->
        <div class="space-y-2">
          <p class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200">
            Fullstack Developer
          </p>
          <p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0">
            Construyendo soluciones digitales innovadoras con pasión y excelencia técnica
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
          <a href="#projects"
            class="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/50 hover:scale-105">
            Ver Proyectos
            <svg class="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a href="https://wa.me/524496050497" target="_blank"
            class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-gray-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-800/70 hover:text-white transition-all duration-300 hover:scale-105">
            <svg class="mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contáctame
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
          <a href="https://github.com/SergioCortesR" target="_blank"
            class="group p-2.5 sm:p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-110">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.753-1.334-1.753-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.244 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.814 1.096.814 2.21 0 1.595-.015 2.877-.015 3.27 0 .32.215.694.825.577C20.565 21.795 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/sergio-cortes-ramos" target="_blank"
            class="group p-2.5 sm:p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-110">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.33-.026-3.04-1.852-3.04-1.854 0-2.14 1.447-2.14 2.94v5.7h-3v-10h2.88v1.367h.04c.4-.754 1.38-1.547 2.84-1.547 3.035 0 3.6 1.998 3.6 4.59v5.59z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Imagen de perfil -->
      <div class="relative lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0 w-full px-4">
        <div class="relative">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-20">
          </div>

          <!-- Imagen -->
          <div class="relative">
            <img src="\images\personal\comiendo_en_los_pibes.jpg" alt="Sergio Cortés"
              class="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover object-center border-4 sm:border-6 lg:border-8 border-gray-900 shadow-2xl hover:scale-105 transition-transform duration-300">
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
      <a href="#experience" class="text-gray-400 hover:text-white transition-colors">
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>
</template>
<style scoped>
@keyframes blob {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>