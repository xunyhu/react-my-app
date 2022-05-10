const Arr = () => {
    //数组的方法
    //join 不改变原数组
    var a = [1, 2, 3, 4, 5]
    console.log('join', a.join())
    console.log(a)

    //reverse 改变原数组
    console.log('reverse', a.reverse())
    console.log(a)

    //sort 改变原数组
    console.log('sort', a.sort())
    console.log(a)

    //concat 不改变原数组
    console.log('concat', a.concat(4, 5, 6))
    console.log(a)

    //slice 不改变原数组
    console.log('slice', a.slice(0, 1))
    console.log('slice', a.slice(2))
    console.log(a)

    //splice 改变原数组
    console.log('splice', a.splice(1, 1))
    console.log('splice', a.splice(1, 0, 2))
    console.log(a)

    //push 改变原数组 返回数组的长度
    console.log('push', a.push(6))
    console.log(a)

    //pop 改变原数组 返回数组改变之前的长度
    console.log('pop', a.pop())
    console.log(a)

    //shift 改变原数组，删除数组的第一个元素
    console.log('shift', a.shift())
    console.log(a)

    //unshift 改变原数组，在数组的第一个元素添加元素
    console.log('unshift', a.unshift(1))
    console.log(a)

    //toString
    console.log('toString', a.toString())

    //forEach、map
    a.forEach((x) => {
        x = x + 1
    })
    console.log(a)

    const b = a.map((x) => {
        return x = x + 1
    })
    console.log(b)
    console.log(a)

    //filter
    const c = a.filter((x) => x > 3)
    console.log(c)

    //every、some
    const d = a.every(x => x > 1)
    console.log(d)
    console.log(a)
    const e = a.some(x => x > 1)
    // const f = a.some(x => { x > 1 })
    console.log(e)

    //reduce、reduceRight
    //reduceRight 是reduce方法从右往左计算
    console.log(a)
    const aa = a.reduce((x, y) => x + y, 10) //第二个参数是一个初始值
    const bb = a.reduce((x, y) => x * y)
    console.log(aa, bb)

    //indexOf、lastIndexOf
    a.unshift(1)
    console.log(a)
    console.log(a.indexOf(1))
    console.log(a.lastIndexOf(1))
}

export default Arr