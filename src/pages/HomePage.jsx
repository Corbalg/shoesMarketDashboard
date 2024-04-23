import { useContext } from 'react'
import { BrandTableComponent } from '../components/BrandTableComponent'
import { BrandContext } from '../context/BrandContext'
import { ProductTableComponent } from '../components/ProductTableComponent'
import { ProductContext } from "../context/ProductContext"
import { UserTableComponent } from '../components/UserTableComponent'
import { UserContext } from '../context/UserContext'
import { TopBarComponent } from '../components/TopBarComponent'

export const HomePage = () => {

  const { products, productsCount } = useContext(ProductContext)
  const { brands, brandsCount } = useContext(BrandContext)
  const { users, usersCount } = useContext(UserContext)

  return (
    <>
    <div className='caja-title'>
      <h1 className='top-title nunito-sans'>The Shoes Market - Dashboard</h1>
    </div>
      <TopBarComponent productsCount={productsCount} brandsCount={brandsCount} usersCount={usersCount}/> 
      <ProductTableComponent products={products}/>
      <BrandTableComponent brands={brands}/>
      <UserTableComponent users={users}/>
    </>
  )
}
