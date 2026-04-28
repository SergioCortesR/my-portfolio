<template>
  <section class="section-shell">
    <div class="container mx-auto max-w-6xl">
      <header class="reveal mb-14 max-w-2xl">
        <span class="section-eyebrow">{{ t.projects.title }}</span>
        <h2 class="section-title">{{ t.projects.subtitle }}</h2>
      </header>

      <div class="grid md:grid-cols-2 gap-5">
        <article
          v-for="(project, i) in t.projects.items"
          :key="project.title"
          class="surface surface-interactive group overflow-hidden flex flex-col reveal"
          :data-delay="Math.min(i + 1, 5)"
        >
          <a
            :href="project.link || '#'"
            :target="project.link ? '_blank' : undefined"
            :rel="project.link ? 'noopener' : undefined"
            class="relative block aspect-[16/9] overflow-hidden border-b border-[var(--border-subtle)]"
            :aria-label="project.title"
          >
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              @error="onImageError($event, project.title)"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-80"
            ></div>
            <span
              v-if="!project.link"
              class="absolute top-3 right-3 px-2 py-1 text-[10px] uppercase tracking-wider rounded-md bg-[var(--bg-base)]/80 text-[var(--text-muted)] border border-[var(--border-subtle)]"
            >{{ t.projects.privateProject }}</span>
          </a>

          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {{ project.title }}
            </h3>
            <p class="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed flex-1 text-pretty">
              {{ project.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-0.5 text-xs rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-mono"
              >{{ tech }}</span>
            </div>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="mt-5 inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors w-fit"
            >
              {{ t.projects.viewProject }}
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n'

const { t } = useI18n()

function onImageError(event, title) {
  const img = event.target
  if (img.dataset.fallback === '1') return
  img.dataset.fallback = '1'
  const initial = (title?.trim()?.[0] ?? '?').toUpperCase()
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 180'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='%23528bff'/><stop offset='100%' stop-color='%23c678dd'/>
    </linearGradient></defs>
    <rect width='320' height='180' fill='url(%23g)'/>
    <text x='50%' y='54%' text-anchor='middle' font-family='Inter,Arial,sans-serif' font-size='80' font-weight='700' fill='white' fill-opacity='0.9'>${initial}</text>
  </svg>`
  img.src = `data:image/svg+xml;utf8,${svg.replace(/\n\s*/g, '')}`
}
</script>
