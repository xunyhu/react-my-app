const defaultState = {
    count: 0
}

const changeState = (actions) => {
    switch(actions.type) {
        case 'increment':
            defaultState.count++
            break;
        case 'decrement':
            defaultState.count--
            break;
        default:
            break;
    }
}

const renderDom = () => {
    let countEle = document.querySelector('#count')
    countEle.innerHTML = defaultState.count
}

const dispatch = (action) => {
    action && changeState(action)
    renderDom()
} 

export {
    dispatch
}