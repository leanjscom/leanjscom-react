import React from 'react'
import { storiesOf } from '@storybook/react'
import TeamBio from './TeamBio'
import { LUIS } from '../../resources/images'
import { WHITE } from '../../config/styles'

storiesOf('TeamBio', module)
  .add('Name, hometown, specialisms, job title', () => (
    <TeamBio
      image={LUIS}
      name="Luis Novella"
      specialisms="Digital and business transformation, change management, business strategy, management consultant, start-ups, Lean/Agile."
      hometown="Caracas, Venezuela"
      color={WHITE}
    />
  ))
  .add('With Twitter link', () => (
    <TeamBio
      image={LUIS}
      name="Luis Novella"
      twitter="https://twitter.com/novellaluis"
      specialisms="Digital and business transformation, change management, business strategy, management consultant, start-ups, Lean/Agile."
      hometown="Caracas, Venezuela"
      color={WHITE}
    />
  ))
  .add('With LinkedIn link', () => (
    <TeamBio
      image={LUIS}
      name="Luis Novella"
      linkedin="https://www.linkedin.com/in/luisnovella"
      specialisms="Digital and business transformation, change management, business strategy, management consultant, start-ups, Lean/Agile."
      hometown="Caracas, Venezuela"
      color={WHITE}
    />
  ))
