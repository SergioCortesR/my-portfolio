<template>
  <section
    class="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 bg-gray-900 text-white gap-8 pt-16 md:pt-24">
    <div
      class="flex flex-col lg:flex-row items-center justify-center px-2 bg-gray-800 text-white py-5 lg:m-10 rounded-4xl m-6 w-12/12">
      <!-- Texto -->
      <div class="lg:w-8/12 text-center lg:text-right lg:px-28">
        <h1 class="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 pb-2">
          Sergio Manuel Cortés Ramos
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 mb-4">
          Fullstack Developer | Software Engineer | Digital Craftsman
        </p>
        <p class="text-md md:text-xl text-gray-400 mb-6">
          "El mejor no es el que sabe todo de memoria, es el que sabe dónde buscar lo que necesita"
        </p>

        <div class="flex gap-4 justify-center lg:flex-row-reverse lg:justify-normal">
          <!-- WhatsApp -->
          <a href="https://wa.me/524496050497" target="_blank"
            class="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg text-center text-white">
            <!-- Icono WhatsApp -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 2H4C2.897 2 2 2.897 2 4v14c0 1.103.897 2 2 2h14l4 4V4c0-1.103-.897-2-2-2zM6 9h12v2H6V9zm0 4h8v2H6v-2z" />
            </svg>
            <p class="hidden md:block">
              WhatsApp
            </p>
          </a>
          <!-- GitHub -->
          <a href="https://github.com/SergioCortesR" target="_blank"
            class="flex items-center gap-2 px-6 py-2 bg-gray-700 hover:bg-gray-950 rounded-lg shadow-lg text-center text-white">
            <!-- Icono SVG -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.753-1.334-1.753-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.244 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.814 1.096.814 2.21 0 1.595-.015 2.877-.015 3.27 0 .32.215.694.825.577C20.565 21.795 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
            <p class="hidden md:block">
              GitHub
            </p>
          </a>
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/sergio-cortes-ramos" target="_blank"
            class="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-center text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.33-.026-3.04-1.852-3.04-1.854 0-2.14 1.447-2.14 2.94v5.7h-3v-10h2.88v1.367h.04c.4-.754 1.38-1.547 2.84-1.547 3.035 0 3.6 1.998 3.6 4.59v5.59z" />
            </svg>
            <p class="hidden md:block">
              LinkedIn
            </p>
          </a>
        </div>
      </div>
      <div class="lg:w-4/12 flex justify-center p-5">
        <img src="\images\personal\comiendo_en_los_pibes.jpg" alt="Sergio Cortés"
          class="rounded-full shadow-2xl shadow-black w-64 md:w-80 lg:w-96 object-cover p-5">
      </div>
    </div>
  </section>
</template>