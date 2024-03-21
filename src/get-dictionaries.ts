import "server-only"
import { Locale } from "../i18n-config"

const dictionaries = {
  "en-sa": () =>
    import("./dictionaries/en-sa.json").then((module) => module.default),
  "ar-sa": () =>
    import("./dictionaries/ar-sa.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries["en-sa"]()
