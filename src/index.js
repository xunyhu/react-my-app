import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
// import App from './App';
// import { ClassApp, JsxApp, newClassApp, GroupComp } from './pages/demo/01-05-basic'
// import App from './pages/demo/06-style'
// import Form from './pages/demo/09-form'
// import App from './pages/demo/10-todolist/TodoList'
// import App from './pages/demo/11-lifetimes'
// import App from './pages/demo/12-context'
// import App from './pages/demo/13-hoc/App'
// import App from './pages/demo/15-redux/01-self-redux/App'
// import App from './pages/demo/15-redux/02-redux/react-redux/App'
// import Store from './pages/demo/15-redux/02-redux/react-redux/store'
// import App from './pages/demo/15-redux/03-todolist/TodoList'
// import Store from './pages/demo/15-redux/03-todolist/store/store'
// import App from './pages/demo/16-router'
import reducer from '@common/reducers'
import Home from './pages/main'
import routers from './pages/router'
// import 'lib-flexible'

// import reportWebVitals from './reportWebVitals';


// ReactDOM.render(newClassApp, document.getElementById('root'))
// ReactDOM.render(<App/>, document.getElementById('root'))

const store = createStore(reducer)

ReactDOM.render( 
    <Provider store={store}>
        <Router>
            <Route exact path='/' component={Home}/>
            {
                routers.map((item, index) => {
                    const { component: Component, path } = item
                    return <Route key={index} path={path} component={Component}/>
                })
            }
        </Router>
    </Provider>,
    document.getElementById('root')
)

// function render() {
//     ReactDOM.render(<App/>, document.getElementById('root'))
// }
// Store.subscribe(render)
// render()

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
