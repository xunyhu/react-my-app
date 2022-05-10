import React from 'react'

export default class Clicks extends React.Component {
    constructor() {
        super()
        this.handleClick3 = this.handleClick3.bind(this)
    }

    handleClick1(x) {
        console.log('handleClick1')
        console.log(x)
    }

    handleClick2() {
        console.log('handleClick2')
    }

    handleClick3(x) {
        console.log('handleClick3')
        console.log(x)
    }


    render() {
        return <div>
            <h3></h3>
            <p><span>onClick={'this.handleClick()'}</span>这样写会在元素渲染时就执行</p>
            <div>
                <ul>
                    <li><button onClick={this.handleClick1(123)}>this.handleClick1()</button></li>
                    <li><button onClick={this.handleClick2}>this.handleClick2</button></li>
                    <li><button onClick={this.handleClick3(456)}>this.handleClick3</button></li>
                </ul>
            </div>
            <h4>事件handler的写法</h4>
            <ul>
                <li>直接在render里写行内的箭头函数(不推荐)</li>
                <li>在组件内使用箭头函数定义一个方法(推荐)</li>
                <li>直接在组件内定义一个非箭头函数的方法，然后在render里直接使用onClick={'this.handleClick.bind(this)'}(不推荐)</li>
                <li>直接在组件内定义一个非箭头函数的方法，然后在constructor里bind(this)(推荐)</li>
            </ul>
        </div>
    }
}