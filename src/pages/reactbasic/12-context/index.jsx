import React, { Component } from 'react'

import Child1 from './Child1'
import Child2 from './Child2'

// import { Provider } from './countContext'

import { CountProvider } from './Count'
import './index.css'


export default class App extends Component {
  render() {
    return (
      <CountProvider>
        <Child1></Child1>
        <Child2></Child2>
        <div className='tips'>
          <a href="https://zh-hans.reactjs.org/docs/context.html" target="_brank">context文档</a>
        </div>
      </CountProvider>
    )
  }
}