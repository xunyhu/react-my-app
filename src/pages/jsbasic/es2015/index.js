import React, { useState } from 'react'
import './fun.js'
import { Arr } from './arr'
import { Obj, ObjTest } from './obj'
import { PromiseFun } from './others'
// Arr()
// Obj()
ObjTest()
// PromiseFun()
const App = () => {
    const [show, setShow] = useState(false)
    const handleCLick = () => {
        setShow(!show)
    }
    return <div style={{display: `${show ? 'block' : 'none'}`}}>
        <h3 className='title'>ECMAScirpt2015标准 (ES6)简介</h3>
        <div>2011年，ECMAScript5.1版本发布；2015年6月，es6的第一个版本发布；es6泛指5.1版本之后的下一代标准、涵盖ES2015、ES2016、ES2017等等。</div>
        <p>变量部分</p>
        <ul>
            <li>1、let和const</li>
            <li>2、数组、对象的解构赋值</li>
        </ul>
        <p>数据类型部分</p>
        <ul>
            <li>1、函数参数赋值</li>
            <li>2、数组扩展方法</li>
            <li>3、对象扩展方法</li>
            <li>4、Symbol类型</li>
        </ul>
        <p>es6增加的部分</p>
        <ul>
            <li>1、Promise对象</li>
            <li>2、Generator函数</li>
            <li>3、async函数</li>
            <li>4、Class语法</li>
            <li>5、Decorator修饰器</li>
            <li>6、Module语法</li>
        </ul>
        <button onClick={handleCLick}>页面隐藏</button>
    </div>
}

export default App