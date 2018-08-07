import React from 'react'
import styled from 'styled-components'
import Circle from '../elements/Circle'
import { range } from '../utils'
import { DARKGREY } from '../../config/styles'

const defaultNumCircles = 6
const defaultSize = 360
const defaultColor = DARKGREY

const ConcentricCircles = props => {
  const numCircles = props.numCircles ? props.numCircles : defaultNumCircles
  const outerSize = props.size ? props.size : defaultSize
  const color = props.color ? props.color : DARKGREY

  const stepSize = outerSize / numCircles
  const nestingLevel = props.nestingLevel ? props.nestingLevel : 0
  const thisCircleSize = outerSize - stepSize * nestingLevel

  // thisCirlceSize should be exactly 0 after the numCircles circles have been added.
  // Have used <= 0 rather than == 0 in order to make this component more resilient to future  logic changes.
  if (thisCircleSize <= 0) return null

  return (
    <Circle
      bg="transparent"
      color={color}
      hasBorder="true"
      borderWidth={2}
      size={thisCircleSize}
    >
      {<ConcentricCircles {...props} nestingLevel={nestingLevel + 1} />}
    </Circle>
  )
}

export default ConcentricCircles