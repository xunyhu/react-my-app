const { createStore } = require('redux')
const { reducer } = require('./reducer')

const store = createStore(reducer)
console.log('redux', require('redux'))
console.log('thunk', require('react-thunk'))
console.log('store', store)
store.subscribe(() => {
    console.log(store.getState().count)
})

store.dispatch({ type: 'increment'})
store.dispatch({ type: 'increment'})
store.dispatch({ type: 'increment'})
store.dispatch({ type: 'increment'})