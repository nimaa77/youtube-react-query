import React from "react"
import { useUpdateProduct } from "../hooks"
import { getFormValues } from "../utils"

const EditProduct = ({ id, name, amount, description }) => {
  const [updateProduct] = useUpdateProduct()

  const onSubmit = (values) => {
    updateProduct({ id, ...values })
  }

  return (
    <form method="post" onSubmit={getFormValues(onSubmit)}>
      <h3>Edit Prodcut</h3>
      <label>
        Name:
        <input name="name" defaultValue={name} />
      </label>
      <label>
        Price:
        <input name="amount" defaultValue={amount} />
      </label>
      <label>
        Description:
        <input name="description" defaultValue={description} />
      </label>
      <button type="submit">submit</button>
    </form>
  )
}

export default EditProduct
