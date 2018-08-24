import React from 'react'
import {
  Grid,
  Row as FlexboxRow,
  Col as FlexboxCol,
} from 'react-styled-flexboxgrid'
import styled from 'styled-components'

import { SPACING_STANDARD, SPACING_LARGE } from '../../config/styles'
import { SCREEN_SM_MAX } from '../utils'

const Col = ({ xs, sm, md, lg, center, style = {}, ...rest }) => {
  const sizes = {
    xs: xs || 12,
    sm: sm || xs || 12,
    md: md || sm || xs || 12,
    lg: lg || md || sm || xs || 12,
  }

  if (center) {
    style.display = 'flex'
    style.justifyContent = 'center'
  }

  return <FlexboxCol {...rest} {...sizes} style={style} />
}

const Row = styled(FlexboxRow)`
  margin-left: 0;
  margin-right: 0;
  margin-top: ${SPACING_LARGE};
  margin-bottom: ${SPACING_LARGE};
  @media (max-width: ${SCREEN_SM_MAX}) {
    margin-top: ${SPACING_STANDARD};
    margin-bottom: ${SPACING_STANDARD};
  }
`

const SingleColRow = props => (
  <Row>
    <Col md={8} {...props}>
      {props.children}
    </Col>
  </Row>
)

const SingleCellGrid = props => (
  <Grid>
    <SingleColRow {...props} />
  </Grid>
)

export { Row, Col, Grid, SingleColRow, SingleCellGrid }

export default Grid
