import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Topic from '../components/labels/Topic'
import BenefitBullet from '../components/bullets/BenefitBullet'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE, DARKGREY, LIGHTGREY } from '../config/styles'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import CaseStudyExpoBullets from '../components/bullets/CaseStudyExpoBullets'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'
import caseStudies from '../components/caseStudies.json'

const BuildingSolutionsLinks = [
  {
    text: 'Working with you',
    to: 'workingWithYou',
  },
  {
    text: 'Project handovers',
    to: 'projectHandovers',
  },
  {
    text: 'Support going forward',
    to: 'support',
  },
]

const BuildingSolutions = () => (
  <React.Fragment>
    <Header
      titleLines={['Building solutions']}
      links={BuildingSolutionsLinks}
      bgImg="home"
    >
      <Row>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="heart" />}
                sentence="We work with you from initial idea to product launch and beyond!"
              />
            </Li>
          </Ul>
        </Col>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="diamond" />}
                sentence="Design + development process for quality results, on time and on budget"
              />
            </Li>
          </Ul>
        </Col>
      </Row>
    </Header>

    <Section>
      <Row>
        <Col>
          <H2>Working in collaboration with YOU</H2>
        </Col>
      </Row>
      <Row>
        <Col center md={6}>
          <P>
            We know how painful digital projects can be. Our team have many
            years experience in digital and have developed a process that works
            with you - from beginning to end.
          </P>
        </Col>
        <Col center md={6}>
          <Image src={'https://picsum.photos/300/200/?random'} />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <SmallIconAndSentence
            icon={<BenefitBullet image="chat" />}
            sentence="Be unafraid to learn from everyone and believe in teaching what we know"
          />
        </Col>
        <Col md={4}>
          <SmallIconAndSentence
            icon={<BenefitBullet image="gift" />}
            sentence="Explain all possibilities with you and collaborate to prioritise the best solutions"
          />
        </Col>
        <Col md={4}>
          <SmallIconAndSentence
            icon={<BenefitBullet image="calendar" />}
            sentence="Bi-weekly reviews throughout the design and build process"
          />
        </Col>
      </Row>
      <Row>
        <Col center>
          <P quote>
            “We never thought it possible! We only had a couple of months until
            Christmas but LeanJS sorted us out.
          </P>
        </Col>
        <Col center>
          <P quote>
            They were highly professional yet friendly and very effective.”
          </P>
        </Col>
      </Row>
      <Row>
        <Col center md={6}>
          <Mugshot
            image="james-norton-asos"
            name="Bill Pierce"
            jobTitle="Editor, AGNI"
            company="Boston University"
            color={DARKGREY}
          />
        </Col>
        <Col center md={6}>
          <LinkButton dark hasArrows>
            Read our case studies
          </LinkButton>
        </Col>
      </Row>
    </Section>

    <Section xsBgDark>
      <Row>
        <Col>
          <H2>Slick handovers with expert tech training</H2>
        </Col>
      </Row>
      <Row>
        <Col>
          <P>
            Anyone who’s completed a digital project knows how important a good
            handover is.
          </P>
          <P>
            That’s why we don’t just build but train too. This means that when
            it comes to a product handover, we’re there for you and your team.
          </P>
          <P>We can provide training for:</P>
          <Ul>
            <Li>
              The ReactJS ecosystem
              <Li>Working with GraphQL</Li>
              <Li>Lean/Agile processes</Li>
              <Li>Product & UX design</Li>
            </Li>
          </Ul>
        </Col>
      </Row>
      <Row>
        <Col center>
          <Image src={'https://picsum.photos/300/200/?random'} />
        </Col>
      </Row>
      <Row>
        <Col center>
          <LinkButton hasArrows>Find out more about our training</LinkButton>
        </Col>
      </Row>
    </Section>

    <Section />
  </React.Fragment>
)

export default BuildingSolutions
