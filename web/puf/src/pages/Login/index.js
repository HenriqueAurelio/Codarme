import * as React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { Box, font, Logo } from '~/components'
import { useAuth } from '~/components/modules'
import { ReactComponent as Register } from './register.svg'
import { Form } from './Form'

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

export const Login = () => {
  const [, { login: setAuth }] = useAuth()
  const navigate = useNavigate()
  const onSubmit = async (values) => {
    try {

      const result = await axios.get('http://localhost:9901/login', {
        auth: values,
      })
      setAuth(result.data)
      navigate()
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
          Login
        </Title>
        <Form onSubmit={onSubmit} />
      </CenteredBox>
    </Box>
  )
}
