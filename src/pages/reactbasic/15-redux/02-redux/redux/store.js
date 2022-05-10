import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const listener = () => {
    console.log(store)
    // console.log(store.getState())
    document.getElementById('count').innerHTML = store.getState().count
}

store.subscribe(listener)

export default store
