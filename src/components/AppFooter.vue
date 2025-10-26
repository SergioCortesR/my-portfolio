<template>
    <footer class="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div class="w-full max-w-screen-xl mx-auto p-8 md:py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <!-- Información personal -->
                <div>
                    <div class="flex items-center mb-4 space-x-3">
                        <img src="https://avatars.githubusercontent.com/u/120584893?v=4"
                            class="h-10 w-10 rounded-full ring-2 ring-indigo-500" alt="Sergio Cortés" />
                        <span
                            class="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Sergio Cortés
                        </span>
                    </div>
                    <p class="text-gray-400 text-sm mb-4">
                        Fullstack Developer apasionado por crear soluciones digitales innovadoras.
                    </p>
                </div>

                <!-- Enlaces rápidos -->
                <div>
                    <h3 class="text-white font-semibold mb-4">Enlaces</h3>
                    <ul class="space-y-2">
                        <li>
                            <a href="#hero" class="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#experience" class="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                                Experiencia
                            </a>
                        </li>
                        <li>
                            <a href="#skills" class="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                                Habilidades
                            </a>
                        </li>
                        <li>
                            <a href="#projects" class="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a href="#about" class="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                                Sobre mí
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Redes sociales -->
                <div>
                    <h3 class="text-white font-semibold mb-4">Redes Sociales</h3>
                    <div class="flex space-x-4">
                        <a href="https://github.com/SergioCortesR" target="_blank"
                            class="text-gray-400 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.753-1.334-1.753-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.244 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.814 1.096.814 2.21 0 1.595-.015 2.877-.015 3.27 0 .32.215.694.825.577C20.565 21.795 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/sergio-cortes-ramos" target="_blank"
                            class="text-gray-400 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.33-.026-3.04-1.852-3.04-1.854 0-2.14 1.447-2.14 2.94v5.7h-3v-10h2.88v1.367h.04c.4-.754 1.38-1.547 2.84-1.547 3.035 0 3.6 1.998 3.6 4.59v5.59z" />
                            </svg>
                        </a>
                        <a href="https://wa.me/524496050497" target="_blank"
                            class="text-gray-400 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <hr class="my-8 border-gray-800" />

            <div class="flex flex-col md:flex-row justify-between items-center">
                <span class="text-sm text-gray-400">
                    © {{ currentYear }} <span class="font-semibold text-white">Sergio Cortés</span>. All rights
                    reserved.
                </span>
                <span class="text-sm text-gray-500 mt-4 md:mt-0">
                    Made with <span class="text-red-500">❤️</span> using Vue.js & Tailwind CSS
                </span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>