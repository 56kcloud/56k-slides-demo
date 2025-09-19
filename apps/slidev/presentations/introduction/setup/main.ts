import type { App } from "vue";
import { createI18n } from "vue-i18n";

type LocaleMessages = Record<string, string>;
type MessageModule = LocaleMessages | { default: LocaleMessages };

const deck = import.meta.env.VITE_DECK ?? "introduction";
const locale = import.meta.env.VITE_LOCALE ?? "en";

const messageFiles = import.meta.glob<MessageModule>("../../../languages/*/*.json", {
  eager: true,
});

const isModuleWithDefault = (mod: MessageModule): mod is { default: LocaleMessages } =>
  typeof mod === "object" && mod !== null && "default" in mod;

function loadMessages(loc: string, dk: string): LocaleMessages {
  const key = `../../../languages/${loc}/${dk}.json`;
  const mod = messageFiles[key];
  if (!mod) {
    console.warn("[i18n] Missing translation file:", key);
    return {} as LocaleMessages;
  }
  return isModuleWithDefault(mod) ? mod.default : mod;
}

export default ({ app }: { app: App }) => {
  const msgs = loadMessages(locale, deck);

  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: "en",
    messages: { [locale]: msgs },
  });

  if (i18n.mode === "composition") {
    i18n.global.locale.value = locale;
  }

  console.log("[i18n] deck:", deck, "| locale:", locale, "| keys:", Object.keys(msgs));
  app.use(i18n);
};
