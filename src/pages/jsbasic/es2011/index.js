import React from 'react'
import './obj.js'
import Fun from './fun.js'
import Arr from './arr.js'

Fun()
// Arr()

const App = () => {
    // function1()

    return <>
        <h3 className='title'>ECMAScirpt2011(es5)</h3>
        <ul>
            <li>
                <h4>1、数据类型、变量、作用域和内存</h4>
                <p>数据类型分为：原始类型（Number、String、Boolean）原始值（null、undefined）和对象类型</p>
                <p>对象类型里需注意两点：一全局对象；二对象是属性的无序集合、数组是一种特殊的有序集合的对象；</p>
                <p>作用域分全局作用域和局部作用域；同名的局部变量优先级高于全局变量</p>
            </li>
            <li>
                <h4>2、对象</h4>
                <p>深拷贝、浅拷贝</p>
            </li>
            <li>
                <h4>3、数组</h4>
                <p>数组的常用方法</p>
            </li>
            <li>
                <h4>4、函数</h4>
                <p>形参、实参</p>
                <p>属性、方法、构造函数</p>
                <p>闭包</p>
                <p>递归</p>
            </li>
        </ul>
    </>
}

export default App