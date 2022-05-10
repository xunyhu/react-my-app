import React from 'react'
import styles from './index.scss'

const App = (props) => {
    const list = [
        {
            title: '自定义redux',
            path: '/react/redux/self'
        },
        {
            title: 'redux',
            path: '/react/redux/redux'
        },
        {
            title: 'react-redux',
            path: '/react/redux/react-redux'
        }
    ]

    const handleClick = (item) => {
        if (item.path) {
            props.history.push(item.path)
        } else {
            window.open(item.url)
        }
    }


    return <>
        <h3 className='title'>Redux基础</h3>
        <ul className={styles.wrap}>
            {
                list.map((item, i) => {
                    return <li key={i}><span onClick={() => { handleClick(item) }}>{item.title}</span></li>
                })
            }
        </ul>
    </>
}

export default App