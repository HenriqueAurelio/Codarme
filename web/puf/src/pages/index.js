import * as React from 'react'
import styled from 'styled-components'
import { Theme } from './../components/theme'

const BaseButton = ({ className, children }) => (
  <div className={className}>{children}</div>
)

function getColor(props) {
  console.log(props)
  return props.theme.colors[props.bg]
}

const Button = styled(BaseButton)`
  background: ${getColor};
`
export const App = () => (
  <Theme>
    <Button bg="green">meu app</Button>
  </Theme>
)
