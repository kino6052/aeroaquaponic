import React from 'react'
import styled, { css } from 'styled-components'

const SectionWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75vw;
  & svg {
    margin: 0;
    padding: 0;
    display: block;
    width: 100vw;
    height: 75vw;
  }
  & .section-content {
    /* height: inherit; */
    display: flex;
    flex-direction: column;
    position: absolute;
    color: white;
    width: 100%;

    & .title {
      height: 8.78vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & h1 {
        margin: 0;
        padding: 0;
        font-size: 6.25vw;
        line-height: 6.25vw;
        font-family: spartan;
        color: white;
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
    }

    & .text {
      & p {
        width: 79.88vw;
        margin: 0;
        line-height: 2.24vw;
        font-size: 1.75vw;
      }
      height: 16.21vw;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 414px) {
    height: 180vw;
    & .section-content {
      & .title {
        height: 17vw;
        & h1 {
          font-size: 12.5vw;
          line-height: 12.5vw;
        }
        & h2 {
          font-size: 4.68vw;
          line-height: 4.68vw;
        }
      }
      & .text {
        & p {
          width: 160vw;
          line-height: 4.5vw;
          font-size: 3.5vw;
        }
        height: 16.21vw;
      }
    }
  }
`

export const Section: React.SFC<{ SVG?: React.SFC }> = props => {
  return (
    <SectionWrapper {...props}>
      <div className="section-content">{props.children}</div>
    </SectionWrapper>
  )
}
