import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import { ReactQueryDevtools } from "react-query-devtools"

import Products from "./components/Products"
import ProductsCount from "./components/ProductsCount"
import ProductPage from "./pages/ProductPage"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div>
          <ProductsCount />
          <Products />
        </div>
        <Route path="/product/:id" component={ProductPage} />
      </div>
      <ReactQueryDevtools />
    </BrowserRouter>
  )
}

export default App
