<template>
    <section
        class="py-20 px-6 bg-gradient-to-b from-gray-800 via-gray-800 via-gray-900 to-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
        <!-- Efecto de fondo decorativo -->
        <div class="absolute inset-0 opacity-10">
            <div
                class="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl">
            </div>
            <div
                class="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl">
            </div>
        </div>

        <div class="relative z-10 w-10/12 md:w-3/5 2xl:w-6/12">
            <!-- Título -->
            <div class="text-center mb-12">
                <h2
                    class="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                    Habilidades
                </h2>
                <p class="text-gray-400 text-lg">
                    Tecnologías y herramientas que domino
                </p>
            </div>

            <!-- Cuadrícula de habilidades -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <!-- Ejemplo de skill -->
                <div v-for="skill in skills" :key="skill.name"
                    class="group flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:border-indigo-500 hover:shadow-indigo-500/20 hover:shadow-2xl">
                    <!-- Contenedor de imagen con efecto -->
                    <div
                        class="relative mb-4 w-16 h-16 flex items-center justify-center bg-gray-900/50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                        <img :src="skill.icon" :alt="skill.name"
                            class="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span
                        class="text-gray-300 font-medium text-center text-sm group-hover:text-white transition-colors duration-300">
                        {{ skill.name }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const skills = [
    { name: 'Vue.js', icon: '/images/icons/vue-logo.png' },
    { name: 'Laravel', icon: '/images/icons/laravel-logo.png' },
    { name: 'React', icon: '/images/icons/react-logo.png' },
    { name: '.Net', icon: '/images/icons/.net-logo.png' },
    { name: 'GitHub', icon: '/images/icons/github-logo.png' },
    { name: 'MySQL', icon: '/images/icons/mysql-logo.png' },
    { name: 'Oracle DB', icon: '/images/icons/oracleDB-logo.png' },
    { name: 'JavaScript', icon: '/images/icons/js-logo.png' },
    { name: 'HTML5', icon: '/images/icons/html-logo.png' },
    { name: 'CSS3', icon: '/images/icons/css-logo.png' },
    { name: 'Java', icon: '/images/icons/java-logo.png' },
    { name: 'Office', icon: '/images/icons/office-logo.png' },
    { name: 'Inglés', icon: '/images/icons/english-logo.png' },
    { name: 'Php', icon: '/images/icons/php-logo.png' },
    { name: 'Postman', icon: '/images/icons/postman-logo.png' },
    { name: 'Web browser', icon: '/images/icons/web-browser-logo.png' },
]
</script>
