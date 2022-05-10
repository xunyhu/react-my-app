//函数声明
function sum(x: number, y: number): number {
    return x + y;
}

//函数表达式
let mySum = function (x: number, y: number): number {
    return x + y;
};
/**
 * 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 `mySum`，
 * 是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 `mySum` 添加类型，则应该是这样：
 */
 let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};


//用接口定义函数类型
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1
}


//可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

//参数默认值
function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}

//重载
