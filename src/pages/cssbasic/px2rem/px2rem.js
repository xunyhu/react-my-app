import React, { Component } from 'react'
import styles from './index.less'

export default class px2rem extends Component {
    render() {
        return (
            <div>
                <h3 className='title'>lib-flexible和px2rem-loader</h3>
                <div>
                    <a href="https://www.jianshu.com/p/e6cf887ac938x" target='_brank'>参考文档</a>
                </div>
                <div>
                    <a href="https://zhuanlan.zhihu.com/p/76833513" target='_brank'>px2rem-loader使用及注意事项</a>
                </div>
                <div className={styles.demo}>
                    <div className={styles.line}>750设计稿下: 引入lib-flexible，并且将px2rem的remUnit设置为75时的效果</div>
                    <div className={styles.text}>我是375px</div>
                    <div className={styles.text2}>我是750px，我将占据屏幕的100%宽度</div>
                </div>
            </div>
        )
    }
}
