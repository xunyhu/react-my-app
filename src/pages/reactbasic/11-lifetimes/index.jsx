import React, { Component } from 'react'

import Child from './Child'

export default class Main extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
        // console.log('constructor')
    }

    state = {
        time: '0'
    }

    componentDidMount() {
        // console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
                time: new Date().getDate()
            })
        }, 3000)
    }

    render() {
        return <>
            <h1>我是父组件</h1>
            <Child time={this.state.time}/>
        </>
    }

    //第一次渲染不执行
    componentDidUpdate() {
        // console.log('componentDidUpdate')
    }
}