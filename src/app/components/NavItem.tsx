import React from 'react'
import styled, { css } from 'styled-components'
import { devClass } from '../shared'

const NavItemWrapper = styled.div`
  font-size: 1.75vw;
  line-height: 1.75vw;
  color: white !important;
  width: 12.5vw;
  height: 6vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s;
  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
  &:hover {
    cursor: pointer;
  }
`

export const NavItem = (props: { children?: any; bold?: boolean }) => {
  return <NavItemWrapper {...props}>{props.children}</NavItemWrapper>
}
