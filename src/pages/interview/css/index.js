import React from 'react'
import styles from './index.scss'

const App = () => {
    return <>
        <h3 className='title'>让一个 div 水平垂直居中</h3>
        <div className={styles.parent}>
            <div className={styles.child}>子元素</div>
        </div>
        <h3 className='title'>原理概述</h3>
        <div className='link'><a href="https://github.com/a1029563229/InterviewQuestions/tree/master/css/1">介绍下 BFC 及其应用</a></div>
        <div className='link'><a href="https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/13/README.md">介绍下重绘和回流</a></div>
        <div className='link'><a href="https://github.com/a1029563229/InterviewQuestions/tree/master/css/5">简述 Rem 及其转换原理</a></div>
        <div className='link'><a href="https://github.com/a1029563229/InterviewQuestions/tree/master/css/7">简述伪类和伪元素</a></div>
        <div className='link'><a href="https://github.com/a1029563229/InterviewQuestions/tree/master/css/6">移动端视口配置</a></div>
        <h3 className='title'>用纯 CSS 创建一个三角形</h3>
        <div className={styles.triangle}></div>
    </>
}

export default App