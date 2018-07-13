import React from 'react'
import { storiesOf } from '@storybook/react'

import LargeLogoAndPoints from './LargeLogoAndPoints'
import theme from '../../layouts/rebass-theme'

storiesOf('Bulleted sections', module)
  .add('Large logo and points', () => (
    <LargeLogoAndPoints
      image="abinbev"
      points={['Rapid app design and build', '6 week turnaround']}
      color="white"
    />
  ))
  .add('Large logo and points (dark text)', () => (
    <LargeLogoAndPoints
      image="abinbev"
      points={['Rapid app design and build', '6 week turnaround']}
      color={theme.colors.darkgrey}
    />
  ))