// import fetch from 'fetch'

// const fn = () => {
//     fetch.get('/position.json').then(res => {
//         console.log(res)
//     })
// }
// fn()

const reMoveAction = (idx) => {
    return {
        type: 'DELE_DATA',
        idx
    }
}

const putDataAction = (task) => {
    return {
        type: 'PUT_DATA',
        task
    }
}

const setDataAction = (data) => {
    return {
        type: 'SET_DATA',
        data
    }
}

const loadDataAction = () => {
    return dispatch => {
        fetch('/position.json').then(res => res.json()).then(data => {
            // console.log(data.data)
            dispatch(setDataAction(data.data))
        })
    }
}

export {
    reMoveAction,
    putDataAction,
    loadDataAction
}