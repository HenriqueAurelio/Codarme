import * as React from 'react'
import styled from 'styled-components'
import { th } from '~/components/Theme'
import { Box } from '~/components/uikit/Box'
import { Label } from './Label'
import { Input } from './Input'

const ErrorMessage = styled(Box)`
  color: ${th.color('red')};
  padding: ${th.space(1)}px ${th.space(3)}px;
  font-size: ${th.size(2)}px;
`


export const Field = ({ type, name, disabled, error, label, ...props }) => (
  <Box {...props} flexbox="column">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} disabled={disabled} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Box>
)
