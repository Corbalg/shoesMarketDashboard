import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ProductContext } from './ProductContext'

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [productsCount, setProductsCount] = useState(0)

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://shoesmarket.onrender.com/api/products')
            const data = await response.json()
            setProducts(data.products)
            setProductsCount(data.totalStock)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Hubo un problema al cargar los datos'
            })
        }
    }

    useEffect(() => {
      fetchProducts()
    }, [])

  return (
    <ProductContext.Provider value={{products, productsCount}}>
        {children}
    </ProductContext.Provider>
  )
}