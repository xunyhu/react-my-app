import React, { Component } from 'react'
import { connect } from 'react-redux'
import { putDataAction } from './store/action'

//映射dispatch到当前组件的props里
const mapDispatchToProps = (dispatch) => {
    return {
        putData(task) {
            dispatch(putDataAction(task))
        }
    }
}

@connect(null, mapDispatchToProps)
class Form extends Component {
    state = {
        task: ''
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.props.putData(this.state.task)
        }
    }

    render() {
        return (
            <div style={{marginBottom: '8px'}}>
                <span>添加list数据: </span>
                <input 
                    type='text' 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                    onKeyUp={this.handleKeyUp}
                />
            </div>
        )
    }
}

export default Form
