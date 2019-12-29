import React from 'react'
import styled, { css } from 'styled-components'
import { Spacer } from './Spacer'
import { KirillImage, DimaImage } from './Images'

const ProfileCardWrapper = styled.div<{ image: string }>`
  display: flex;
  flex-direction: column;
  width: 30vw;
  align-items: center;
  justify-content: center;
  font-size: 1.75vw;
  margin: 2vw;
  & .image {
    height: 12.5vw;
    width: 12.5vw;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    border-radius: 50vw;
    background-color: grey;
    background-size: cover;
    background-position: center;
    ${props =>
      props.image &&
      css`
        background-image: url(${props.image});
      `}
  }
  & .name {
    font-weight: bold;
  }
  & .description {
    text-align: center;
    width: 20vw;
  }
  @media screen and (max-width: 414px) {
    display: none;
  }
`

export const ProfileCard: React.SFC<{
  image: string
  name: string
  description: string
}> = props => {
  const { image, name, description } = props
  return (
    <ProfileCardWrapper image={image}>
      <div className="image" />
      <Spacer height={1.7} />
      <div className="name">{name}</div>
      <Spacer height={1.0} />
      <div className="description">{description}</div>
    </ProfileCardWrapper>
  )
}

const ProfileCardGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: start;
  justify-content: center;
`

export const ProfileCardGroup: React.SFC = props => {
  return (
    <ProfileCardGroupWrapper>
      <ProfileCard
        image="./images/dima.jpg"
        name={'Dmitry Dementyev'}
        description={`Chief Researcher in Aquaculture`}
      />
      <ProfileCard
        image="./images/kirill.jpg"
        name={'Kirill Novik'}
        description={`Senior Software Engineer`}
      />
    </ProfileCardGroupWrapper>
  )
}
