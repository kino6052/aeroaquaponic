import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { Spacer } from '../components/Spacer'
import { CustomButton } from '../components/Button'
import { BookContainer } from '../components/BookContainer'
import { Diagonals, DiagonalsBottom } from '../components/Diagonals'
import { Navbar } from '../components/Navbar'
import { Section } from '../components/Section'
import { Timeline } from '../components/Timeline'
import { ProfileCardGroup } from '../components/ProfileCard'
import { SocialIconsGroup } from '../components/SocialIcons'
import { Footer } from '../components/Footer'
import { Utils } from '../shared'

const LandingPageWrapper = styled.div`
  & {
      #headline-section {
        background-image: url('./images/grass.png');
        background-size: cover;
      }
      #main {
        display: flex;
        flex-direction: row;
        width: 100%;
        
        background-size: cover;
        display: flex;
        height: 75vw;
        flex-direction: column;
        position: absolute;
        color: white;
        width: 100%;
        & h1 {
          margin: 0;
          padding: 0;
          font-size: 6.25vw;
          line-height: 6.25vw;
          font-family: spartan;
          color: white;
          text-transform: uppercase;
          text-align: center;
          width: 100%;
        }
        & h2 {
          margin: 0;
          padding: 0;
          font-size: 2.34vw;
          line-height: 2.34vw;
          font-family: spartan;
          font-weight: 400;
          color: white;
          text-align: center;
          width: 100%;
        }
        #headline-buttons {
          width: 100%;
          justify-content: center;
          display: flex;
          flex-direction: row;
        }
      }
    }
  }
`

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Section id="headline-section" SVG={Diagonals}>
        <div id="main">
          <Navbar />
          <Spacer height={19.53} />
          <h1>Aeroaquaponic</h1>
          <Spacer height={1.75} />
          <h2>Self-sufficiency and Sustainability</h2>
          <Spacer height={2.34} />
          <div id="headline-buttons">
            <CustomButton
              onClick={() => {
                Utils.scrollToId('#ebooks')
              }}
            >
              Get eBook
            </CustomButton>
          </div>
        </div>
      </Section>
      <Section SVG={DiagonalsBottom}>
        <div id="ebooks" className="section-content">
          <div className="title">
            <h1>eBooks</h1>
            <Spacer height={1.75} />
            <h2>Our vision and technology</h2>
          </div>
          <Spacer height={3.51} />
          <BookContainer />
          <Spacer height={3.51} />
          <div className="text">
            <p>
              At Aeroaquaponic, we believe that the solution that will change
              the dead-end direction of modern society lies in sustainability.
              However, not the sustainability that comes from the industry, but
              the one that comes from the eco-communities. We believe that
              communities that are capable of producing most and, ideally, all
              of their food and being self-sufficient are the answer. It is a
              countermeasure to consumerism which is the driving force behind
              unsustainable resource utilization.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div id="projects" className="section-content">
          <div className="title">
            <h1 style={{ color: 'black' }}>Projects</h1>
            <Spacer height={1.75} />
            <h2 style={{ color: 'black' }}>Let's make this happen!</h2>
          </div>
          <Spacer height={3.51} />
          <Timeline />
        </div>
      </Section>
      <Section>
        <div id="about-us" className="section-content">
          <div className="title">
            <h1 style={{ color: 'black' }}>About Us</h1>
            <Spacer height={1.75} />
            <h2 style={{ color: 'black' }}>Our Team</h2>
          </div>
          <Spacer height={3.51} />
          <div className="text">
            <p>
              We are a non-profit organization of scientists and engineers who
              want to bring a change to the world. Our goal is to provide
              eco-communities with tools to achieve the goal of
              self-sufficiency, sustainability, and taking care of their food
              necessities. Our solution is Aero-Aquaponic Systems—systems that
              allow growing fruit, vegetables and fish in a closed ecosystem
              that has minimal energy and water requirements.
            </p>
          </div>
          <ProfileCardGroup />
          <Spacer height={1.65} />
          <SocialIconsGroup />
        </div>
      </Section>
      <Footer />
    </LandingPageWrapper>
  )
}
