/**
 * 纯函数
 * 1、相同的入参，得到相同的输出
 * 2、不能修改入参
 * @param {*} action 
 */
const changeState = (state, action) => {
    action = action || {type: ''}
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count++
            }
        case 'decrement':
            return {
                ...state,
                count: state.count--
            }
        default:
            return state
    }
}

export {
    changeState
}