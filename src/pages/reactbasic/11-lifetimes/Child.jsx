import React,{ Component } from 'react'

export default class Son extends Component {
    //挂载阶段 constructor => render => componentDidMount => componentDidUpdate
    //更新阶段 getDeriveStateFromProps => shouldComponentUpdate => render => getSnapshotBeforeUpdate => componentDidUpdate
    constructor() {
        super()
        console.log('constructor')
    }

    // UNSAFE_componentWillMount() {
    //     console.log('UNSAFE_componentWillMount')
    // }

    // UNSAFE_componentWillReceiveProps() {
    //     console.log('UNSAFE_componentWillReceiveProps')
    // }
    
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    render() {
        console.log('render')
        return <p>Child组件{this.props.time}</p>
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    //第一次渲染不执行
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
}