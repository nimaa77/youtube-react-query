import React from "react"
import { ReactComponent as Remove } from "../svg/remove.svg"
import { useDeleteProduct } from "../hooks"

const RemoveProduct = ({ id }) => {
  const [remove] = useDeleteProduct()
  return (
    <Remove
      width="15px"
      height="15px"
      onClick={() => remove(id)}
    />
  )
}

export default RemoveProduct
