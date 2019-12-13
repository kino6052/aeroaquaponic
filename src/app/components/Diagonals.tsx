import React from 'react'

export const Diagonals: React.SFC = props => (
  <svg viewBox="0 0 1024 768" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1023.78 768L3.05176e-05 256V767.746L0.507843 768H1023.78Z"
      fill="#333333"
    />
    <path d="M512.396 0L0 256.254V768L1024 255.889V0H512.396Z" fill="black" />
  </svg>
)

export const DiagonalsBottom: React.SFC = props => (
  <svg viewBox="0 0 1024 768" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.730469 0H0V0.365234C0.243479 0.243469 0.48699 0.121766 0.730469 0Z"
      fill="#C4C4C4"
    />
    <path
      d="M0.730469 0C0.48699 0.121766 0.243479 0.243469 0 0.365234V512.111C341.333 341.408 682.667 170.704 1024 0H0.730469Z"
      fill="#C4C4C4"
    />
    <path
      d="M1023.27 0H9.15527e-05C341.333 170.704 682.667 341.408 1024 512.111V0.365234C1023.76 0.243469 1023.51 0.121766 1023.27 0Z"
      fill="#333333"
    />
  </svg>
)

export const Placeholder: React.SFC = props => (
  <svg
    width={props.width || '1024'}
    height={props.height || '768'}
    viewBox={`0 0 1024 768`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  />
)
