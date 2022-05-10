import { Component } from 'react'

/**
 * 
 * @param {*} Components  传入一个组件，返回一个组件，并赋予组件一些额外的能力
 */
const hoc = (Components) => {
    return class extends Component {//匿名class
        render() {
            return (<Components title='hoc' {...this.props}></Components>)
        }

        componentDidMount() {
            console.log(this)
        }
    }
}

export default hoc