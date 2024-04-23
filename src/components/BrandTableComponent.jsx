import '../styles/Table.css'

export const BrandTableComponent = ({brands}) => {
        // Verificar si products es undefined o un array vacío antes de mapearlo
    if (typeof brands.data === 'undefined' || brands.data.length === 0) {
        return <p className='cargando roboto-light'>Cargando marcas...</p>; // o mostrar un mensaje de carga
        }
    
        return (
        <>
            <section id='brands' className='table-section'>
            <h2 className='title nunito-sans'>Marcas</h2>
            <table>
                <thead>
                <tr>
                    <th>Marca</th>
                    <th>Productos disponibles</th>
                </tr>
                </thead>
                <tbody>
                {brands.data.map(brand => (
                    <tr key={brand.brands.id}>
                        <td>{brand.brands.name}</td>
                        <td>{brand.totalProducts}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </section>
        </>
        )
}

