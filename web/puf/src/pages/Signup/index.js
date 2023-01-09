import * as React from 'react'
import { Box, Field } from '~/components'

export const Signup = () => {
  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <Field mb={3} type="text" name="name" label="Nome" />
        <Field mb={3} type="text" name="email" label="E-mail" />
        <Field type="password" name="password" label="Senha" />
      </Box>
    </Box>
  )
}
