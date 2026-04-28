import { ref, computed, watch } from 'vue'
import es from './locales/es.js'
import en from './locales/en.js'

const STORAGE_KEY = 'portfolio-locale'
const SUPPORTED = ['es', 'en']

const messages = { es, en }

const detectInitial = () => {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage?.getItem(STORAGE_KEY)
  if (stored && SUPPORTED.includes(stored)) return stored
  const navLang = (navigator.language || 'es').slice(0, 2).toLowerCase()
  return SUPPORTED.includes(navLang) ? navLang : 'es'
}

const locale = ref(detectInitial())

const t = computed(() => messages[locale.value])

watch(locale, value => {
  if (typeof window === 'undefined') return
  window.localStorage?.setItem(STORAGE_KEY, value)
  document.documentElement.setAttribute('lang', value)
  document.title = messages[value].meta.title
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', messages[value].meta.description)
}, { immediate: true })

const cvHref = computed(() =>
  locale.value === 'en' ? '/cv/CV_Sergio_Cortes_EN.pdf' : '/cv/CV_Sergio_Cortes_ES.pdf',
)

const cvFilename = computed(() =>
  locale.value === 'en' ? 'CV_Sergio_Cortes_EN.pdf' : 'CV_Sergio_Cortes_ES.pdf',
)

export function useI18n() {
  return {
    locale,
    t,
    cvHref,
    cvFilename,
    setLocale: value => {
      if (SUPPORTED.includes(value)) locale.value = value
    },
    toggleLocale: () => {
      locale.value = locale.value === 'es' ? 'en' : 'es'
    },
  }
}
