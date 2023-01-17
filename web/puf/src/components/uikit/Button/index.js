import * as React from 'react'
import styled from 'styled-components'
import { th, padding, margin } from '~/components/Theme/styled'
import { Spinner } from '~/components/uikit/Spinner'

const StyledButton = styled('button')`
  background: ${th.color('white')};
  border: none;
  border-radius: 200px;
  color: ${th.color('black')};
  padding: ${th.space(2)}px ${th.space(8)}px;
  font-size: inherit;
  outline: none;
  cursor: pointer;

  ${padding}
  ${margin}

  ${({ disabled }) => disabled && `opacity:0.5;`}
`
export const Button = ({ disabled, loading, children, ...props }) => (
  <StyledButton disabled={disabled || loading} {...props}>
    {loading ? <Spinner /> : children}
  </StyledButton>
)
