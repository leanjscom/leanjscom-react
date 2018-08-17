import React from 'react'
import styled, { css } from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { EXTRADARKGREY, WHITE, FONT_FAMILY } from '../../config/styles'

const Section = styled.section`
  ${FONT_FAMILY}
  padding-top: ${props => (props.top ? '0' : '30px')};
  padding-bottom: 30px;
  background-color: ${props => props.dark && EXTRADARKGREY};
  color: ${props => props.dark && WHITE};
`

Section.displayName = 'Section'

export default Section
