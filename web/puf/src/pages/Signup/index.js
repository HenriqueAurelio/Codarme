import * as React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Box, font, Logo } from '~/components'
import { useAuth } from '~/components/modules'
import { ReactComponent as Register } from './register.svg'
import { RegisterForm } from './Form'


const Title = styled("h2")`
  ${font}
`
const CenteredBox = ({ children, ...props }) => (
  <Box {...props} flex={1} flexbox="column" center>
    <Box style={{ width: 445 }}>
      {children}
    </Box>
  </Box>
)

export const Signup = () => {
  const navigate = useNavigate();

  const [, { login: setAuth }] = useAuth()
  const onSubmit = async (values) => {
    try {
      const res = await axios.post('http://localhost:9901/users', values)
      setAuth({ user: res.data })
      navigate('/dashboard')

    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <Box flex={1} flexbox>
      <CenteredBox bg="black">
        <Logo p={6} flexbox center />
        <Register />
      </CenteredBox>
      <CenteredBox >
        <Title textAlign="center">
          Cadastro
        </Title>
        <RegisterForm onSubmit={onSubmit} />
      </CenteredBox>
    </Box>
  )
}
