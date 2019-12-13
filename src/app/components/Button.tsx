import React from 'react'
import styled, { css } from 'styled-components'

const ButtonWrapper = styled.div<{ color?: 'primary' | 'secondary' }>`
  .button {
    width: 19.5vw;
    height: 4.68vw;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    ${props =>
      props.color === 'primary' &&
      css`
        background: #51ac2b;
        color: white;
      `}
    ${props =>
      props.color === 'secondary' &&
      css`
        background: white;
        color: #3040c4;
      `}
    border: none;
    margin: 0 4px;
    font-size: 1.75vw;
    line-height: 1.75vw;
    font-weight: 400;
    font-family: 'Work Sans';
  }
`

export const CustomButton: React.SFC<{ refObj?: any }> = props => (
  <ButtonWrapper {...{ ...{ color: 'primary' }, ...props }}>
    <button {...props} className="button">
      {props.children}
    </button>
  </ButtonWrapper>
)
