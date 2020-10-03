import React from "react"
import { Link } from "react-router-dom"
import RemoveProduct from "./RemoveProduct"
const ListItem = ({ id, name, amount }) => {
  return (
    <div>
      <RemoveProduct id={id} />
      <Link to={`/product/${id}`}>
        {name} - ${amount}
      </Link>
    </div>
  )
}

export default ListItem
