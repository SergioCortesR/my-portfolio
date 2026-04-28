<template>
  <header
    class="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b transition-colors duration-500"
    :class="scrolled
      ? 'bg-[var(--bg-base)]/85 border-[var(--border-subtle)]'
      : 'bg-transparent border-transparent'"
  >
    <nav class="container mx-auto flex items-center gap-3 py-3 px-4 sm:px-6">
      <a
        href="#hero"
        class="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--text-primary)] shrink-0"
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[var(--bg-raised)] border border-[var(--border-subtle)] text-[var(--accent)] font-mono text-xs group-hover:border-[var(--accent)] transition-colors"
        >SC</span>
        <span class="hidden sm:inline">Sergio Cortés</span>
      </a>

      <ul class="hidden lg:flex items-center gap-1 text-sm text-[var(--text-secondary)] mx-auto">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="px-3 py-2 rounded-md hover:text-[var(--text-primary)] transition-colors duration-200"
          >{{ link.label }}</a>
        </li>
      </ul>

      <div class="flex items-center gap-1 sm:gap-2 ml-auto">
        <button
          type="button"
          @click="toggleTheme"
          :aria-label="theme === 'dark' ? t.nav.themeLight : t.nav.themeDark"
          :title="theme === 'dark' ? t.nav.themeLight : t.nav.themeDark"
          class="btn btn-ghost p-2"
        >
          <svg v-if="theme === 'dark'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path stroke-linecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>

        <button
          type="button"
          @click="toggleLocale"
          :aria-label="t.nav.language"
          class="btn btn-ghost px-2.5 py-2 text-xs uppercase tracking-wider font-mono"
        >
          <span :class="locale === 'es' ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'">ES</span>
          <span class="text-[var(--text-muted)]">/</span>
          <span :class="locale === 'en' ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'">EN</span>
        </button>

        <a
          :href="cvHref"
          :download="cvFilename"
          class="hidden md:inline-flex btn btn-accent text-xs"
          :aria-label="t.nav.downloadCV"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
          </svg>
          <span>{{ t.nav.downloadCV }}</span>
        </a>

        <a
          href="https://wa.me/524496050497"
          target="_blank"
          rel="noopener"
          class="hidden xl:inline-flex btn btn-primary text-sm"
        >{{ t.nav.contact }}</a>

        <button
          type="button"
          class="lg:hidden btn btn-ghost p-2"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          @click.stop="open = !open"
        >
          <svg v-if="!open" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </nav>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="open"
        id="mobile-menu"
        ref="mobileMenu"
        class="lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 surface p-4 rounded-xl"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              @click="open = false"
              class="block px-3 py-2.5 rounded-md text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)] transition-colors"
            >{{ link.label }}</a>
          </li>
          <li class="pt-2 mt-2 border-t border-[var(--border-subtle)] flex flex-col gap-2">
            <a
              :href="cvHref"
              :download="cvFilename"
              @click="open = false"
              class="btn btn-accent text-sm w-full md:hidden"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
              {{ t.nav.downloadCV }}
            </a>
            <a
              href="https://wa.me/524496050497"
              target="_blank"
              rel="noopener"
              @click="open = false"
              class="btn btn-primary w-full xl:hidden"
            >{{ t.nav.contact }}</a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../i18n'
import { useTheme } from '../composables/useTheme.js'

const { t, locale, toggleLocale, cvHref, cvFilename } = useI18n()
const { theme, toggleTheme } = useTheme()

const open = ref(false)
const scrolled = ref(false)
const mobileMenu = ref(null)

const links = computed(() => [
  { href: '#hero', label: t.value.nav.home },
  { href: '#experience', label: t.value.nav.experience },
  { href: '#skills', label: t.value.nav.skills },
  { href: '#projects', label: t.value.nav.projects },
  { href: '#about', label: t.value.nav.about },
])

const handleScroll = () => {
  scrolled.value = window.scrollY > 12
}

const handleClickOutside = e => {
  if (open.value && mobileMenu.value && !mobileMenu.value.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>
