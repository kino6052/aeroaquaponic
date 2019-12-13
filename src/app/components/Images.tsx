import React from 'react'
import styled, { css } from 'styled-components'

export const BookWrapper = styled.a<{ image: string }>`
  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}
`
export const Book = (props: { image: string }) => (
  <BookWrapper target="_blank" className="book" {...props} />
)
