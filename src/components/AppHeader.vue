<template>
  <header class="site-header" :class="{ 'site-header--scrolled': scrolled }">
    <nav class="site-nav" aria-label="Main navigation">
      <a href="#hero" class="site-brand" @click="open = false">
        <span class="site-brand__mark">SC</span>
        <span class="site-brand__name">Sergio Cortés</span>
      </a>

      <ul class="site-nav__links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="site-nav__link">{{ link.label }}</a>
        </li>
      </ul>

      <div class="site-nav__actions">
        <button
          type="button"
          class="site-icon-button"
          @click="toggleTheme"
          :aria-label="theme === 'dark' ? t.nav.themeLight : t.nav.themeDark"
          :title="theme === 'dark' ? t.nav.themeLight : t.nav.themeDark"
        >
          <svg v-if="theme === 'dark'" class="site-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path stroke-linecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg v-else class="site-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>

        <button
          type="button"
          class="site-language-button"
          @click="toggleLocale"
          :aria-label="t.nav.language"
        >
          <span :class="locale === 'es' ? 'is-active' : 'is-muted'">ES</span>
          <span class="is-muted">/</span>
          <span :class="locale === 'en' ? 'is-active' : 'is-muted'">EN</span>
        </button>

        <a
          :href="cvHref"
          :download="cvFilename"
          class="site-action-button site-action-button--accent"
          :aria-label="t.nav.downloadCV"
        >
          <svg class="site-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
          </svg>
          <span>{{ t.nav.downloadCV }}</span>
        </a>

        <a
          href="https://wa.me/524496050497"
          target="_blank"
          rel="noopener"
          class="site-action-button site-action-button--primary"
        >{{ t.nav.contact }}</a>

        <button
          type="button"
          class="site-menu-button"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          @click.stop="open = !open"
        >
          <svg v-if="!open" class="site-icon site-icon--menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="site-icon site-icon--menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </nav>

    <transition
      enter-active-class="mobile-menu-transition"
      enter-from-class="mobile-menu-enter-from"
      enter-to-class="mobile-menu-enter-to"
      leave-active-class="mobile-menu-transition"
      leave-from-class="mobile-menu-enter-to"
      leave-to-class="mobile-menu-enter-from"
    >
      <div v-show="open" id="mobile-menu" ref="mobileMenu" class="site-mobile-menu">
        <ul class="site-mobile-menu__list">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="site-mobile-menu__link" @click="open = false">
              <span>{{ link.label }}</span>
              <svg class="site-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </a>
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

const handleScroll = () => { scrolled.value = window.scrollY > 12 }

const handleClickOutside = e => {
  if (open.value && mobileMenu.value && !mobileMenu.value.contains(e.target)) {
    open.value = false
  }
}

let mqDesktop = null
const handleMqChange = e => {
  if (e.matches) open.value = false   // close drawer when resizing to desktop
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)
  handleScroll()
  mqDesktop = window.matchMedia('(min-width: 1200px)')
  mqDesktop.addEventListener('change', handleMqChange)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  mqDesktop?.removeEventListener('change', handleMqChange)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  background: transparent;
  border-bottom: 1px solid transparent;
  backdrop-filter: blur(18px);
  transition: background 0.35s var(--easing), border-color 0.35s var(--easing);
}

.site-header--scrolled {
  background: color-mix(in srgb, var(--bg-base) 86%, transparent);
  border-color: var(--border-subtle);
}

.site-nav {
  display: flex;
  align-items: center;
  width: min(100%, 82rem);
  min-width: 0;
  margin: 0 auto;
  padding: 0.75rem clamp(0.75rem, 3vw, 1.5rem);
  gap: clamp(0.5rem, 1vw, 0.875rem);
}

.site-brand,
.site-nav__actions,
.site-nav__links,
.site-action-button,
.site-icon-button,
.site-language-button,
.site-menu-button,
.site-mobile-menu__link {
  display: flex;
  align-items: center;
}

.site-brand {
  flex: 0 0 auto;
  gap: 0.625rem;
  min-width: 0;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-decoration: none;
}

