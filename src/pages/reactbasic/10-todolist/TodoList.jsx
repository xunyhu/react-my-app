import React, { Component } from 'react'

import Form from './Form.jsx'
import List from './List.jsx'

export default class TodoList extends Component {
  state = {
    list: []
  }

  handleReceive = (keyword) => {
    this.setState(state => ({
      list: [
        ...state.list,
        keyword
      ]
    }))
  }

  handleDelete = (index) => {
    return () => {
      this.state.list.splice(index, 1)
      this.setState({})
    }
  }

  render() {
    return (
      <>
        <Form
          onReceive={this.handleReceive}
        ></Form>
        <List
          list={this.state.list}
          onDelete={this.handleDelete}
        ></List>
      </>
    )
  }
}