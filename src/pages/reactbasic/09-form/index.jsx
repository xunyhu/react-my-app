import React, { Component, createRef } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.myRef = createRef()
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        value: 'abc',
        selectValue: ['0', '1'],
        checkboxValue: true,
        numValue: 8
    }

    handleTextareaChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleChange(e) {
        console.log(e.target.value)
        console.log(this.myRef.current.value)
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return <>
            <div>
                <textarea value={this.state.value} onChange={this.handleTextareaChange} rows="10"></textarea>
            </div>
            <div>
                <input type="text" defaultValue={this.state.value} onChange={this.handleChange} ref={this.myRef} />
            </div>
        </>
    }
}