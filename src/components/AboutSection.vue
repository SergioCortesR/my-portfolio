<template>
  <section
    class="py-20 px-6 bg-gradient-to-b from-gray-800 via-gray-800 via-gray-900/50 to-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Efectos decorativos -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl">
      </div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl">
      </div>
    </div>

    <div class="relative z-10 w-10/12 md:w-3/5 2xl:w-6/12">
      <!-- Título -->
      <div class="mb-12 text-center">
        <h2
          class="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Sobre mí
        </h2>
        <p class="text-gray-400 text-lg">
          Conoce más sobre quién soy y mis objetivos
        </p>
      </div>

      <!-- Contenido -->
      <div class="space-y-8">
        <!-- Texto principal -->
        <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl">
          <p class="leading-relaxed text-gray-300 lg:text-lg mb-6">
            Hola, mi nombre es <span
              class="font-semibold text-white bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Sergio
              Manuel Cortés Ramos</span>. Soy una persona apasionada por <span class="text-white font-semibold">resolver
              problemas</span> y siempre busco la manera de <span class="text-white font-semibold">ayudar a los
              demás</span>. Disfruto <span class="text-white font-semibold">cantar y escuchar música</span>, y tengo
            facilidad para <span class="text-white font-semibold">comunicarme en inglés</span>, lo que me permite
            aprender y conectar con personas de diferentes culturas.
          </p>
          <p class="leading-relaxed text-gray-300 lg:text-lg mb-6">
            Me gusta <span class="text-white font-semibold">salir a comer, pasear y hacer ejercicio</span> con mi novia
            y mi familia, y en mis ratos libres disfruto de los <span
              class="text-white font-semibold">videojuegos</span> y de ver <span
              class="text-white font-semibold">películas</span> románticas, de misterio, terror y ciencia ficción.
          </p>
          <p class="leading-relaxed text-gray-300 lg:text-lg">
            Mis objetivos de vida incluyen <span class="text-white font-semibold">construir mi propia casa</span>, <span
              class="text-white font-semibold">casarme en Hawái</span>, tener <span class="text-white font-semibold">dos
              hijos</span> y eventualmente <span class="text-white font-semibold">administrar mi propia empresa</span>.
            En resumen, busco combinar mis <span class="text-white font-semibold">habilidades, pasiones y valores</span>
            para crecer como persona y profesional, disfrutando cada momento y dejando un impacto positivo en quienes me
            rodean.
          </p>
        </div>

        <!-- Imagen -->
        <div class="flex justify-center">
          <div class="relative group">
            <!-- Glow effect -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300">
            </div>
            <img src="\images\personal\checo-parking-lot.jpg" alt="Foto de Sergio Cortés"
              class="relative rounded-2xl shadow-2xl w-full max-w-md h-80 object-cover border-4 border-gray-900 transition-transform duration-300 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
