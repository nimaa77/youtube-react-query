import React from "react"
import ListItem from "./ListItem"
import { useAllProducts } from "../hooks"

const Products = () => {
  const { data: products, isLoading } = useAllProducts()

  if (isLoading) return <p>loading...</p>

  return (
    <ol>
      {products.map((product) => (
        <li key={product._id}>
          <ListItem
            id={product._id}
            name={product.name}
            amount={product.amount}
          />
        </li>
      ))}
    </ol>
  )
}

export default Products
