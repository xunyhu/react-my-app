const Fun = () => {
    var scrope = 'global', myscrope;
    function checkscope() {
        scrope = 'local'
        myscrope = 'local'

        return [scrope, myscrope]
    }
    checkscope()
    // console.log(scrope)
    // console.log(myscrope)

    //变量声明
    /**
     * var 作用域 => 函数作用域；变量提升；全局声明会成为windows下的对象；
     * let 作用域 => 块级作用域；变量不会提升；全局声明不会成为windows下的对象；
     * const声明与let作用差不多，区别在于声明变量时必须赋值；
     */
    const function1 = () => {
        var name = 'haha'
        if (true) {
            var name = 'hehe'
        }
        console.log(name)

        let letName = 'haha'
        if (true) {
            let letName = 'hehe'
            console.log('letName', letName)
        }
        console.log('letName', letName)

        if (true) {
            var Name2 = 'name2'
        }
        console.log('Name2', Name2)

        console.log('Name3', Name3)
        var Name3 = 'Name3'

        // for (var i = 0; i<5 ; i++) {}
        // console.log(i) 5

        // for (let x = 0; i<5 ; i++) {}
        // console.log(x) x 没有被定义

        for (var i = 0; i < 5; i++) {
            // console.log(i)
            setTimeout(() => console.log(i), 0)
        }
        for (let x = 0; x < 5; x++) {
            setTimeout(() => console.log(x), 0)
        }
    }

    //形参、实参、argument
    function sayHi(name, message) {
        const res = `Hello ${name}, ${message}`
        const res2 = `Hello ${arguments[0]}, ${arguments[1]}`
        console.log(arguments)
        console.log(res)
        console.log(res2)
    }
    // sayHi('小明', '18')

    //递归
    function factorial(num) {
        if (num <= 1) {
            return 1
        } else {
            return num * factorial(num - 1)
        }
    }
    console.log(factorial(4))//4 * 3 * 2 * 1

    //call
    
}

export default Fun