.site-brand__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-subtle);
  background: var(--bg-raised);
  color: var(--accent);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.75rem;
  transition: border-color 0.2s var(--easing);
}

.site-brand:hover .site-brand__mark { border-color: var(--accent); }

.site-brand__name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.site-nav__links {
  display: none;
  flex: 1 1 auto;
  justify-content: center;
  min-width: 0;
  gap: 0.125rem;
  margin: 0 0.75rem;
  padding: 0;
  list-style: none;
}

.site-nav__link {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s var(--easing), background 0.2s var(--easing);
}

.site-nav__link:hover {
  color: var(--text-primary);
  background: var(--bg-raised);
}

.site-nav__actions {
  margin-left: auto;
  flex: 0 0 auto;
  justify-content: flex-end;
  gap: clamp(0.25rem, 1vw, 0.5rem);
}

.site-icon { width: 1rem; height: 1rem; flex: 0 0 1rem; }
.site-icon--menu { width: 1.25rem; height: 1.25rem; flex-basis: 1.25rem; }

.site-icon-button,
.site-language-button,
.site-menu-button,
.site-action-button {
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 0.625rem;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s var(--easing), background 0.2s var(--easing), border-color 0.2s var(--easing), filter 0.2s var(--easing);
}

.site-icon-button,
.site-menu-button {
  width: 2.125rem;
  height: 2.125rem;
  padding: 0;
  background: transparent;
  color: var(--text-secondary);
}

.site-language-button {
  gap: 0.45rem;
  min-width: 4.25rem;
  height: 2.125rem;
  padding: 0 0.5rem;
  background: transparent;
  color: var(--text-secondary);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.72rem;
  line-height: 1;
  letter-spacing: 0.08em;
}

.site-icon-button:hover,
.site-language-button:hover,
.site-menu-button:hover {
  color: var(--text-primary);
  background: var(--bg-raised);
}

.is-active { color: var(--text-primary); }
.is-muted { color: var(--text-muted); }

.site-action-button {
  display: none;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0 1.125rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.site-action-button--accent {
  background: var(--accent-soft);
  border-color: var(--accent-soft);
  color: var(--accent);
}

.site-action-button--accent:hover {
  border-color: var(--accent);
  filter: brightness(1.08);
}

.site-action-button--primary {
  background: var(--text-primary);
  color: var(--bg-base);
}

.site-action-button--primary:hover { filter: brightness(1.05); }

.site-menu-button { display: flex; }

.site-mobile-menu {
  position: absolute;
  inset: 100% 0 auto 0;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  background: color-mix(in srgb, var(--bg-base) 97%, transparent);
  border-bottom: 1px solid var(--border-subtle);
  box-shadow: 0 18px 40px -24px rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(18px);
}

.site-mobile-menu__list {
  display: flex;
  flex-direction: column;
  width: min(100%, 82rem);
  margin: 0 auto;
  padding: 0.5rem clamp(0.75rem, 3vw, 1.5rem) 0.75rem;
  list-style: none;
}

.site-mobile-menu__link {
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 0.75rem;
  border-radius: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s var(--easing), background 0.2s var(--easing);
}

.site-mobile-menu__link:hover,
.site-mobile-menu__link:active {
  color: var(--text-primary);
  background: var(--bg-raised);
}

.mobile-menu-transition { transition: opacity 0.22s var(--easing), transform 0.22s var(--easing); }
.mobile-menu-enter-from { opacity: 0; transform: translateY(-0.25rem); }
.mobile-menu-enter-to { opacity: 1; transform: translateY(0); }

@media (max-width: 479px) {
  .site-nav { padding-inline: 0.75rem; }
  .site-brand__name { display: none; }
  .site-nav__actions { gap: 0.25rem; }
  .site-language-button { min-width: 4rem; padding-inline: 0.4rem; }
}

@media (min-width: 1200px) {
  .site-nav__links,
  .site-action-button { display: flex; }
  .site-menu-button,
  .site-mobile-menu { display: none !important; }
}
</style>
