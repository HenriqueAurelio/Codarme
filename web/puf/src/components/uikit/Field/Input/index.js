import styled, { css } from 'styled-components'
import { th } from '~/components/Theme/styled'

export const Input = styled('input')`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 200px;
  color: ${th.color('white')};
  padding: ${th.space(2)}px ${th.space(3)}px;
  font-size: inherit;
  outline: none;

  ${({ disabled }) => disabled && 'opacity:0.5;'}
  ${({ hasError }) => hasError && css`
    border-color:${th.color('red')}
  `}

`
