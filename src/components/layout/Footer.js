import React from 'react'
import styled from 'styled-components'
import Link, { styleChildLinkColor } from '../navigation/Link'
import Grid, { Col, Row } from './Grid'
import Section from './Section'

import {
  LIGHTGREY,
  MEDIUMGREY,
  DARKGREY,
  EXTRADARKGREY,
  WHITE,
  SPACING_LARGE,
} from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'
import ContactUsBullet from '../bullets/ContactUsBullet'
import { H2, H3, P } from '../text'
import ContactForm from '../ContactForm'
import Ul, { Li } from './Ul'

const LinkList = styled(Ul)`
  padding-left: 0;
  list-style: none;
  margin-left: 0;
`

const Footer = () => (
  <Section dark>
    <footer>
      <Grid>
        <Row>
          <H2>
            <a name="contact" />We'd love to chat
          </H2>
        </Row>

        <Row>
          <Col md={6}>
            <P>Let's start a conversation right now! Here's how:</P>
            <LinkList>
              <Li>
                <Link>
                  <ContactUsBullet image="phone" />Call us up for a chat
                </Link>
              </Li>
              <Li>
                <Link>
                  <ContactUsBullet image="email" />Email hello@leanjs.com
                </Link>
              </Li>
              <Li>
                <Link>
                  <ContactUsBullet image="twitter" />Tweet us @leanjscom
                </Link>
              </Li>
              <Li>
                <Link>
                  <ContactUsBullet image="instagram" />Instagram us @leanjscom
                </Link>
              </Li>
              <Li>
                <Link>
                  <ContactUsBullet image="hangouts" />Chat face to face right
                  now on Google Hangouts
                </Link>
              </Li>
              <Li>
                <Link>
                  <ContactUsBullet image="office" />Visit us at: WeWork
                  Moorgate, 1 Fore St Ave, London, EC2Y 9DT
                </Link>
              </Li>
            </LinkList>
            <P>
              Want to speak to one of our team about a specific subject?{' '}
              <Link>Visit our team page</Link>
            </P>
          </Col>

          <Col md={6}>
            <H3>Or fill out our form :)</H3>
            <ContactForm />
          </Col>
        </Row>
      </Grid>
    </footer>
  </Section>
)

export default Footer
