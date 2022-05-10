/**
 * 对象
 * 创建的方法：create、defineProperty
 * 属性的方法：delete、in、hasOwnPreperty、propertyIsEnumerable、
 * 对象的方法：toString、toLocalString、toJSON、valueOf
 */

//创建对象
const person = {
    name: 'js对象',
    age: 18
}

//  const person2 = new Object({
//      name: 'new 对象',
//      age: 19
//  })

//  console.log(person, person2)

//删除属性
delete person.age
// console.log(person)
// console.log(delete person.age)

//检测属性
// const obj3 = { x: 1, y: 2 }
// console.log('x' in obj3)
// console.log('z' in obj3)
// console.log('toString' in obj3)
// console.log(obj3)
// console.log(obj3.hasOwnProperty('x'))
// console.log(obj3.hasOwnProperty('toString'))
// console.log(obj3.isPrototypeOf(Object))
// console.log(obj3.toLocaleString())

//枚举属性
const enumerable = () => {
    const obj = { x: 1, y: 2 }
    // for (var x in obj) {
    //     console.log(x)
    // }

    const extend = (o, p) => { //扩展对象
        for (let prop in p) {
            o[prop] = p[prop]
        }
        return o;
    }

    const obj2 = extend({ z: 3 }, obj);
    // const obj2 = { ...obj, z: 3 };
    console.log(obj2)

    const merge = (o, p) => { //合并对象
        for (let prop in p) {
            if (o.hasOwnProperty(prop)) continue;
            o[prop] = p[prop]
        }
        return o;
    }
    const obj3 = merge({ x: 2 }, obj)
    // const obj3 = {...obj, x: 2}
    console.log(obj3)

    //Object.keys() 返回对象中可枚举的自有属性的集合
    console.log(Object.keys(obj))

    //Object.getOwnpropertyNames() 返回对象中所有自有属性的集合
    console.log(Object.getOwnPropertyNames(obj))
}
// enumerable()

//属性getter和setter   数据属性、存取器属性
const Getter = () => {
    const obj = {
        log: ['example', 'test'],
        get latest() {
            if (this.log.length == 0) return undefined;
            return this.log[this.log.length - 1];
        }
    }
    console.log(obj.latest);
    delete obj.latest

    var o = { a: 0 }
    Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });
    console.log(o.b)


    var expr = 'foo';
    var obj2 = {
        get [expr]() { return 'bar'; }
    };
    console.log(obj2.foo);


    const obj3 = {
        log: ['example', 'test'],
        set current(name) {
            this.log.push(name)
        }
    }
    obj3.current = '123'
    console.log(obj3)

}
// Getter()

//属性的特性 value: 值；writable: 可写性；enumerable: 可枚举性；configurable: 可配置性
const TeXing = () => {
    const obj = { x: 1, y: 2, z: 3 }
    console.log(obj)
    console.log(Object.getOwnPropertyDescriptor(obj, 'x'))

    Object.defineProperty(obj, 'a', {
        value: 4,
        writable: true,
        enumerable: false,
        configurable: false
    })
    console.log(obj)
    console.log(Object.keys(obj))
}
// TeXing()

//对象的三个属性  prototype: 原型，class：类；extensible：可扩展性
const ProFun = () => {
    var p = { x: 1 }
    var o = Object.create(p)
    p.isPrototypeOf(o)  // o继承自p
    Object.prototype.isPrototypeOf(p) //p继承自Object.prototype
}
// ProFun()

//对象的方法
const Funs = () => {
    const obj = { x: 1, y: 2, z: 3 }

    console.log(obj.toString())
    console.log(obj.toLocaleString())
}
// Funs()


//类和原型
const classAndPro = () => {
    //类的所有实例对象都从同一个原型对象上继承属性，因此原型对象是类的核心。
    //只要创建一个函数、函数都会自动创建一个prototype属性来指向原型对象。
    /**
     * 每一个原型对象都会自动获得一个constructor属性来指向与之关联的构造函数。在自定义构造函数中，原型对象
     * 默认只会获得constructor属性，其他的所有方法都继承自Object。每次调用构造函数创建一个新实例，这个实例内部
     * 的[[Prototype]]指针就会被赋值为构造函数的原型对象。在FireFox,Safari,Chrome中会在每个对象中暴露__proto__属性
     * 来访问对象的原型。
     */
    //constructor属性本是用来标识对象类型，但是instanceof更准确

    //创建一个工厂函数
    function createPerson(name, age, job) {
        let o = new Object()
        o.name = name
        o.age = age
        o.job = job
        o.sayName = function () {
            console.log(this.name)
        }
        return o
    }

    let person1 = createPerson('小明', 18, '程序员')
    // console.log(person1)
    // console.log(person1.constructor === Object)
    // console.log(createPerson.prototype)

    //创建一个构造函数
    function createPerson2(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
        this.sayName = function () {
            console.log(this.name)
        }
    }
    let person2 = new createPerson2('小红', 18, '医生')
    // console.log(person2)
    // console.log(createPerson2) //对象
    // console.log(createPerson2.prototype) //对象的原型
    // console.log(createPerson2.prototype.constructor) //原型的constructor属性指向构造函数
    // console.log(createPerson2.prototype.__proto__) //原型的__proto__属性指向Object

    // console.log(createPerson2.prototype.constructor === createPerson2)
    // console.log(createPerson2.prototype.__proto__.constructor === Object)
    // console.log(Object.prototype) 
    // console.log(Object.prototype.__proto__) //Object为顶级对象

    console.log(person2)
    console.log(typeof createPerson2)
    console.log(person2.prototype) //undefined  实例没有原型
    console.log(person2.__proto__) //__proto__  可以访问到实例继承的构造函数的原型
    console.log(person2.__proto__ === createPerson2.prototype)
}
// classAndPro()

