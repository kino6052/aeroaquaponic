import React from 'react'
import styled, { css } from 'styled-components'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Spacer } from './Spacer'
import { isDev, devClass } from '../shared'
import { CustomButton } from './Button'
import { Color } from '../shared/styles'

const FooterWrapper = styled.div`
  display: flex;
  background-color: #333333;
  flex-direction: column;
  p,
  h2 {
    font-size: 1.17vw !important;
    line-height: 1.17vw !important;
    font-family: 'Work Sans', sans serif !important;
    color: white !important;
  }
  & #footer {
    height: 18.75vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 100%;
    & #footer-left,
    & #footer-right {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: start;
    }
    & #footer-left {
      & #smooch {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 25vw;
        & #logo {
          height: 7.13vw !important;
          width: 7.13vw !important;
          background-color: lightgray;
          background-image: url('./images/logo.png');
          background-size: cover;
          margin-right: 2vw;
        }
        & #logo-description {
          flex: 1;
          line-height: 1.7vw !important;
        }
      }
    }
    & #footer-right {
      & .links {
        margin: 0 2vw;
        & h2 {
          font-size: 1.85vw !important;
        }
        & p {
          line-height: 1.85vw !important;
        }
      }
    }
  }
  & #under-footer {
    margin: 0;
    height: 6.25vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 4vw;
    & #copy-right,
    & #social-media-under > span {
      color: white !important;
      font-size: 1.17vw;
    }
  }
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <Spacer height={6.25} />
      <div id="footer">
        <div id="footer-left">
          <div id="smooch">
            <div id="logo" />
            <p id="logo-description">
              Get a free eBook about AEROAQUAPONIC technology. It’s an
              innovative approach to growing your own food.
            </p>
          </div>
        </div>
        <div id="footer-right">
          <div className="links">
            <h2>Social Media</h2>
            <Spacer height={1} />
            <p>YouTube</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>Medium</p>
            <p>Facebook</p>
          </div>
          <div className="links">
            <h2>Contact</h2>
            <Spacer height={1} />
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div id="under-footer">
        <div id="copy-right">(c) 2019 Copyrighted by Aeroaquaponic</div>
        <div id="social-media-under">
          <span>1</span>
          <span>2</span>
        </div>
      </div>
    </FooterWrapper>
  )
}
