export const background = props =>
  props.bg && `background: ${props.theme.colors[props.bg]};`

export const color = props =>
  props.color && `color: ${props.theme.colors[props.color] || props.color};`

export const fontSize = props =>
  props.fontSize && `font-size: ${props.theme.fontSizes[props.fontSize]};`

export const theme = prop => value => props => props.theme[prop][value] || value

export const th = {
  space: theme('spaces'),
  size: theme('fontSizes'),
  color: theme('colors'),
}
