import * as React from 'react'
import { useState } from 'react'
import { Box, Field, Button } from '~/components'




export const Signup = () => {
  const [values, setValues] = useState({})

  function onChange(name) {
    return function set(event) {
      setValues(prev => ({ ...prev, [name]: event.target.value }))
    }
  }
  // const onChange = ev => {
  //   setValues(prev => ({
  //     ...prev,
  //     [ev.target.name]: ev.target.value,
  //   }))

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(values)
  }


  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <form onSubmit={onSubmit}>
          <Field mb={3} type="text" name="name" label="Nome" onChange={onChange('nome')} />
          <Field mb={3} type="text" name="email" label="E-mail" onChange={onChange('email')} />
          <Field mb={3} type="password" name="password" label="Senha" onChange={onChange('senha')} />
          <Box flexbox center>
            <Button type="submit">Registrar</Button>
          </Box>
        </form>
      </Box>
    </Box >
  )
}
