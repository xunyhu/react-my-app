//es6模块

//es6之前主流的模块加载方案主要有CommonJs和AMD两种

//CommonJS
let { stat, exists, readFile } = require('fs')
//等同于
let _fs = require('fs')
let stat = _fs.stat

//es6
import { stat, exists, readFile } from 'fs'


//export命令
//必须与模块内的变量一一对应，不能直接export
export let a = 'a'
let b = 'b'
export { b }

//import命令

//export default