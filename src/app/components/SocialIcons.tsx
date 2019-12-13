import React from 'react'
import styled, { css } from 'styled-components'
import { Spacer } from './Spacer'

const SocialIconInstanceWrapper = styled.div<{ image: string }>`
  display: flex;
  flex-direction: column;
  height: 4.1vw;
  width: 4.1vw;
  border-radius: 50vw;
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
  font-size: 1.17vw;
  margin: 0 4.88vw;
  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}
`

export const SocialIcon: React.SFC = (props: { image: string }) => {
  return <SocialIconInstanceWrapper {...props} />
}

const SocialIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: start;
  justify-content: center;
`

export const SocialIconsGroup: React.SFC = props => {
  return (
    <SocialIconWrapper>
      <SocialIcon image="./images/youtube.png" />
      <SocialIcon image="./images/facebook.png" />
      <SocialIcon image="./images/twitter.png" />
      <SocialIcon image="./images/kickstarter.png" />
      <SocialIcon image="./images/linkedin.png" />
    </SocialIconWrapper>
  )
}
