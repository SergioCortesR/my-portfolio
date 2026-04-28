<template>
  <section class="section-shell">
    <div class="container mx-auto max-w-5xl">
      <header class="reveal mb-12 max-w-2xl">
        <span class="section-eyebrow">{{ t.about.title }}</span>
        <h2 class="section-title">{{ t.about.subtitle }}</h2>
      </header>

      <div class="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
        <div class="reveal">
          <div class="relative">
            <div class="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[var(--accent)]/15 to-transparent blur-xl"></div>
            <img
              src="/images/personal/checo-parking-lot.jpg"
              alt="Sergio Cortés"
              loading="lazy"
              class="relative w-full max-w-sm aspect-[4/5] object-cover rounded-2xl border border-[var(--border-subtle)]"
            />
          </div>

          <dl class="mt-6 grid grid-cols-2 gap-3">
            <div
              v-for="fact in t.about.facts"
              :key="fact.label"
              class="surface p-3"
            >
              <dt class="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                {{ fact.label }}
              </dt>
              <dd class="text-sm text-[var(--text-primary)] mt-1">{{ fact.value }}</dd>
            </div>
          </dl>
        </div>

        <div class="reveal" data-delay="2">
          <div class="surface p-7 sm:p-8 space-y-5">
            <p
              v-for="(p, i) in t.about.paragraphs"
              :key="i"
              class="text-[var(--text-secondary)] leading-relaxed text-pretty"
              v-html="p"
            ></p>

            <div class="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-3">
              <a
                :href="cvHref"
                :download="cvFilename"
                class="btn btn-accent text-sm"
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
                class="btn btn-secondary text-sm"
              >{{ t.hero.contactCta }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n'

const { t, cvHref, cvFilename } = useI18n()
</script>
