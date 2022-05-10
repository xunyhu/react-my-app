import React, { Component, Fragment } from 'react';
import name, { text } from './test-export'

//函数式组件
function functionApp() {
    return <div>{text}</div>
}

//class 组件
class ClassApp extends Component {
    render() {
        return <div>
            <p>hello {name}</p>
            <p>{this.props.name && this.props.name}</p>
        </div>
    }
}

//函数式组件是直接调用；class组件其实就是一个构造器,每次使用组件都相当于在实例化组件，像这样
const newClassApp = new ClassApp({
    name: 'hello'
}).render()

//组件的组合与嵌套
class Title extends Component {
    render() {
        return <h1>欢迎进入React的世界</h1>
    }
}

class Content extends Component {
    render() {
        return (
            <p>React.js是一个构建UI的库</p>
        )
    }
}

class GroupComp extends Component {
    // 由于每个React组件只能有一个根节点，如果使用div, 会生成多余的一层dom,如果不想生成多余的一层dom可以使用React提供的Fragment组件在最外层进行包裹
    render() {
        return <Fragment>
            <Title />
            <Content />
        </Fragment>
    }
}

// JSX
class JsxApp extends Component {
    render() {
        const content = <div className='app' id='app'>
            <h1 className='title'>欢迎进入React, Jsx的世界</h1>
            <p>React.js 是一个构建页面 UI 的库</p>
        </div>

        // return content
        return (
            React.createElement(
                "div", {
                    className: 'app',
                    id: 'app'
                },
                React.createElement(
                    "h3", {
                        className: 'title'
                    },
                    "欢迎进入React, Jsx的写法"
                ),
                React.createElement(
                    "p", 
                    {},
                    "React.js 是一个构建页面 UI 的库"
                )
            )
        )
    }
}

export {
    functionApp as FnApp,
    ClassApp,
    newClassApp,
    GroupComp,
    JsxApp
}