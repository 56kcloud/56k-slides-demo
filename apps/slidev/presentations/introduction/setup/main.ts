import { createI18n } from 'vue-i18n'
import type { App } from 'vue'

const deck   = (import.meta as any).env?.VITE_DECK || 'introduction'
const locale = (import.meta as any).env?.VITE_LOCALE || 'en'

const messageFiles = (import.meta as any).glob('../../../languages/*/*.json', { eager: true })

function loadMessages(loc: string, dk: string) {
  const key = `../../../languages/${loc}/${dk}.json`
  const mod = messageFiles[key]
  if (!mod) {
    console.warn('[i18n] Missing translation file:', key)
    return {}
  }
  return (mod as any).default ?? mod
}

export default ({ app }: { app: App }) => {
  const msgs = loadMessages(locale, deck)

  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: { [locale]: msgs },
  })

  if ((i18n as any).mode === 'composition') {
    (i18n.global.locale as any).value = locale
  }

  console.log('[i18n] deck:', deck, '| locale:', locale, '| keys:', Object.keys(msgs))
  app.use(i18n)
}
