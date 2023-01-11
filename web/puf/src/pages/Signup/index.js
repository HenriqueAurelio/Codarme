import * as React from 'react'
import styled from 'styled-components'

import { Box, font, Logo } from '~/components'
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
        <RegisterForm />
      </CenteredBox>
    </Box>
  )
}
