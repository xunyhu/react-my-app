import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.onReceive(this.state.keyword)
      this.setState({
        keyword: ''
      })
    }
  }

  render() {
    return (
      <>
        <input 
          type="text" 
          value={this.state.keyword}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
      </>
    )
  }
}
