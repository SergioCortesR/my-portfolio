<template>
  <section
    class="section-shell min-h-screen flex items-center pt-32 md:pt-28 overflow-hidden"
  >
    <div class="absolute inset-0 bg-grid pointer-events-none"></div>
    <div class="absolute inset-0 bg-radial-accent pointer-events-none"></div>

    <div class="relative z-10 container mx-auto max-w-6xl">
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        <div class="order-2 lg:order-1 space-y-6">
          <div
            data-hero-line
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-raised)]/70 backdrop-blur text-xs text-[var(--text-secondary)]"
          >
            <span class="relative flex h-2 w-2">
              <span class="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            {{ t.hero.status }}
          </div>

          <p data-hero-line class="text-sm text-[var(--text-muted)] font-mono tracking-wide">
            {{ t.hero.role }}
          </p>

          <h1 data-hero-line class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] text-balance">
            <span class="text-[var(--text-primary)]">{{ t.hero.headline }}</span>
            <br />
            <span
              class="bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-secondary)] to-[var(--accent)] bg-clip-text text-transparent"
            >{{ t.hero.headlineAccent }}</span>
          </h1>

          <p data-hero-line class="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl text-pretty leading-relaxed">
            {{ t.hero.description }}
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a data-hero-cta href="#projects" class="btn btn-primary">
              {{ t.hero.primaryCta }}
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              data-hero-cta
              :href="cvHref"
              :download="cvFilename"
              class="btn btn-secondary"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
              {{ t.hero.secondaryCta }}
            </a>
            <a
              data-hero-cta
              href="https://wa.me/524496050497"
              target="_blank"
              rel="noopener"
              class="btn btn-ghost"
            >{{ t.hero.contactCta }}</a>
          </div>

          <div class="flex items-center gap-3 pt-4">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener"
              :aria-label="social.label"
              class="p-2.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>

          <div class="grid grid-cols-3 gap-4 pt-8 border-t border-[var(--border-subtle)] mt-6">
            <div v-for="(metric, i) in t.hero.metrics" :key="i" data-hero-metric>
              <p data-counter class="font-display text-2xl sm:text-3xl text-[var(--text-primary)]">{{ metric.value }}</p>
              <p class="text-xs text-[var(--text-muted)] mt-1">{{ metric.label }}</p>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center" data-hero-portrait>
          <div class="relative">
            <div
              class="absolute -inset-3 rounded-full bg-gradient-to-tr from-[var(--accent)]/20 via-transparent to-purple-500/10 blur-2xl"
            ></div>
            <div
              class="relative rounded-full p-1 bg-gradient-to-tr from-[var(--border-strong)] via-[var(--accent)]/40 to-[var(--border-subtle)]"
            >
              <img
                src="/images/personal/comiendo_en_los_pibes.jpg"
                alt="Sergio Cortés"
                loading="eager"
                class="block w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover bg-[var(--bg-raised)]"
              />
            </div>
            <div
              class="absolute -bottom-3 -right-3 surface px-3 py-2 text-xs flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft"></span>
              <span class="text-[var(--text-secondary)]">INEGI · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a
      href="#experience"
      class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
      aria-label="Scroll"
    >
      <span class="font-mono uppercase tracking-widest">scroll</span>
      <span class="block w-px h-8 bg-gradient-to-b from-[var(--text-muted)] to-transparent"></span>
    </a>
  </section>
</template>

<script setup>
import { h } from 'vue'
import { useI18n } from '../i18n'

const { t, cvHref, cvFilename } = useI18n()

const Github = {
  render: () =>
    h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', {
        d: 'M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.753-1.334-1.753-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.244 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.814 1.096.814 2.21 0 1.595-.015 2.877-.015 3.27 0 .32.215.694.825.577C20.565 21.795 24 17.3 24 12c0-6.63-5.373-12-12-12z',
      }),
    ]),
}

const Linkedin = {
  render: () =>
    h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('path', {
        d: 'M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.33-.026-3.04-1.852-3.04-1.854 0-2.14 1.447-2.14 2.94v5.7h-3v-10h2.88v1.367h.04c.4-.754 1.38-1.547 2.84-1.547 3.035 0 3.6 1.998 3.6 4.59v5.59z',
      }),
    ]),
}

const Mail = {
  render: () =>
    h(
      'svg',
      { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' },
      [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          d: 'M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        }),
      ],
    ),
}

const socials = [
  { label: 'GitHub', href: 'https://github.com/SergioCortesR', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sergio-cortes-ramos', icon: Linkedin },
  { label: 'Email', href: 'mailto:cors010803@gmail.com', icon: Mail },
]
</script>
