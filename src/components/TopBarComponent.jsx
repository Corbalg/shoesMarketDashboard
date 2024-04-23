import StorageIcon from '@mui/icons-material/Storage';
import PersonIcon from '@mui/icons-material/Person';

export const TopBarComponent = ({productsCount, brandsCount, usersCount}) => {

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
  };

const handleScrollToBrands = () => {
    const brandsSection = document.getElementById('brands');
    brandsSection.scrollIntoView({ behavior: 'smooth' });
  };

const handleScrollToUsers = () => {
    const usersSection = document.getElementById('users');
    usersSection.scrollIntoView({ behavior: 'smooth' });
  };

  if (typeof productsCount === 'undefined' ) {
    return <p className='cargando roboto-light'>Cargando...</p>; 
  } else if (typeof brandsCount === 'undefined' ) {
    return <p className='cargando roboto-light'>Cargando...</p>; 
  } else if (typeof usersCount === 'undefined' ) {
    return <p className='cargando roboto-light'>Cargando...</p>; 
  } 

  return (
    <section className='top-section'>
      <div className='top-box'>
        <button onClick={handleScrollToProducts} className='top-button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <StorageIcon sx={{ fontSize: 40 }} style={{marginRight: 10}}/> Productos en stock: {productsCount}
        </button>
      </div>
      <div className='top-box'>
        <button onClick={handleScrollToBrands} className='top-button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <StorageIcon sx={{ fontSize: 40 }} style={{marginRight: 10}}/> Marcas disponibles: {brandsCount}
        </button>
      </div>
      <div className='top-box'>
        <button onClick={handleScrollToUsers} className='top-button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <PersonIcon sx={{ fontSize: 40 }} style={{marginRight: 10}}/> Usuarios: {usersCount}
        </button>
      </div>
    </section>
  )
}
