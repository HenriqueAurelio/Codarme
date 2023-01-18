import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Login } from './'

test('should show login form', () => {
  render(<Login />)
  const emailInput = screen.getByLabelText('E-mail')

  console.log(emailInput)
  // expect(emailInput)
})
