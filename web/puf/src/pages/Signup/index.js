import * as React from 'react'
import styled from 'styled-components'
import { th, background, margin, padding } from '~/components/Theme/styled'
import { flexbox } from '~/components/Theme/styled'

const Label = styled('label')`
  padding: ${th.space(2)}px ${th.space(3)}px;
`

const Input = styled('input')`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 200px;
  color: ${th.color('white')};
  padding: ${th.space(2)}px ${th.space(1)}px;
  font-size: inherit;
`

const Main = styled('main')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const Form = styled('form')`
  display: flex;
  flex-direction: column;
`

const Box = styled('div')`
  ${background}
  ${padding}
  ${margin}
  ${flexbox}
`

export const Signup = () => {
  return (
    <Main>
      <Form>
        <Box mb={3} flexbox="column">
          <Label htmlFor="name">Nome</Label>
          <Input type="text" name="name" id="name" />
        </Box>

        <Box mb={3} flexbox="column">
          <Label htmlFor="email">Email</Label>
          <Input type="text" name="email" id="email" />
        </Box>
      </Form>
    </Main>
  )
}
