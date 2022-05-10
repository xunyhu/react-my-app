import React, { Component } from 'react'
import styles from './index.less'

export default class viewport extends Component {
    render() {
        return (
            <div>
                <h3 className='title'>Viewport</h3>
                <div>
                    <a href="https://www.jianshu.com/p/413a25b2c503" target='_brank'>viewport,devicePixelRatio的深入理解</a>
                </div>
                <div>
                    <a href="https://www.cnblogs.com/mmxuehan/p/11141968.html" target='_brank'>viewport适配基础知识</a>
                </div>
                <div>
                    <a href="https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md" target='_brank'>postcss-px-to-viewport</a>
                </div>
                <div className={styles.demo}>
                    <div className={styles.line}>配置viewportWidth为75时的效果</div>
                    <div className={styles.text}>我是375px</div>
                    <div className={styles.text2}>我是750px</div>
                </div>
            </div>
        )
    }
}
