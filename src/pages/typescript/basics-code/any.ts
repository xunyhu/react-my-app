//any类型允许被赋值为任意类型
let myFavoriteNumbet: any = 'seven'
myFavoriteNumbet = 7

//任意值的属性和方法
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');


//声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值

//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型