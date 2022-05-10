import React from 'react'
import './index.css'

const styles = {
    fontSize: '16px'
}
class App extends React.PureComponent {
    render() {
        //style
        // return <p style={{color: 'red', fontSize: '16px'}}>Hello Style</p>

        //class
        return <p className='txt' style={styles}>Hello Style</p>
    }
}

export default App