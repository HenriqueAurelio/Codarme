import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '~/components'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from '~/components/modules'
import { App } from './pages/index'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Theme>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </Theme>
  </React.StrictMode>
)
