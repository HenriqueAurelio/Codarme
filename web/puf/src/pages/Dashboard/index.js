import * as React from 'react'
import { useAuth } from '~/components/modules'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()
  const [auth, { logout }] = useAuth()

  const loggedOut = () => {
    logout()
    navigate('/')
  }


  return (
    <div>
      Olá {auth.user.name} !
      <button onClick={loggedOut}>
        Sair
      </button>
    </div>)
}
