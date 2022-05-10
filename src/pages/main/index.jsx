import React from 'react'
import { connect } from 'react-redux'
import listInfo from '../../constants'
import styles from './index.scss'

 class App extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        // console.log(location.pathname, props)
    }

    handleClick(item) {
        if (item.path) {
            this.props.history.push(item.path)
        } else {
            window.open(item.url)
        }
    }

    render() {
        return <>
            <div className={styles.wrap}>
                {
                    listInfo.map((info, i) => {
                        return <div className={styles.topic_wrap} key={i}>
                            <h3 className='title'>{info.title}</h3>
                            <ul>
                                {
                                    info.list.map((item, index) => {
                                        return <li key={index}>
                                            <span onClick={() => { this.handleClick(item) }}>{item.title}</span>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    })
                }
            </div>
        </>
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...state,
        ...props
    }
}

const mapDispathToProps = (dispath) => {

}


export default connect(mapStateToProps, null)(App)