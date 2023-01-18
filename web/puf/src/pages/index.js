import * as React from 'react'
import { Signup } from './Signup'
import { Login } from './Login'
import { useAuth } from '~/components/modules'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './Dashboard'

export const App = () => {
  const [auth] = useAuth()
  return (

    <Router>
      <Routes>
        {auth?.user ?
          (<Route path="/dashboard" exact element={<Dashboard />
          } />) : (
            <>
              <Route path="/" exact element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>)}
      </Routes>
    </Router>
  )
}
