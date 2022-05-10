const defaultState = {
    list: ['task1', 'task2']
}

const reducer = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                list: action.data
            }
        case 'LOAD_DATA':
            return state
        case 'PUT_DATA':
            return {
                list: [action.task, ...state.list]
            }
        case 'DELE_DATA':
            let newList = state.list.filter((value, index) => {
                return index !== action.idx
            })
            return {
                ...state,
                list: newList
            }
        default:
            return state
    }
}

export default reducer