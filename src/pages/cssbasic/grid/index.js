import React from 'react'
import styles from './index.scss'

const Flex = () => {
    return <>
        <h3 className='title'>Grid网格布局</h3>
        <div className='link'>
            <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout" target='_brank'>参考文档</a>
        </div>
        <div className='link'>
            <a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout" target='_brank'>CSS布局</a>
        </div>
        <p>CSS 网格布局擅长于将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系（前提是HTML生成了这些区域）。</p>
        <div className={styles.wrapper}>
            <div className={styles.one}>One</div>
            <div className={styles.two}>Two</div>
            <div className={styles.three}>Three</div>
            <div className={styles.four}>Four</div>
            <div className={styles.five}>Five</div>
            <div className={styles.six}>Six</div>
        </div>
    </>
}

export default Flex