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
        text-align: center;
        font-size: 6.25vw;
        line-height: 6.25vw;
        & span {
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
    #footer {
      p,
      a {
        display: block;
        color: white !important;
        font-size: 1.8vw;
        line-height: 2vw;
        margin-bottom: 1vw;
      }
      h2 {
        color: white !important;
        font-size: 1.8vw;
        line-height: 2vw;
        margin-top: 0;
      }
      background-color: #333333;
      height: 40vw;
      display: flex;
      flex-direction: column;
      & #footer-top {
        margin-top: 0 8vw;
        width: 24vw;
        height: 10vw;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        flex-grow: 1;
        & #logo-container {
          margin: 8vw;
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 10vw;
          & #logo {
            margin-right: 4vw;
            width: 10vw;
            height: 10vw;
            background-image: url('/images/logo.png');
            background-size: cover;
          }
          & #logo-description {
            width: 24vw;
          }
        }
        & .links {
          text-align: right;
          margin: 8vw;
        }
      }
    }
  }
  @media screen and (max-width: 414px) {
    & {
      #main {
        height: 150vw;
        & h1 {
          margin-top: 20vw;
          & span {
            display: flex;
            justify-content: center;
            font-size: 12.5vw;
            line-height: 15vw;
          }
        }
        & h2 {
          display: none;
        }
      }
    }
    .text:not(:nth-child(3)) {
      display: none !important;
    }
    .text:nth-child(3) {
      margin: 20vw 10vw;
      height: 70vw;
      p {
        text-align: justify;
        font-size: 5vw;
        line-height: 6vw;
      }
    }
    #footer {
      p,
      a {
        font-size: 3.6vw;
        line-height: 4vw;
        margin-bottom: 2vw;
      }
      h2 {
        font-size: 3.6vw;
        line-height: 4vw;
        margin-top: 0;
      }
      height: 120vw;
      display: flex;
      & #footer-top {
        margin-top: 0 16vw;
        width: 100%;
        height: 20vw;
        flex-direction: column;
        & #logo-container {
          margin: 8vw;
          height: 20vw;
          & #logo {
            margin-right: 8vw;
            width: 20vw;
            height: 20vw;
          }
          & #logo-description {
            width: 48vw;
          }
        }
        & .links {
          margin: 8vw;
          text-align: left;
        }
      }
    }
  }
`

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Section id="headline-section">
        <div id="main">
          <Navbar />
          <Spacer height={19.53} />
          <h1>
            <span>AERO</span>
            <span>AQUA</span>
            <span>PONIC</span>
          </h1>
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
      <Section>
        <div id="ebooks" className="section-content">
          <div className="title">
            <h1>eBook</h1>
            <Spacer height={1.75} />
            <h2>Our vision</h2>
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
              want to bring a change to the world. Our goal is to provide tools
              to achieve the goal of self-sufficiency. This great feat will not
              be possible without you. Only together can we achieve this.
            </p>
          </div>
          <Spacer height={3.51} />
          <ProfileCardGroup />
          <Spacer height={10.05} />
          <SocialIconsGroup />
        </div>
      </Section>
      <Section id="footer">
        <div id="footer-top">
          <div id="logo-container">
            <div id="logo" />
            <p id="logo-description">
              Get our free eBook and learn about our solution to some of
              thebiggest world problems.
            </p>
          </div>
          <div className="links">
            <h2>Social Media</h2>
            <Spacer height={1} />
            <a href="https://www.youtube.com/channel/UCGes3ATrv3cOwRb39wo2iXQ">
              YouTube
            </a>
            <a href="https://www.instagram.com/aeroaquaponic/">Instagram</a>
            <a href="https://www.linkedin.com/company/aeroaquaponic">
              LinkedIn
            </a>
            <a href="https://twitter.com/aeroaquaponic">Twitter</a>
            <a href="https://medium.com/@aeroaquaponic">Medium</a>
            <a href="https://www.facebook.com/aeroaquaponics">Facebook</a>
          </div>
        </div>
      </Section>
    </LandingPageWrapper>
  )
}
