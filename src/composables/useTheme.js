import { ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const SUPPORTED = ['dark', 'light']

const detectInitial = () => {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage?.getItem(STORAGE_KEY)
  if (stored && SUPPORTED.includes(stored)) return stored
  // Default: One Dark profesional
  return 'dark'
}

const theme = ref(detectInitial())

watch(
  theme,
  value => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('data-theme', value)
    document.documentElement.style.colorScheme = value
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', value === 'dark' ? '#282c34' : '#fafafa')
    window.localStorage?.setItem(STORAGE_KEY, value)
  },
  { immediate: true },
)

export function useTheme() {
  return {
    theme,
    isDark: () => theme.value === 'dark',
    setTheme: value => {
      if (SUPPORTED.includes(value)) theme.value = value
    },
    toggleTheme: () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    },
  }
}
