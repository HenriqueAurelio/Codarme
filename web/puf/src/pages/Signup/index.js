import * as React from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'
import { Box, Field, Button, font } from '~/components'


const Title = styled("h2")`
  ${font}
`
const Link = styled(Box)`
  text-decoration: none;
`
const validationSchema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório'),
  email: yup.string().required('O campo e-mail é obrigatório').email('E-mail é inválido'),
  password: yup.string().required('O campo senha é obrigatório'),

})


export const Signup = () => {

  const onSubmit = async () => {
    try {
      await axios.post('http://localhost:9901/users', values)
    }
    catch (error) {
      console.log(error)
    }
  }
  const { values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: {
      name: '',
      password: '',
      email: '',
    },
  })


  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <Title textAlign="center">
          Cadastro
        </Title>
        <form onSubmit={handleSubmit}>
          <Field
            mb={3}
            type="text"
            name="name"
            label="Nome"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            error={touched.name && errors.name}
          />

          <Field
            mb={3}
            type="email"
            name="email"
            label="E-mail"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            error={touched.email && errors.email}
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
            <Button type="submit" loading={isSubmitting}>Registrar</Button>
            <Link as="a" href="#" mt={3} fontSize={1} color="gray" fontWeight="bold">
              Já sou cadastrado !
            </Link>
          </Box>
        </form>
      </Box>
    </Box >
  )
}
