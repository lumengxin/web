// 函数声明(两种写法)
let func1 = function () {
    console.log('func1');  // 变量形式保存函数
}

function func2() {
    console.log('func2');  // 拥有具体函数名
}

let func3 = function func4() {
    console.log('func3 and func4');
}

//console.log(func3 === func4);

// es6 箭头函数
let add1 = (x, y) => x + y;
console.log("OUTPUT: add1", add1(3, 5));
let add2 = (x, y) => { return x * y };
console.log("OUTPUT: add2", add2(3, 5));


interface Add {
    (x: number, y: number): number;  // ()代表函数
}

let add3 : Add;
add3 = function add4(x: number, y:number) : number {
    return x + y;   // add4可省
}
console.log(add3(9,4));

// 泛型
function one<T>(a: T): T {
    return a;
}
let a1 = one<number>(1);
let a2 = one(89);

/* interface some {
    <T>(a: T[]) : T
} */
let two: <T>(a: T[]) => T = function(a) {
    return a[1];
}
two([1,2,'s']);

class Person<T, U> {
    other: T
    age: U
}
let p = new Person<string, number>();

interface hasLength {
    length: number;
}
function func<T extends hasLength>(arg: T): T {
    return arg;
}
func([12,3,2]);

