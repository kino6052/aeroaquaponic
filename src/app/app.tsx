/**
 * NOTE:
 * =====
 * you cannot combine default + named import -> codesanbox bug 🐞
 * import React, {Component} from 'react'
 */

import { Component } from 'react'
import React from 'react'
import { LandingPage } from './pages/LandingPage'

export class App extends Component {
  render() {
    return (
      <div id="app">
        <LandingPage />
      </div>
    )
  }
}
