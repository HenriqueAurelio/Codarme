import * as React from 'react'
import { useAuth } from '~/components/modules'

export const Dashboard = () => {
  const [auth, { logout }] = useAuth()

  return (
    <div>
      ola {auth?.user?.name}
      <button onClick={logout}>
        Sair
      </button>
    </div>)
}
