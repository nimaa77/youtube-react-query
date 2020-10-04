import * as api from "../api"
import { useQuery, useMutation, queryCache } from "react-query"

const useAllProducts = () => {
  return useQuery("products", api.getAllProducts)
}

const useProduct = (id) => {
  return useQuery(["product", id], api.getProduct)
}

const useDelteProduct = () => {
  return useMutation(api.deleteProdcut, {
    onSuccess: (_, id) => {
      const products = queryCache.getQueryData("products")
      const data = products.filter((item) => item._id !== id)
      queryCache.setQueryData("products", data)
    },
  })
}

const useUpdateProduct = () => {
  return useMutation(api.updateProdcut, {
    onSuccess: (_, { id, ...variables }) => {
      queryCache.refetchQueries("products")
      queryCache.refetchQueries(["product", id])
    },
  })
}

export {
  useAllProducts,
  useDelteProduct,
  useProduct,
  useUpdateProduct,
}
