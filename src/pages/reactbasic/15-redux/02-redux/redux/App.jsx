import React, { Component } from 'react'
import store from './store'

export default class App extends Component {
    render() {
        return (
            <div>
                <p>结合Redux的加减</p>
                <button onClick={() => {store.dispatch({type: 'decrement'})}}>-</button>
                <span id='count' style={{margin: '0 8px'}}>{store.getState().count}</span>
                <button onClick={() => {store.dispatch({type: 'increment'})}}>+</button>
            </div>
        )
    }
}
