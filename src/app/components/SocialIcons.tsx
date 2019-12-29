import React from 'react'
import styled, { css } from 'styled-components'
import { Spacer } from './Spacer'

const SocialIconInstanceWrapper = styled.a<{ image: string }>`
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
  @media screen and (max-width: 414px) {
    height: 8.2vw;
    width: 8.2vw;
  }
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
  @media screen and (max-width: 414px) {
    margin-top: 10vw;
  }
`

export const SocialIconsGroup: React.SFC = props => {
  return (
    <SocialIconWrapper>
      <SocialIcon
        title="YouTube"
        href="https://www.youtube.com/channel/UCGes3ATrv3cOwRb39wo2iXQ"
        image="./images/youtube.png"
      />
      <SocialIcon
        title="Facebook"
        href="https://www.facebook.com/aeroaquaponics"
        image="./images/facebook.png"
      />
      <SocialIcon
        title="Twtter"
        href="https://twitter.com/aeroaquaponic"
        image="./images/twitter.png"
      />
      <SocialIcon
        title="Instagram"
        href="https://www.instagram.com/aeroaquaponic/"
        image="./images/instagram.png"
      />
      <SocialIcon
        title="LinkedIn"
        href="https://www.linkedin.com/company/aeroaquaponic"
        image="./images/linkedin.png"
      />
    </SocialIconWrapper>
  )
}
