import '../styles/Table.css'

export const ProductTableComponent = ({ products }) => {
  // Verificar si products es undefined o un array vacío antes de mapearlo
  if (typeof products === 'undefined' || products.length === 0) {
    return <p className='cargando roboto-light'>Cargando productos...</p>; // o mostrar un mensaje de carga
  }

  return (
    <>
        <section id='products' className='table-section'>
          <h2 className='title nunito-sans'>Productos</h2>
        <table>
          <thead>
          <tr>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
          {products.map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.brand.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.description}</td>
                </tr>
            ))}
          </tbody>
        </table>
        </section>
    </>
  )
}