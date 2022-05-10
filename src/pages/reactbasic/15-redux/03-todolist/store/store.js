import { createStore,  applyMiddleware } from 'redux'

import reducer from './reducer'

//actios, 与store之间的异步操作
import thunk from 'redux-thunk'

const middlerware = applyMiddleware(thunk)
const store = createStore(reducer, middlerware)

export default store