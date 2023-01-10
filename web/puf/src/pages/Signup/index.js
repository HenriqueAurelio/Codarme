import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'
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

  const onSubmit = async (event) => {
    event.preventDefault()
    console.log(values)

    const response = await axios.post('http://localhost:9901/users', values)
    //await axios.get('http://localhost:9901/users')
    console.log(response.data)
  }


  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <form onSubmit={onSubmit}>
          <Field mb={3} type="text" name="name" label="Nome" onChange={onChange('name')} />
          <Field mb={3} type="text" name="email" label="E-mail" onChange={onChange('email')} />
          <Field mb={3} type="password" name="password" label="Senha" onChange={onChange('password')} />
          <Box flexbox center>
            <Button type="submit">Registrar</Button>
          </Box>
        </form>
      </Box>
    </Box >
  )
}
