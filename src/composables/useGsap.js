import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Professional GSAP-driven animations for the portfolio.
 *
 * Powers four layers of motion:
 *  1. Hero entrance timeline (eyebrow → title → subtitle → CTAs → metrics + portrait).
 *  2. Scroll-triggered reveals on any `[data-reveal]` / `.reveal` element with optional `data-delay`.
 *  3. Counter animation on `[data-counter]` elements (e.g. "3+", "150+").
 *  4. Subtle parallax on `[data-parallax]` elements as the user scrolls.
 *
 * Everything is wrapped in `gsap.context()` for safe automatic teardown
 * and respects `prefers-reduced-motion`.
 */
export function useGsap() {
  let ctx = null

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const init = () => {
    if (typeof window === 'undefined') return

    ctx = gsap.context(() => {
      // ────────────────────────────────────────────────────────────
      // Reveal-on-scroll (replaces previous IntersectionObserver flow)
      // ────────────────────────────────────────────────────────────
      const reveals = gsap.utils.toArray('.reveal, [data-reveal]')

      if (reduceMotion) {
        gsap.set(reveals, { clearProps: 'all', opacity: 1, y: 0 })
      } else {
        reveals.forEach((el) => {
          const delay = Number(el.dataset?.delay ?? 0) * 0.06
          gsap.fromTo(
            el,
            { opacity: 0, y: 36, filter: 'blur(2px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1.4,
              delay,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 92%',
                once: true,
              },
            },
          )
        })
      }

      // ────────────────────────────────────────────────────────────
      // Hero entrance timeline (cinematic, smooth and unhurried)
      // ────────────────────────────────────────────────────────────
      const hero = document.querySelector('#hero')
      if (hero && !reduceMotion) {
        const tl = gsap.timeline({
          defaults: { ease: 'expo.out' },
          delay: 0.15,
        })
        tl.from(hero.querySelectorAll('[data-hero-line]'), {
          y: 32,
          opacity: 0,
          duration: 1.4,
          stagger: 0.12,
        })
          .from(
            hero.querySelectorAll('[data-hero-cta]'),
            { y: 18, opacity: 0, duration: 1.1, stagger: 0.1 },
            '-=0.9',
          )
          .from(
            hero.querySelectorAll('[data-hero-metric]'),
            { y: 16, opacity: 0, duration: 0.9, stagger: 0.08 },
            '-=0.75',
          )
          .from(
            hero.querySelector('[data-hero-portrait]'),
            { scale: 0.94, opacity: 0, duration: 1.6, ease: 'power4.out' },
            0,
          )
      }

      // ────────────────────────────────────────────────────────────
      // Animated counters: e.g. <span data-counter>3+</span>
      // ────────────────────────────────────────────────────────────
      gsap.utils.toArray('[data-counter]').forEach((el) => {
        const raw = el.textContent ?? ''
        const match = raw.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
        if (!match) return
        const [, prefix, numberStr, suffix] = match
        const target = Number(numberStr)
        const obj = { value: 0 }

        if (reduceMotion) {
          el.textContent = `${prefix}${target}${suffix}`
          return
        }

        gsap.to(obj, {
          value: target,
          duration: 2.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => {
            const isInt = Number.isInteger(target)
            const v = isInt ? Math.round(obj.value) : obj.value.toFixed(1)
            el.textContent = `${prefix}${v}${suffix}`
          },
        })
      })

      // ────────────────────────────────────────────────────────────
      // Soft parallax on opted-in elements
      // ────────────────────────────────────────────────────────────
      if (!reduceMotion) {
        gsap.utils.toArray('[data-parallax]').forEach((el) => {
          const depth = Number(el.dataset.parallax || 0.15)
          gsap.to(el, {
            yPercent: -10 * depth * 10,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          })
        })
      }

      // Refresh after fonts/images settle to keep triggers accurate
      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener('load', refresh, { once: true })
      if (document.fonts?.ready) document.fonts.ready.then(refresh).catch(() => {})
    })
  }

  onMounted(() => {
    // Defer one frame so child components have rendered their reveal targets.
    requestAnimationFrame(init)
  })

  onBeforeUnmount(() => {
    ctx?.revert()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
}
