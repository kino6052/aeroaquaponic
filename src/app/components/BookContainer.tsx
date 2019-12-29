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
  @media screen and (max-width: 414px) {
    & .book-container {
      width: 60vw;
      height: 120vw;
      margin-top: 20vw;
      .book {
        height: 87.6vw;
        width: 55.05vw;
        border: 0.6vw solid black;
      }
      b {
        line-height: 9vw;
        font-size: 5.28vw;
        margin-top: 3.6vw;
      }
    }
  }
`

export const BookContainer = (props: { children?: any; bold?: boolean }) => (
  <BookContainerWrapper>
    <div className="book-container">
      <Book
        image="./images/vision-cover.png"
        href="./images/Aeroaquaponic%20-%20Unplugging%20from%20Consumerism.pdf"
      />
      <b>Unplugging from Consumerism</b>
    </div>
  </BookContainerWrapper>
)
