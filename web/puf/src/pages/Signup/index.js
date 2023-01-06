import * as React from 'react'
import styled from 'styled-components'
import { th } from '~/components/Theme/styled'

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
const Label = styled('label')`
  padding: ${th.space(2)}px;
`

const Form = styled('form')`
  display: flex;
  flex-direction: column;
`

export const Signup = () => {
  return (
    <Main>
      <Form>
        <Label htmlFor="name">Nome</Label>
        <Input type="text" name="name" id="name" />
      </Form>
    </Main>
  )
}
