//箭头函数
/**
 * 注意：
 *  1、函数的this,指向定义时所在的对象、而不是使用时所在的对象
 *  2、不可以当做构造函数
 *  3、不可以使用arguments参数、用rest代替
 *  4、不可以使用yield命令、因此不能做Generator函数
 */
const yufa = () => {
    //es5、es6函数写法对比
    var f = v => v
    var f = function (v) {
        return v
    }

    var f = () => 5
    var f = function () {
        return 5;
    }

    var sum = (num1, num2) => num1 + num2
    var sum = function(num1, num2) {
        return num1 + num2
    }

    //返回一个对象时要用括号包裹
    let getTempItem = id => ({id: id, name: 'temp'})

    var full = ({ first, last }) => first + last;
    function full(x) {
        return x.first + x.last
    }
}
