import React, { Suspense, lazy } from "react"
import { Locale } from "../../../i18n-config"
import { getDictionary } from "../../get-dictionaries"
import dynamic from "next/dynamic"

const LazyCartTemplate = dynamic(() => import("../../modules/cart/templates"), {
  ssr: false,
})

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <p>Current locale: {lang}</p>
      <p>{dictionary.home}</p>
      <LazyCartTemplate dictionary={dictionary.cart} />
    </div>
  )
}
