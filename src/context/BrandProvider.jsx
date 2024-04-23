import { useEffect, useState } from 'react'
import { BrandContext } from './BrandContext'


export const BrandProvider = ({children}) => {

    const [brands, setBrands] = useState([])
    const [brandsCount, setBrandsCount] = useState(0)

    const fetchBrands = async () => {
        try {
            const response = await fetch('https://shoesmarket.onrender.com/api/brands')
            const data = await response.json()
            setBrands(data)
            setBrandsCount(data.count)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Hubo un problema al cargar los datos'
            })
        }
    }

    useEffect(() => {
      fetchBrands()
    }, [])

  return (
    <BrandContext.Provider value={{brands, brandsCount}}>
        {children}
    </BrandContext.Provider>
  )
}
