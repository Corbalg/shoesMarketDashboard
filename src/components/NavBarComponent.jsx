import logo from '../assets/images/logopng.png'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

export const NavBarComponent = () => {
  return (
    <>
    <div className='navbar'>
        <ul className='caja-nav'>
            <li className='item'>
                <NavLink to='/' className='item-button nunito-sans'>Home</NavLink>
            </li>
            <li className='item'>
                <NavLink to='/products' className='item-button nunito-sans'>Productos</NavLink>
            </li>
            <li className='item'>
                <NavLink to='/brands' className='item-button nunito-sans'>Marcas</NavLink>
            </li>
            <li className='item'>
                <NavLink to='/users' className='item-button nunito-sans'>Usuarios</NavLink>
            </li>
        </ul>
        <div className='caja-img'>
            <NavLink to='/' className='img-button'><img src={logo} alt="" className='nav-img'/></NavLink>
        </div>
    </div>
    </>
  )
}
