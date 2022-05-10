import React from 'react'

// import { Consumer } from './countContext'
import { CountConsumer } from './Count'

export default function Childhood() {
  return (
    <div>
      <h1>child hood</h1>
      <CountConsumer>
        {
          ({increment, decrement, count}) => {
            return (
              <>
                <div>{count}</div>
                <button onClick={increment(5)}>increment</button>
                <button onClick={decrement(5)}>decrement</button>
              </>
            )
          }
        }
      </CountConsumer>
    </div>
  )
}

// Childhood.contextType = countContext
