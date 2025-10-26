<template>
  <section
    class="py-20 px-6 bg-gradient-to-b from-gray-900 via-indigo-950/30 via-gray-800 to-gray-800 flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Efectos decorativos -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-1/3 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl">
      </div>
      <div class="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl">
      </div>
    </div>

    <div class="relative z-10 w-10/12 md:w-3/5 2xl:w-1/3">
      <!-- Título -->
      <div class="mb-12">
        <h2
          class="lg:text-5xl text-3xl font-extrabold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Experiencia y Escolaridad
        </h2>
        <p class="text-gray-400 text-lg">
          Mi trayectoria profesional y académica
        </p>
      </div>

      <!-- Timeline -->
      <ol class="relative border-s border-gray-700">
        <li v-for="(item, index) in experiences" :key="index" class="mb-10 ms-10 group">
          <span
            class="absolute flex items-center justify-center w-10 h-10 -start-5 rounded-full ring-4 ring-gray-900 bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <h3
            class="leading-tight text-white mb-2 lg:text-2xl text-xl font-bold group-hover:text-indigo-400 transition-colors">
            {{ item.title }}
          </h3>
          <p class="text-gray-400 mb-2 font-medium">{{ item.period }}</p>
          <p class="lg:text-base text-sm text-gray-300 pr-2 leading-relaxed">
            {{ item.description }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: 'Enlace de Informática y vinculación Estadística (B) en INEGI (Instituto Nacional de Estadística y Geografía)',
    period: 'Septiembre/2023 - Junio/2025',
    description: 'Experiencia en carga y validación de datos estadísticos nacionales para el RALAB, desarrollo y mantenimiento de módulos en el sistema web IKTAN, usando Oracle y SQLServer. Manejo de tecnologías como JSP, JSF, NetBeans, VS Code y Microsoft Office, con soporte técnico a nivel nacional y control de versiones con Git y TortoiseSVN.'
  },
  {
    title: 'Desarrollador Fullstack en CCEO software development',
    period: 'Diciembre/2022 - Agosto/2023',
    description: 'Experiencia en diseño y modelado de bases de datos, desarrollo frontend con Vue.js, HTML, CSS y JavaScript, y backend con Laravel (PHP + SQL) siguiendo MVC. Participación en sprints ágiles, control de versiones con GitHub en Ubuntu, y desarrollo completo de un ERP web para el sector agropecuario.'
  },
  {
    title: 'Programador y Diseñador de Software en Colegio greenfield',
    period: 'Enero/2021 - Abril/2022',
    description: 'Experiencia en diseño y desarrollo de bases de datos SQL, programación en Java para módulos administrativos escolares, desarrollo de interfaces y CRUDs, así como creación de consultas, funciones y procedimientos almacenados.'
  },
  {
    title: 'Ingeniería en Sistemas Estratégicos de Información en UNIVERSIDAD POLITÉCNICA DE AGUASCALIENTES',
    period: 'Septiembre/2019 - Abril/2023',
    description: 'Formación en análisis, diseño y desarrollo de software, bases de datos y sistemas de información estratégicos, con enfoque en soluciones tecnológicas y programación avanzada.'
  }
]
</script>
