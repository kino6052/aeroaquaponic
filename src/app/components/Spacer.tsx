import React from 'react'
import styled, { css } from 'styled-components'

const SpacerWrapper = styled.div<{ height: number }>`
  display: flex;
  width: 100%;
  ${props => css`
    height: ${props.height}vw;
  `}
`

export const Spacer = (props: { height: number }) => (
  <SpacerWrapper {...props} />
)
