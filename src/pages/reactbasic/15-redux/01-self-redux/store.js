import { changeState } from './reducer'

let state = {
    count: 0
}

const createStore = () => {
    const getState = () => state

    //观察者模式
    const listeners = []
    //订阅
    const subscribe = listener => listeners.push(listener)

    const dispatch = (action) => {
        changeState(getState(), action)
        //发布
        listeners.forEach(listener => listener())
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}

const store = createStore()

const render = () => {
    document.querySelector('#count').innerHTML = store.getState().count
}

store.subscribe(render)

export default store