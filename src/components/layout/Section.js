import React from 'react'
import styled, { css } from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { EXTRADARKGREY } from '../../config/styles'

const Section = styled.section`
  padding-top: ${props => (props.top ? '150px' : '30px')};
  ${props => (props.top ? 'margin-top: -117px;' : '')} padding-bottom: 30px;
  p:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  background-color: ${props => props.xsBgDark && EXTRADARKGREY};
`

Section.displayName = 'Section'

export default Section
