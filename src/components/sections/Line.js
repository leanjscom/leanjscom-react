import React from 'react'
import styled from 'styled-components'
import { MEDIUMGREY } from '../../config/styles'

const LineOuter = styled.div`
  padding-left: ${props => props.lineWidth + 10}px;
  position: relative;
`

const LineInner = styled.div`
  position: absolute;
  left: 0;
  top: ${props => (props.verticalCenter ? `50%` : `0`)};
  width: ${props => props.lineWidth}px;
  height: 3px;
  background: ${MEDIUMGREY};
`

const Line = ({ lineWidth = 35, children, verticalCenter = false }) => (
  <LineOuter lineWidth={lineWidth}>
    <LineInner lineWidth={lineWidth} verticalCenter={verticalCenter} />
    {children}
  </LineOuter>
)

export default Line
