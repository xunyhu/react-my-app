import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { reMoveAction, loadDataAction } from './store/action'

//connect方法接收两个函数，把state和dispatch映射到porps里去

//映射State到当前组件的props里
const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

//映射dispatch到当前组件的props里
const mapDispatchToProps = (dispatch) => {
    return {
        reMove(idx) {
            dispatch(reMoveAction(idx))
        },
        loadData() {
            dispatch(loadDataAction())
        }
    }
}

const List = (props) => {
    // console.log(props)
    useEffect(() => {
        props.loadData()
    }, [])

    //onClick需要传参的话返回一个函数，不需要传参直接写箭头函数
    const handleClick = (idx) => {
        return () => {
            props.reMove(idx)
        }
    }
    const { list } = props
    return <div>
        <ul>
            {
                list && list.map((value, index) => {
                    let { job_title } = value
                    return <li key={index}>
                        {job_title ? job_title : value} <button onClick={handleClick(index)}>Remove</button>
                    </li>
                })
            }
        </ul>
    </div>
}

// class List extends Component {
//     handleClick = (idx) => {
//         return () => {
//             this.props.reMove(idx)
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h4>list</h4>
//                 <ul>
//                     {
//                         this.props.list && this.props.list.map((value, index) => {
//                             return <li key={index} onClick={this.handleClick(index)}>{value}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }

//     componentDidMount() {
//         console.log(this.props)
//     }
// }

//connect方法返回一个高阶组件
export default connect(mapStateToProps, mapDispatchToProps)(List)
