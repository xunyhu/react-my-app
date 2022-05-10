import React, { createContext, Component } from 'react'

/**
 * Consumer 可用于函数式组件渲染context,使用方法 (context) => { <Consumer><div>context</div></Consumer>}
 * Provider 用于包裹子组件，value属性里面设置的值，子组件可以通过context获取
 */
const { 
  Provider,
  Consumer: CountConsumer
} = createContext()

//创建一个带有Count方法的Provider
class CountProvider extends Component {
  state = {
    count: 0
  }

  increment = (num) => {
    return () => {
      this.setState(state => ({
        count: state.count + num
      }))
    }
  }

  decrement = (num) => {
    return () => {
      this.setState(state => ({
        count: state.count - num
      }))
    }
  }

  render() {
    return (
      <Provider value={{
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  CountProvider,
  CountConsumer
}