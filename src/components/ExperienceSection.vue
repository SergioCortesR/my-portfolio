<template>
  <section class="section-shell">
    <div class="container mx-auto max-w-5xl">
      <header class="reveal mb-14">
        <span class="section-eyebrow">{{ t.experience.title }}</span>
        <h2 class="section-title">{{ t.experience.subtitle }}</h2>
      </header>

      <ol class="relative pl-6 sm:pl-10 border-l border-[var(--border-subtle)]">
        <li
          v-for="(item, index) in t.experience.items"
          :key="index"
          class="relative mb-10 reveal"
          :data-delay="Math.min(index + 1, 5)"
        >
          <span
            class="absolute -left-[33px] sm:-left-[41px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[var(--bg-base)] ring-1"
            :class="item.type === 'education'
              ? 'bg-purple-400 ring-purple-400/40'
              : 'bg-[var(--accent)] ring-[var(--accent)]/40'"
          ></span>

          <div class="flex flex-col gap-1.5">
            <div class="flex items-center gap-3 flex-wrap">
              <span
                class="text-[10px] uppercase tracking-widest font-mono px-2 py-0.5 rounded border"
                :class="item.type === 'education'
                  ? 'text-purple-300 border-purple-400/30 bg-purple-400/10'
                  : 'text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent-soft)]'"
              >
                {{ item.type === 'education' ? '· EDU' : '· WORK' }}
              </span>
              <time class="text-xs text-[var(--text-muted)] font-mono">{{ item.period }}</time>
            </div>

            <h3 class="text-lg sm:text-xl font-semibold text-[var(--text-primary)] leading-snug">
              {{ item.role }}
            </h3>

            <p class="text-sm text-[var(--text-secondary)] font-medium">{{ item.org }}</p>

            <p class="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-1 text-pretty">
              {{ item.description }}
            </p>

            <div v-if="item.tags?.length" class="flex flex-wrap gap-1.5 mt-3">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="px-2 py-0.5 text-xs rounded-md bg-[var(--bg-raised)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
              >{{ tag }}</span>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
