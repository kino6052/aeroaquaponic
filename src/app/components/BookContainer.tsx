import React from 'react'
import styled, { css } from 'styled-components'
import { Book } from './Images'
import { Spacer } from './Spacer'

const BookContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & .book-container {
    transition: 0.1s;
    color: white !important;
    width: 20vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 40vw;
    .book {
      height: 29.2vw;
      width: 18.35vw;
      background-size: cover;
      border: 0.2vw solid black;
    }
    b {
      font-family: spartan;
      line-height: 3vw;
      font-size: 1.76vw;
      margin-top: 1.2vw;
      text-transform: uppercase;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
`

export const BookContainer = (props: { children?: any; bold?: boolean }) => (
  <BookContainerWrapper>
    <div className="book-container">
      <Book
        image="./images/vision-cover.png"
        href="https://www.canva.com/design/DADq1XGg6M8/0aNlIyfMxS4a1HGAoa40uw/view?utm_content=DADq1XGg6M8&utm_campaign=designshare&utm_medium=link&utm_source=postdownload#1"
      />
      <b>Unplugging from Consumerism</b>
    </div>
    <div className="book-container">
      <Book
        image="./images/tech-cover.png"
        href="https://www.canva.com/design/DADjg-KVVI0/VPMfbccAc1RfYBKYuHF8VA/view?utm_content=DADjg-KVVI0&utm_campaign=designshare&utm_medium=link&utm_source=postdownload#1"
      />
      <b>Self-Sufficient Farming</b>
    </div>
  </BookContainerWrapper>
)
