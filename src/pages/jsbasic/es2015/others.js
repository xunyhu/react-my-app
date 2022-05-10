//es6语法练习

/**
 * Promise对象
 * 异步编程的一种解决方案
 * 两个特点：
 * 1、对象的状态不受外界影响。只有三个状态pending、fulfilled、rejected
 * 2、状态一旦改变，就不会再变，任何时候都可以得到这个结果。
 */
const PromiseFun = () => {
    let promise = new Promise((resolve, reject) => {
        if (true) {
            resolve('成功')
        } else {
            reject('失败')
        }
    })
    console.log(promise)
    // promise.then((value) => {
    //     console.log(value)
    // }, (error) => {
    //     console.log(error)
    // })  

    //封装网络请求
    let getJSON = function(url) {
        let promise = new Promise((resolve, reject) => {
            let client = new XMLHttpRequest()
            client.open('GET', url)
            client.responseType = 'json'
            client.send()
            client.onreadystatechange = handler

            function handler() {
                if (this.readyState !== 4) {
                    return
                }
                if (this.status === 200) {
                    resolve(this.response)
                } else {
                    reject(new Error(this.statusText))
                }
            }
        })

        return promise
    }

    // getJSON('/url').then(() => {

    // }, () => {

    // })


    // let p1 = new Promise((resolve, reject) => {
    //     setTimeout(() => reject(new Error('fail')), 3000)
    // })

    // let p2 = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve(p1), 1000)
    // })

    //p2函数返回了p1,所以p2的执行结果由p1决定
    // p2.then(result => console.log(result)).catch(error => console.log(error))

    // new Promise((resolve, reject) => {
    //     resolve('aaa')
    //     console.log(2)
    // }).then(r => {
    //     console.log(r)
    // })


    //Promise.prototype.then()
    //then方法第一个参数是resolved状态的回调函数、第二个参数可选，是reject的回调。
    //then返回的是一个新的Promise对象，因此可以采用链式写法
    // getJSON('/url').then(() => {

    // }).then(() => {

    // })

    //Promise.prototype.catch()

    //Promise.all()
    const pa1 = new Promise((resolve, reject) => {
        resolve('hello')
    })

    const pa2 = new Promise((resolve, reject) => {
        throw new Error('报错了')
    }).then(result => result).catch(err => err)

    Promise.all([pa1, pa2]).then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })

    //Promise.race()

    //Promise.try()
}


/**
 * Generator函数
 * 也是一种异步编程的解决方案
 */
const GeneratorFun = () => {

}

/**
 * async函数
 * 
 */
const AsyncFun = () => {

}

export {
    PromiseFun,
    GeneratorFun,
    AsyncFun
}