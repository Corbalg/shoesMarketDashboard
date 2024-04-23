import { useContext } from 'react'
import { BrandTableComponent } from '../components/BrandTableComponent'
import { BrandContext } from '../context/BrandContext'

export const BrandsPage = () => {
  const { brands } = useContext(BrandContext)

  return (
    <>
      <BrandTableComponent brands={brands}/>
    </>
  )
}
