//类型断言
/**
 * 语法：
 *   值 as 类型
 *   <类型>值
 */

//将一个联合类型断言为其中一个类型
interface Cat {
    name: string;
    run(): void
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    // if (typeof animal.swim === 'function')
    if (typeof (animal as Fish).swim === 'function') {
        return true
    }
    return false
}


//将一个父类断言为更加具体的子类
class ApiError extends Error {
    code: number = 0;
}

class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}


// 将任何一个类型断言为 `any`


// 将 `any` 断言为一个具体的类型

// 