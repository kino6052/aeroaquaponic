import React from 'react'
import styled, { css } from 'styled-components'
import { NavItem } from './NavItem'
import { Utils } from '../shared'

const NavbarWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  & .filler {
    flex: 1;
  }
  & #navbar {
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 6.05vw;
    align-items: center;
    justify-content: center;
    & #navigation {
      display: flex;
      flex-direction: row;
      align-items: center;
      #nav-right {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 414px) {
    display: none;
  }
`

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="filler" />
      <div id="navbar">
        <div id="navigation">
          <div id="nav-right">
            <NavItem onClick={() => Utils.scrollToId('#ebooks')}>
              Get eBook
            </NavItem>
            <NavItem onClick={() => Utils.scrollToId('#projects')}>
              Projects
            </NavItem>
            <NavItem onClick={() => Utils.scrollToId('#about-us')}>
              About Us
            </NavItem>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}
