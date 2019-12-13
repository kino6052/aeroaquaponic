import React, { createElement } from 'react'
import { render } from 'react-dom'
import './index.css'
import styled, { css } from 'styled-components'
import { App } from './app/app'
import { isDev } from './app/shared'
import { Color } from './app/shared/styles'
import { MuiThemeProvider } from 'material-ui/styles'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const AppWrapper = styled.div`
  & * {
    color: ${Color.Text};
    font-family: 'Work Sans', sans-serif;
  }
  h1 {
    font-size: 80px;
    line-height: 78px;
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }
  p,
  b,
  span {
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 34px;
  }
  #app {
    width: 100%;
    margin: auto;
  }
  & div,
  & svg {
    ${() =>
      isDev &&
      css`
        border: 1px solid black;
      `}
  }
`

const AppComponent = () => (
  <MuiThemeProvider>
    <Router>
      <AppWrapper>
        <App />
      </AppWrapper>
    </Router>
  </MuiThemeProvider>
)

render(createElement(AppComponent), document.querySelector('#test'))
