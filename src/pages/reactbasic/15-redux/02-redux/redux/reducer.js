let defaultState = {
    count: 10
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            }
        default: 
            return state
    }
}

export default reducer 
