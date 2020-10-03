import React from "react"
import { useParams } from "react-router-dom"
import EditProduct from "../components/EditProduct"
import { useProduct } from "../hooks"

const ProductPage = () => {
  const { id } = useParams()
  const { data: product, isLoading } = useProduct(id)

  if (isLoading) return <p>loading...</p>

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{product.name}</td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>{product.amount}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </table>
      <EditProduct key={id} id={id} {...product} />
    </div>
  )
}

export default ProductPage
