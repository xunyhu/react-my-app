import React, { Component } from 'react'

// import { countContext } from './countContext'
import { CountConsumer } from './Count'

export default class Child1 extends Component {
  render() {
    return (
      <div>
        <h1>child1</h1>
        <div>
          <CountConsumer>
            {
              (value) => {
                return (
                  <div>{value.count}</div>
                )
              }
            }
          </CountConsumer>
        </div>
      </div>
    )
  }
}
