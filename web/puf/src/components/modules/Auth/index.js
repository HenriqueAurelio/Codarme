import * as React from 'react'
import { useState, useEffect, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
const AuthContext = createContext([{}, () => ({})])

export const useAuth = () => {
  const navigate = useNavigate()
  const [state, setState] = useContext(AuthContext)
  const logout = () => {
    setState(false)
    navigate('/')
  }

  return [state, { login: setState, logout }]
}

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const data = window.localStorage.getItem('auth')
    return data && JSON.parse(data)
  })

  useEffect(() => {
    window.localStorage.setItem('auth', state && JSON.stringify(state))
  }, [state])

  return <AuthContext.Provider value={[state, setState]}>{children}</AuthContext.Provider>
}
