import { useContext } from 'react'
import { UserTableComponent } from '../components/UserTableComponent'
import { UserContext } from "../context/UserContext"


export const UserPage = () => {

  const { users } = useContext(UserContext)

  return (
    <>
      <UserTableComponent users={users}/>
    </>
  )
}