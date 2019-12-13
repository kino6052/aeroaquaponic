import React from 'react'
import styled, { css } from 'styled-components'
import { Spacer } from './Spacer'
import { Color } from '../shared/styles'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div<{ color?: 'primary' | 'secondary' }>`
  height: 415px;
  width: 343px;
  display: flex;
  align-items: center;
  display: flex;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    &-top,
    &-bottom {
      margin: 0 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-top {
      .card-image-container {
        width: 150px;
        height: 150px;
      }
      .card-title {
        text-align: center;
        font-size: 24px;
        line-height: 30px;
        width: 213px;
      }
      .card-content {
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        font-style: italics;
        color: ${Color.Tertiary};
      }
    }
    &-bottom {
      .card-link {
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        color: ${Color.Primary};
        text-decoration: none;
      }
    }
  }
`

export const Card = (props: { title: string; Image?: React.ElementType }) => {
  // const ImageComponent = !!Image ? () => <Image /> : () => <div />
  return (
    <CardWrapper>
      <div className="card">
        <div className="card-top">
          <Spacer height={40} />
          <div className="card-image-container">
            {/* {!!Image && <ImageComponent />} */}
          </div>
          <Spacer height={36} />
          <div className="card-title">{props.title}</div>
          <Spacer height={24} />
          {/* <div className="card-content">{props.children}</div> */}
        </div>
        <div className="card-bottom">
          <Link className="card-link" to="/about/">
            Learn More
          </Link>
          <Spacer height={53} />
        </div>
      </div>
    </CardWrapper>
  )
}
