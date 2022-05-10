// 类型 + 方括号 表示法
let fibonacci: number[] = [1, 2, 3, 4, 5];

//数组泛型
let fibonacci2: Array<number> = [1,2,3,4,5]

//用接口描述数组
//虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
//不过有一种情况例外，那就是它常用来表示类数组。
// interface NumberArray {  //只要索引的类型是数字时，那么值的类型必须是数字
//     [index: number]: number
// }
// let fibonacci3: NumberArray = [1,2,3,4,5]

//类数组
// function sum() {
//     let args: {
//         [index: number]: number;
//         length: number;
//         callee: Function
//     } = arguments;
// }

//any在数组中的应用