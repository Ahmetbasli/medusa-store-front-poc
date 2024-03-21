"use client"

import { getDictionary } from "../../../get-dictionaries"

const CartTemplate = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["cart"]
}) => {
  return <div>{dictionary.price}</div>
}

export default CartTemplate
