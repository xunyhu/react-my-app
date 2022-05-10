import React from 'react'
import styles from './index.scss'

const Flex = () => {
    return <>
        <h3 className={styles.title}>Flex布局</h3>
        <div>
            <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target='_brank'>参考文档</a>
        </div>
        <p>Flex两个核心概念：主轴、交叉轴</p>
        <p>属性flex-direction定义元素主轴方向: 决定元素往什么方向开始排列；从左自右：row; 从右自左：row-reverse;从上自下：column;从下自上：columu-reverse</p>
        <div className={styles.demo1_wrap}>
            <div className={styles.box}>1</div>
            <div className={`${styles.box} ${styles.box2}`}>2</div>
            <div className={`${styles.box} ${styles.box3}`}>3</div>
        </div>
        <p>属性Flex-wrap用来实现多行布局</p>
        <div className={styles.demo2_wrap}>
            <div className={styles.box}>1</div>
            <div className={`${styles.box} ${styles.box2}`}>2</div>
            <div className={`${styles.box} ${styles.box3}`}>3</div>
        </div>
        <p>Flex元素上的属性</p>
        <p>flex-basis 用来定义元素宽度</p>
        <div className={`${styles.demo2_wrap} ${styles.demo3_wrap}`}>
            <div className={styles.box}>1</div>
            <div className={`${styles.box} ${styles.box2}`}>2</div>
            <div className={`${styles.box} ${styles.box3}`}>3</div>
        </div>
        <p>flex-grow  当所有子元素不够父元素宽度时、按比例去分配剩下的空间</p>
        <div className={`${styles.demo2_wrap} ${styles.demo4_wrap}`}>
            <div className={styles.box}>100px</div>
            <div className={`${styles.box} ${styles.box2}`}>200px</div>
            <div className={`${styles.box} ${styles.box3}`}>100px</div>
        </div>
        <p>flex-shrink  当所有子元素宽度大于父元素时、按比例去缩减至合适宽度</p>
        <div className={`${styles.demo2_wrap} ${styles.demo5_wrap}`}>
            <div className={styles.box}>1</div>
            <div className={`${styles.box} ${styles.box2}`}>2</div>
            <div className={`${styles.box} ${styles.box3}`}>3</div>
        </div>
        <p>元素间的对齐和空间分配</p>
        <p>align-items属性： 让元素在交叉轴方向对齐</p>
        <p>justify-content属性： 让元素在主轴方向对齐</p>
    </>
}

export default Flex