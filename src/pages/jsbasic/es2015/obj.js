//es6对象的扩展
const ObjectApp = () => {
    //简洁的语法
    const foo = 'bar'
    const baz = { foo } // { foo: 'bar' }

    const o = {
        method() {

        },
        //等同于这样
        methods: function () {

        }
    }

    //方法的name属性
    const person = {
        sayName() { }
    }
    console.log(person.sayName.name)


    //Object.is()
    //用来判断两个值是否严格相等
    const a = Object.is('foo', 'foo')
    console.log(a)


    //Object.assign()
    //用来合并对象、 assign是浅拷贝、同名属性会被后者替换、
    const target = { a: 1 }
    const source1 = { b: 2 }
    const source2 = { c: 3 }
    Object.assign(target, source1, source2)
    console.log(target)
    console.log(Object.assign([1, 2, 3], [3, 4]))

    /**
     * 对象的五种遍历方法
     *  for in
     *  keys
     *  getOwnPropertyNames
     *  getOwnpropertySymbols
     *  Reflect.ownKeys
     */
    const obj1 = {
        a: 'for in',
        b: 'keys',
        c: 'getOwnpropertyNames'
    }
    for (let keys in obj1) {
        // console.log(keys)
    }
    console.log(Object.keys(obj1))
    console.log(Object.getOwnPropertyNames(obj1))
    //返回对象自身的所有Symbol属性的键名
    console.log(Object.getOwnPropertySymbols(obj1))

    //setPrototypeOf、getPrototypeOf
    //等价于如下函数
    function setProto(obj, prototype) {
        obj.__proto__ = prototype;
        return obj
    }
    function getProto(obj) {
        return obj.prototype;
    }


    //super关键字
    const proto = {
        foo: 'hello'
    }

    const obj2 = {
        find() {
            return super.foo
        }
    }

    Object.setPrototypeOf(obj2, proto)
    console.log(obj2.find())



    //es2017新增语法——对象扩展运算符
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
    console.log(x, y, z)
}

const ObjTest = () => {
    const originPage = function() {
        console.log(123)
    }
    const configObj = {
        set Page(fakePage) {
            this.newPage = fakePage
        },
        get Page() {
            return this.newPage
        },
        newPage: 123,
    }

    console.log(configObj.Page)
}

export {
    ObjectApp as Obj,
    ObjTest
}