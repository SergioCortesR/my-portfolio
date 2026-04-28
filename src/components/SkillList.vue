<template>
  <section class="section-shell">
    <div class="container mx-auto max-w-6xl">
      <header class="reveal mb-14 max-w-2xl">
        <span class="section-eyebrow">{{ t.skills.title }}</span>
        <h2 class="section-title">{{ t.skills.subtitle }}</h2>
      </header>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(group, gi) in t.skills.groups"
          :key="group.name"
          class="surface p-6 reveal"
          :data-delay="Math.min(gi + 1, 5)"
        >
          <div class="flex items-center gap-2 mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
            <h3 class="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              {{ group.name }}
            </h3>
          </div>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item.name"
              class="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
            >
              <img
                v-if="item.icon"
                :src="item.icon"
                :alt="item.name"
                class="w-4 h-4 object-contain"
                loading="lazy"
                decoding="async"
                @error="onIconError"
              />
              <svg
                v-else
                class="w-3.5 h-3.5 text-[var(--accent)] opacity-80"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2zm6 12l.8 2.7L21 17.5l-2.2.8L18 21l-.8-2.7L15 17.5l2.2-.8L18 14zM6 14l.6 2L8 16.6l-1.4.4L6 18.4l-.6-1.4L4 16.6l1.4-.6L6 14z"/>
              </svg>
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n'

const { t } = useI18n()

const onIconError = e => {
  // Gracefully hide broken icons (e.g. CDN slug not found) so only the name shows
  e.target.style.display = 'none'
}
</script>
