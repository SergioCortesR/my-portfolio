/**
 * Generates single-page PDF CVs from public/cv-src/*.html.
 *
 * Strategy:
 *   1. Launch Chrome via puppeteer-core (system Chrome).
 *   2. Render the HTML at Letter content width (7.7in × 96 = 739.2px).
 *   3. Measure content height in print media.
 *   4. Compute the scale needed to fit usable Letter (10.2in × 96 = 979.2px tall).
 *   5. Generate a Letter-sized PDF with `pageRanges: '1'` to guarantee a single page.
 *
 * Run: `npm run cv:pdf`
 */
import puppeteer from 'puppeteer-core'
import { existsSync, mkdirSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = resolve(__dirname, '..', 'public')

const CHROME_PATHS = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean)

const executablePath = CHROME_PATHS.find((p) => existsSync(p))
if (!executablePath) {
  console.error('Chrome executable not found. Set CHROME_PATH environment variable.')
  process.exit(1)
}

const SOURCES = [
  { src: `${PUBLIC}/cv-src/CV_Sergio_Cortes_ES.html`, out: `${PUBLIC}/cv/CV_Sergio_Cortes_ES.pdf` },
  { src: `${PUBLIC}/cv-src/CV_Sergio_Cortes_EN.html`, out: `${PUBLIC}/cv/CV_Sergio_Cortes_EN.pdf` },
]

// Letter size at 96dpi
const PAGE_W = 8.5 * 96 // 816
const PAGE_H = 11 * 96 // 1056
const MARGIN_IN = 0.4
const MARGIN_PX = MARGIN_IN * 96 // 38.4
const USABLE_W = PAGE_W - 2 * MARGIN_PX // 739.2
const USABLE_H = PAGE_H - 2 * MARGIN_PX // 979.2

const browser = await puppeteer.launch({
  executablePath,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu'],
})

try {
  for (const { src, out } of SOURCES) {
    if (!existsSync(src)) {
      console.error(`Missing source: ${src}`)
      continue
    }

    const page = await browser.newPage()
    const fileUrl = 'file:///' + src.replace(/\\/g, '/')
    await page.goto(fileUrl, { waitUntil: 'networkidle0' })
    await page.emulateMediaType('print')
    await page.setViewport({ width: Math.round(USABLE_W), height: Math.round(USABLE_H) })

    // Pin layout width so measurement reflects actual print box.
    await page.addStyleTag({
      content: `
        html, body { width: ${USABLE_W}px !important; max-width: ${USABLE_W}px !important; margin: 0 !important; padding: 0 !important; }
        body { box-sizing: border-box; }
      `,
    })

    const contentH = await page.evaluate(() => {
      // Force layout, measure precise rendered height.
      void document.body.offsetHeight
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.getBoundingClientRect().height,
      )
    })

    let scale = USABLE_H / contentH
    if (scale > 1) scale = 1
    if (scale < 0.1) scale = 0.1

    mkdirSync(dirname(out), { recursive: true })
    await page.pdf({
      path: out,
      format: 'Letter',
      printBackground: true,
      margin: {
        top: `${MARGIN_IN}in`,
        right: `${MARGIN_IN}in`,
        bottom: `${MARGIN_IN}in`,
        left: `${MARGIN_IN}in`,
      },
      scale,
      pageRanges: '1',
      preferCSSPageSize: false,
    })

    const size = statSync(out).size
    console.log(
      `✓ ${out.split(/[\\/]/).pop()} — contentH=${contentH}px scale=${scale.toFixed(3)} size=${size}B`,
    )
    await page.close()
  }
} finally {
  await browser.close()
}
