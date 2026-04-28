<template>
  <footer class="border-t border-[var(--border-subtle)] bg-[var(--bg-base)]">
    <div class="container mx-auto max-w-6xl px-6 py-12">
      <div class="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <a href="#hero" class="inline-flex items-center gap-2 text-sm font-semibold">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[var(--bg-raised)] border border-[var(--border-subtle)] text-[var(--accent)] font-mono text-xs">SC</span>
            <span>Sergio Cortés</span>
          </a>
          <p class="mt-3 text-sm text-[var(--text-secondary)] max-w-xs">{{ t.footer.tagline }}</p>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">
            {{ t.footer.quickLinks }}
          </h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">
            {{ t.footer.contact }}
          </h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="mailto:cors010803@gmail.com" class="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                cors010803@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/524496050497" target="_blank" rel="noopener" class="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                +52 449 605 0497
              </a>
            </li>
            <li>
              <a
                :href="cvHref"
                :download="cvFilename"
                class="text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors"
              >{{ t.nav.downloadCV }}</a>
            </li>
          </ul>

          <div class="flex items-center gap-2 mt-4">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener"
              :aria-label="social.label"
              class="p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
              v-html="social.svg"
            ></a>
          </div>
        </div>
      </div>

      <div class="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[var(--text-muted)]">
        <span>© {{ year }} Sergio Cortés · {{ t.footer.rights }}</span>
        <span>{{ t.footer.builtWith }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n'

const { t, cvHref, cvFilename } = useI18n()

const year = new Date().getFullYear()

const links = computed(() => [
  { href: '#hero', label: t.value.nav.home },
  { href: '#experience', label: t.value.nav.experience },
  { href: '#skills', label: t.value.nav.skills },
  { href: '#projects', label: t.value.nav.projects },
  { href: '#about', label: t.value.nav.about },
])

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/SergioCortesR',
    svg: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.753-1.334-1.753-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.244 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.814 1.096.814 2.21 0 1.595-.015 2.877-.015 3.27 0 .32.215.694.825.577C20.565 21.795 24 17.3 24 12c0-6.63-5.373-12-12-12z"/></svg>',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sergio-cortes-ramos',
    svg: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.33-.026-3.04-1.852-3.04-1.854 0-2.14 1.447-2.14 2.94v5.7h-3v-10h2.88v1.367h.04c.4-.754 1.38-1.547 2.84-1.547 3.035 0 3.6 1.998 3.6 4.59v5.59z"/></svg>',
  },
]
</script>
