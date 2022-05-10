import React, { Component } from 'react'
// import { dispatch } from './dispath'
import store from './store'

export default class App extends Component {
    render() {
        return (
            <div>
                <p>自定义加减</p>
                <button onClick={() => { store.dispatch({type: 'decrement'}) }}>-</button>
                <span id='count' style={{margin: '0 8px'}}></span>
                <button onClick={() => { store.dispatch({type: 'increment'}) }}>+</button>
            </div>
        )
    }

    componentDidMount() {
        // dispatch()
        store.dispatch()
    }
}
