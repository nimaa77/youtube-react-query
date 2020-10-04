import axios from "axios"

const client = axios.create({
  baseURL: "/api",
})

const getAllProducts = async () => {
  const { data } = await client.get(`/products`)
  return data
}

const getProduct = async (_, id) => {
  const { data } = await client.get(`/products/${id}`)
  return data
}

const createProduct = async ({ name, description, amount }) => {
  const product = { name, description, amount }
  const { data } = await client.post(`/products`, product)
  return data
}

const updateProdcut = async ({ id, ...product }) => {
  const { data } = await client.put(`/products/${id}`, product)
  return data
}

const deleteProdcut = async (id) => {
  const { data } = await client.delete(`/products/${id}`)
  return data
}

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProdcut,
  deleteProdcut,
}
