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

const Field = ({ type, name, label, ...props }) => (
  <Box {...props} flexbox="column">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} />
  </Box>
)

export const Signup = () => {
  return (
    <Main>
      <Form>
        <Field mb={3} type="text" name="name" label="Nome" />
        <Field mb={3} type="text" name="email" label="E-mail" />
      </Form>
    </Main>
  )
}
