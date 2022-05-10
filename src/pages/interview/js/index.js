/* eslint-disable no-extend-native */
import React from 'react'

const App = () => {
    const fun1 = (x) => {
        Number.prototype.add = function (n) {
            return this + n;
        }
    
        Number.prototype.minus = function (n) {
            return this - n;
        }
        console.log(x.add(3).minus(2))
    }
    fun1(5)

    return <>
        <h3 className='title'>实现 (5).add(3).minus(2) 功能</h3>
        <h3 className='title'>原理概述</h3>
        <div className='link'>
            <a href="https://github.com/a1029563229/InterviewQuestions/tree/master/javascript/3">在列表组件中写 key，其作用是什么？</a>
        </div>
        <div className='link'>
            <a href="https://github.com/a1029563229/InterviewQuestions/tree/master/javascript/5">什么是防抖和节流？</a>
        </div>
        <div className='link'>
            <a href="https://github.com/a1029563229/InterviewQuestions/tree/master/javascript/8">setTimeout、Promise、Async/Await 的区别</a>
        </div>
        <div className='link'>
            <a href="https://github.com/a1029563229/InterviewQuestions/tree/master/javascript/9">Async/Await 如何通过同步的方式实现异步</a>
        </div>
        <div className='link'>
            <a href="https://github.com/a1029563229/InterviewQuestions/tree/master/javascript/10">简述一下 Generator 函数</a>
        </div>
    </>
}

export default App