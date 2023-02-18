import * as React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'
import { Link as RouterLink } from "react-router-dom"

import { Box, Field, Button } from '~/components'

const Link = styled(RouterLink)`
  color:gray;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  font-weight: bold;
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
        placeholder="Digite o seu e-mail"
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
        placeholder="Digite a sua senha"
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
          <Link to="/signup">
            Cadastre-se
          </Link>
        </Box>
      </Box>
    </form>
  )
}
