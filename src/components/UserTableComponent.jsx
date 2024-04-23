import '../styles/Table.css'

export const UserTableComponent = ({ users }) => {

  if (typeof users === 'undefined' || users.length === 0) {
    return <p className='cargando roboto-light'>Cargando usuarios...</p>; 
  }

  return (
    <>
        <section id='users' className='table-section'>
          <h2 className='title nunito-sans'>Usuarios</h2>
        <table>
          <thead>
          <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
          </tbody>
        </table>
        </section>
    </>
  )
}