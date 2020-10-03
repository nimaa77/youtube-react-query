import React from "react"
import { ReactComponent as Remove } from "../svg/remove.svg"
import { useDelteProduct } from "../hooks"

const RemoveProduct = ({ id }) => {
  const [remove] = useDelteProduct()
  return (
    <Remove
      width="15px"
      height="15px"
      onClick={() => remove(id)}
    />
  )
}

export default RemoveProduct
