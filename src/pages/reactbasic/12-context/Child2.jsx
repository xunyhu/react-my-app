import React, { Component } from 'react'

// import { countContext } from './countContext'

import { CountConsumer } from './Count'

import Childhood from './Childhood'

export default class Child2 extends Component {
  // static contextType = countContext
  render() {
    return (
      <div>
        <h1>child2</h1>
        <div>
          <CountConsumer>
            {
              (value) => (<div>{value.count}</div>)
            }
          </CountConsumer>
        </div>
        <Childhood></Childhood>
      </div>
    )
  }
}
