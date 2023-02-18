import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history';
import { Theme } from '~/components'
import { AuthProvider } from '~/components/modules'
import { App } from './'
import axios from 'axios'

jest.mock('axios')
const renderRouter = (children) => {
  const history = createMemoryHistory()

  return render(
    <Theme>
      <Router history={history}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </Router>
    </Theme>
  )
}
test('should show login form', () => {
  // Arrange - Act - Assert
  //prepare
  renderRouter(<App />)

  //execute
  const emailInput = screen.getByLabelText('E-mail')
  const passwordInput = screen.getByLabelText('Senha')
  const submit = screen.getByRole('button')
  const signupLink = screen.getByRole('link')


  //assert
  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(submit.textContent).toBe('Entrar')
  expect(signupLink).toHaveAttribute('href', '/signup')
})

test('should login user when submit form with correct credentials', async () => {
  //prepare - Arrange
  const credentials = {
    email: 'testenovo@gmail.com',
    password: 'testenovo'
  }

  const responseData = {
    user: {
      id: 1,
      name: 'Teste novo',
      email: credentials.email
    },
    token: '123',
  }

  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: responseData
    }))


  const user = userEvent.setup()
  renderRouter(<App />);

  //execute - Act
  const emailInput = screen.getByLabelText('E-mail')
  await user.type(emailInput, credentials.email)

  const passwordInput = screen.getByLabelText('Senha')
  await user.type(passwordInput, credentials.password)

  const submitBtn = screen.getByRole('button')
  await user.click(submitBtn)

  //assert
  // expect(emailInput.value).toBe('testenovo@gmail.com')
  // expect(passwordInput.value).toBe('testenovo')

  expect(submitBtn).toBeDisabled()
  await waitFor(() => expect(axios.get).toHaveBeenCalledWith('http://localhost:9901/login', {
    auth: { password: credentials.password, username: credentials.email },
  }))
  expect(screen.getByText(responseData.user.name)).toBeInTheDocument()

})

// test('full app rendering/navigating', async () => {
//   renderRouter(<App />)
//   const user = userEvent.setup()

//   const credentials = {
//     email: 'testenovo@gmail.com',
//     password: 'testenovo'
//   }
//   const emailInput = screen.getByLabelText('E-mail')
//   const passwordInput = screen.getByLabelText('Senha')
//   const submitBtn = screen.getByRole('button')

//   await user.type(emailInput, credentials.email)
//   await user.type(passwordInput, credentials.password)
//   await user.click(submitBtn)


//   // expect(screen.getByText(/no match/i)).toBeInTheDocument()
//   expect(screen.getByText(/ola/i)).toBeInTheDocument()
// })


