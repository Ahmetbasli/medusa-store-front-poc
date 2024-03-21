export const i18n = {
  defaultLocale: "en-sa",
  locales: ["en-sa", "ar-sa"],
} as const

export type Locale = (typeof i18n)["locales"][number]