//类  es6语法
const lei = () => {
    console.log('---------类----------')
    //类的定义
    class Persons { }
    const Animal = class { }

    //类的构成
    class Foo { }  //空类
    class Bar {   //有构造函数的类
        constructor() { }
    }
    class Qux { //有静态方法的类
        static myQux() { }
    }

    //类构造函数
    class Vegetable {
        constructor() {
            this.color = 'orange'
        }
    }

    let v = new Vegetable;
    console.log(v)

    class Person {
        constructor(bool) {
            this.foo = 'foo';
            if (bool) {
                return {
                    bar: 'bar'
                }
            }
        }
    }
    let p1 = new Person,
        p2 = new Person(true)
    // console.log(p1)
    // console.log(p1.__proto__ === Person.prototype)
    // console.log(p2)
    // console.log(p2.__proto__ === Person.prototype)

    //类是一种特殊函数
    //instanceof可以检查一个对象是不是类的实例
    console.log(typeof Person) //function
    console.log(Person.prototype.constructor === Person)
    console.log(p1 instanceof Person)

    //类继承
    // class Vehice {}
    // class Bus extends Vehice {}
    // let b = new Bus()
    // console.log('b instanceof Vehice',b instanceof Vehice)

    // class Engineer extends Person {}
    // let e = new Engineer()
    // console.log('e instanceof Person', e instanceof Person)

    class Vehice {
        constructor() {
            this.hasEngine = true
        }
    }

    class Bus extends Vehice {
        constructor() {
            super()
            console.log(this instanceof Vehice)
            console.log(this)
        }
    }

    const b = new Bus()
    console.log(b)

}
// lei()

//深拷贝、浅拷贝
const copyFn = () => {
    let desc = {
        x: 1,
        name: '小明',
        say: () => { },
        study: ['语文', '数学', '英语'],
        hobby: {
            ball: ['basketball', 'footerball'],
            sing: {
                popular: true,
                rap: false
            },
            scope: [10, 20, 30],
            running: true
        }
    }

    const shallowCopy = (o) => {
        let result = {}
        for (let i in o) {
            if (o.hasOwnProperty(i)) {
                result[i] = o[i]
            }
        }
        return result
    }

    const deepCopy = (o) => {
        let result = {}
        for (let i in o) {
            if (o.hasOwnProperty(i)) {
                if (o[i] && typeof o[i] === 'object') {
                    result[i] = deepCopy(o[i])
                } else {
                    result[i] = o[i]
                }
            }
        }
        return result
    }

    //赋值拷贝、会和源对象指向同一个对象
    let fObj = desc

    //浅拷贝、会新建一个对象、改变第一层数据不会改变原数据
    let sObj = shallowCopy(desc)

    //深拷贝
    let dObj = deepCopy(desc)

    sObj.name = '浅拷贝';
    sObj.study = ['语文'];
    sObj.hobby.running = false;
    sObj.hobby.scope = [20, 30, 40];
    dObj.hobby.scope = [10, 20];
    console.log(desc, fObj, sObj, dObj)
}
// copyFn()

//typeof,instanceof,Objiect.toString
const typeFun = () => {
    const a = () => { }
    const b = [1, 2, 3]
    const c = { x: 1 }

    //typeof  只能判断原始类型
    const Fun1 = () => {
        console.log(typeof 123)  //number
        console.log(typeof '123') //string
        console.log(typeof true) //boolean
        console.log(typeof null) //object
        console.log(typeof NaN) //number
        console.log(typeof undefined) //undefined
        console.log(typeof a) //function
        console.log(typeof b) //object
        console.log(typeof c) //object
    }

    //instanceof 是判断变量是否为某个对象的实例，返回值为true或false。不适用原始类型
    const Fun2 = () => {
        console.log(b instanceof Array, c instanceof Object)
        console.log(b.constructor === Array, c.constructor === Object)

        const s = 'hello'
        console.log(s instanceof String) //false

        //当构造函数或者实例的原型发生改变的时候，instanceof的值也会改变
        let C = () => {}
        let test = new C()
        // console.log(C.prototype.__proto__ === Object.prototype)
        // console.log(test.__proto__ === C.prototype)
        console.log(test instanceof C)
        test.__proto__ = {}
        console.log(test instanceof C)
        C.prototype = {}
        console.log(test instanceof C)
    }
    // Fun2()

    //Object.toString最精准
    const Fun3 = () => {
        console.log(a.constructor.toString())
        console.log(b.constructor.toString())
        console.log(c.constructor.toString())

        console.log(a.toString())
        console.log(b.toString())
        console.log(c.toString())

        console.log(Object.prototype.toString.call(a))
        console.log(Object.prototype.toString.call(b))
        console.log(Object.prototype.toString.call(c))
    }
    // Fun3()
}
typeFun()
