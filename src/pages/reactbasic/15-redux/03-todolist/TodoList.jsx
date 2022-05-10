import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Form from './Form'
import List from './List'

export default class TodoList extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <p>TodoList</p>
                    <Form />
                    <List />
                </div>
            </Provider>
        )
    }
}
