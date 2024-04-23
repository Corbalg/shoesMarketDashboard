import { useContext } from 'react'
import { ProductTableComponent } from '../components/ProductTableComponent'
import { ProductContext } from "../context/ProductContext"


export const ProductsPage = () => {

  const { products } = useContext(ProductContext)

  return (
    <>
      <ProductTableComponent products={products}/>
    </>
  )
}
