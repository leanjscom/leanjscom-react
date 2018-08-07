import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { WHITE, DARKGREY } from '../../config/styles'
import { DEFAULT_BUTTON_STYLES, lightStyles, darkStyles } from './Button.js'

const fontColor = color => `
  color: ${color} !important;
    &:link {
    color: ${color} !important;
  }
  &:visited {
    color: ${color} !important;
  }
  &:hover {
    color: ${color} !important;
  }
  &:active {
    color: ${color} !important;
  }
`
const LinkButton = styled(Link)`
  ${DEFAULT_BUTTON_STYLES} ${props =>
    props.dark
      ? `${fontColor(WHITE)}${darkStyles}`
      : `${fontColor(DARKGREY)}${lightStyles}`};
  width: ${props => props.fullWidth && `100%;`};
  ${props =>
    props.hasArrows
      ? `
		&:after {
			content: " >>"
		}
	`
      : ``};
  text-decoration: none;
  display: inline-block;
  font-weight: normal;
`

export default LinkButton