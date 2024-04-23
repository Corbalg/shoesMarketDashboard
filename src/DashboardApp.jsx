import { NavBarComponent } from './components/NavBarComponent'
import { HomePage } from './pages/HomePage'
import {Routes, Route, Navigate} from "react-router-dom"
import { ProductsPage } from './pages/ProductsPage'
import { BrandsPage } from './pages/BrandsPage'
import { ProductProvider } from "./context/ProductProvider"
import { BrandProvider } from './context/BrandProvider'
import { UserProvider } from './context/UserProvider'
import { UserPage } from './pages/UserPage'
import { FooterComponent } from './components/FooterComponent'

export const DashboardApp = () => {
  return (
    <ProductProvider>
      <BrandProvider>
        <UserProvider>
          <header>
            <NavBarComponent/>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/products' element={<ProductsPage/>}></Route>
              <Route path='/brands' element={<BrandsPage/>}></Route>
              <Route path='/users' element={<UserPage/>}></Route>
              <Route path='/*' element={<Navigate to='/'/>}></Route>
            </Routes>
          </main>
          <footer>
            <FooterComponent/>
          </footer>
        </UserProvider>
      </BrandProvider>
    </ProductProvider>
  )
}
