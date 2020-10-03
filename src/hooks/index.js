import React from "react"
import * as api from "../api"

const useAllProducts = () => {
  const [data, setData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

  return { data, isLoading }
}

const useProduct = (id) => {
  const [data, setData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

  return { data, isLoading }
}

const useDelteProduct = () => {
  const [data, setData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetch = (id) => {}

  return [fetch, { data, isLoading }]
}

const useUpdateProduct = () => {
  const [data, setData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetch = (formData) => {}

  return [fetch, { data, isLoading }]
}

export {
  useAllProducts,
  useDelteProduct,
  useProduct,
  useUpdateProduct,
}
