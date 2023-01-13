import * as React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'

import { Box, Field, Button } from '~/components'

const Link = styled(Box)`
  text-decoration: none;
`
const validationSchema = yup.object().shape({
  username: yup.string().required('O campo e-mail é obrigatório').email('E-mail é inválido'),
  password: yup.string().required('O campo senha é obrigatório'),
})

export const Form = ({ onSubmit }) => {


  const { values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: {
      username: '',
      password: '',
    },
  })


  return (
    <form onSubmit={handleSubmit}>
      <Field
        mb={3}
        type="email"
        name="username"
        label="E-mail"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
        error={touched.username && errors.username}
      />
      <Field
        mb={3}
        type="password"
        name="password"
        label="Senha"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
        error={touched.password && errors.password}
      />
      <Box flexbox="column" center>
        <Button type="submit" loading={isSubmitting}>Entrar</Button>
        <Box mt={3} fontSize={1} color="gray">
          Nao possui cadastro?{' '}
          <Link as="a" href="#" color="gray" fontWeight="bold">
            Cadastre-se
          </Link>
        </Box>
      </Box>
    </form>
  )
}
