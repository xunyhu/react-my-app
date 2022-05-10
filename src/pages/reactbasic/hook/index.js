import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const App = (props) => {
    // console.log(location.pathname, props)
    let [count, setCount] = useState(0)

    useEffect(() => {
        console.log('count发生变化时执行')
    }, [count])

    useEffect(() => {
        console.log('只执行一次')
    }, [])

    useEffect(() => {
        console.log('-----')
        return () => { 
            console.log('组件卸载执行')
        }
    })

    return <div>
        <h3 className='title'>Hooks</h3>
        <ul>
            <li>useState</li>
            <li>useEffect</li>
            <li>useContext</li>
            <li>useReducer</li>
            <li>useCallback</li>
            <li>useMemo</li>
        </ul>
        <div>
            <button onClick={() => { setCount(--count)}}>-</button>
            <span style={{ margin: '0 8px' }}>{count}</span>
            <button onClick={() => { setCount(++count)}}>+</button>
        </div>
    </div>
}



const mapStateToProps = (state, props) => {
    return {
        ...state,
        ...props
    }
}

export default connect(mapStateToProps, null)(App)