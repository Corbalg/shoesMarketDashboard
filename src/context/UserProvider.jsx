import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {

    const [users, setUsers] = useState([])
    const [usersCount, setUsersCount] = useState(0)

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://shoesmarket.onrender.com/api/users')
            const data = await response.json()
            setUsers(data.data)
            setUsersCount(data.count)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Hubo un problema al cargar los datos'
            })
        }
    }

    useEffect(() => {
      fetchUsers()
    }, [])

  return (
    <UserContext.Provider value={{users, usersCount}}>
        {children}
    </UserContext.Provider>
  )
}