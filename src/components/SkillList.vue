<template>
    <section class="py-10 px-6 bg-gray-900 flex flex-col items-center justify-center">
        <div class="w-10/12 md:w-3/5 2xl:w-6/12">
            <!-- Título -->
            <h2 class="text-3xl font-bold mb-8 text-center text-white">
                Habilidades
            </h2>

            <!-- Cuadrícula de habilidades -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                <!-- Ejemplo de skill -->
                <div v-for="skill in skills" :key="skill.name"
                    class="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-indigo-600">
                    <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 mb-2" />
                    <span class="text-white font-medium text-center">{{ skill.name }}</span>
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
