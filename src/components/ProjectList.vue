<template>
  <section
    class="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-900 via-gray-800 to-gray-800 flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Efectos decorativos de fondo -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl">
      </div>
    </div>

    <div class="relative z-10 w-full max-w-7xl">
      <!-- Título -->
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Proyectos
        </h2>
        <p class="text-gray-400 text-lg">
          Algunos de mis trabajos más destacados
        </p>
      </div>

      <!-- Cards de proyectos -->
      <div class="md:flex md:flex-row md:justify-center gap-6">
        <div v-for="project in projects" :key="project.title"
          class="m-5 max-w-sm rounded-xl shadow-lg bg-gray-900/80 backdrop-blur-sm border border-gray-700 overflow-hidden group hover:border-indigo-500 hover:shadow-indigo-500/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <a :href="project.link" target="_blank" v-if="project.link">
            <div class="relative overflow-hidden">
              <img class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                :src="project.image" :alt="project.title" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
          </a>
          <div v-else class="relative overflow-hidden">
            <img class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              :src="project.image" :alt="project.title" />
          </div>

          <div class="p-6">
            <h5 class="mb-3 text-2xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              {{ project.title }}
            </h5>
            <p class="mb-4 font-normal text-gray-400 leading-relaxed">
              <span v-html="project.description"></span>
            </p>
            <div v-if="project.technologies" class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-3 py-1 text-xs font-medium bg-indigo-600/20 text-indigo-300 rounded-full border border-indigo-500/30">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Contribución a COLP ERP agropecuario',
    description: 'Aplicación web basada en <b>Laravel y Vue</b> para empleados y administradores que centraliza la gestión de vacantes, tareas, mensajes, notificaciones, productos, préstamos, nómina y equipos, mejorando la comunicación y el control de los módulos empresariales. Proyecto perteneciente a <a href="https://cceo.com.mx/" class="hover:text-blue-400 transition-colors"><b>(CCEO software development)</b></a>',
    image: '\\images\\projects\\colp.jpg',
    link: 'https://colp.cceo.io/login',
    technologies: ['Laravel', 'Vue.js', 'PHP', 'MySQL']
  },
  {
    title: 'Sistema escolar Greenfield',
    description: 'Sistema escolar diseñada en <b>Java y JFrame</b> que centraliza la gestión de alumnos, grupos, colegiaturas, usuarios, pagos, facturas y parientes, facilitando la administración académica y financiera. Permite a la institución llevar un seguimiento organizado y eficiente, mejorando la comunicación y control dentro del entorno escolar.',
    image: '\\images\\projects\\login_greenfield.jpg',
    link: null,
    technologies: ['Java', 'JFrame', 'MySQL']
  },
  {
    title: 'Contribución en Estudio Plus',
    description: 'Proyecto web basado en <b>React y Node.js</b> enfocado en el aprendizaje profundo para matemáticas dirigido a estudiantes de educación primaria y media. Permite personalizar el contenido, así como las preguntas y respuestas, para adaptarse a diferentes necesidades educativas. Este proyecto busca mejorar la comprensión y el rendimiento de los estudiantes de manera interactiva, respetando la propiedad de <a href="https://apollo-solutions.com.mx/" class="hover:text-blue-400 transition-colors"><b>Apollo Solutions</b></a>.',
    image: '\\images\\projects\\apollo-estudio-plus.jpg',
    link: 'https://estudio-plus.com/login',
    technologies: ['React', 'Node.js', 'MongoDB']
  }
]
</script>
