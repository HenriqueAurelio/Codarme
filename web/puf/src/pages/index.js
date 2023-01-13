import * as React from 'react'
import { useState, useEffect } from 'react'
// import { Signup } from './Signup'
import { Login } from './Login'
import { Theme } from '~/components'


const Dashboard = ({ onLogout }) => {

  return (<div>Estou logado ! <button onClick={onLogout}>Sair</button></div>)
}

export const App = () => {
  const [state, setState] = useState(() => {
    const data = window.localStorage.getItem('auth')
    return data && JSON.parse(data)
  })

  const logout = () => setState(false)

  useEffect(() => {
    window.localStorage.setItem('auth', state && JSON.stringify(state))
  }, [state])
  return (
    <Theme>
      {state?.user ? <Dashboard onLogout={logout} /> : <Login onSuccess={setState} />}
      {/* <Signup /> */}
      {/* <Login /> */}
    </Theme>
  )
}
