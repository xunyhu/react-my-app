//es6数组的扩展
const App = () => {
    //扩展运算符
    const a1 = [1, 2]
    const a2 = [...a1]
    const a3 = [3, 4]

    const a4 = a1.concat(a3)
    const a5 = [...a1, ...a3]
    const a6 = [a1, ...a3]
    // console.log(a6)

    //解构赋值
    const [first, ...rest] = [1, 2, 3, 4, 5]
    console.log(first, rest)

    //Array.from()
    console.log(Array.from('hello'))

    //Array.of()
    console.log(Array.of(1, 2, 3))

    //copeWithin()
    console.log([1, 2, 3, 4, 5].copyWithin(0, 2))

    //find、findIndex
    //找到满足条件的第一个元素
    const arr = [1, 2, 3, 4, 5, 6]
    const res = arr.find((x) => {
        // console.log(x)
        return x > 3
    })
    const ress = arr.findIndex((x) => {
        // console.log(x)
        return x > 3
    })
    console.log(res, ress)

    //includes()
    console.log([1, 2, 3, 3].includes(5))

    //fill  参数：填充的元素、开始位置、结束位置
    console.log(['a', 'b', 'c'].fill(7, 1, 2))

    //keys、values、entries
    const arr2 = ['a', 'b', 'c']
    console.log(arr2.keys())
    for (let index of arr2.keys()) {
        console.log(index)
    }
    console.log(arr2.values())
    for (let elem of arr2.values()) {
        console.log(elem)
    }
    console.log(arr2.entries())
    console.log(arr2.entries().next().value)
    for (let [index, elem] of arr2.entries()) {
        console.log(index, elem)
    }
}

export {
    App as Arr
}