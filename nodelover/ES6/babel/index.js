//Expression bobies
var evens = [13,2];

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

//Statement bodies
nums.forEach(v => {
    console.log(this)
    if(v % 5 === 0)
        fives.push(v);
});

//
class B {
    constructor() {
        this.email = "xxx";
    }
}

class A extends B {
    constructor() {
        super();  //调用父类的constructor
        this.name = "some";
    }

    say() {
        console.log(this.name)
    }
}

// var a = 'name';
// var obj = {
//     //a: a,
//     a  //es6写法 等同上一条
// };

//模板字符串
const str = `afjioejfji var some aa funciton ${a}`;
console.log(str);

//解构
let arr = [1,2,3];
let [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);

let obj2 = { name: 'xin', email: 'xin@qq.com'};
let { name: username, email } = obj2;

//
function r({x, y, w = 10, h = 10}) {
    return x + y + w + h;
}
r({x: 1, y: 2}) === 23

//...运算符
function some11111(...arr) {
    console.log(arguments)
    console.log(arr);
}

function f(x, y, z) {
    return x + y + z;
}
//Pass each elem of array as argument
f(...[1,2,3]) == 6;


//let+const
//let作用域
// {
//     let sfeifojioad = "ifoj"
// }

// const a = 20;
// a = 10;  //常量不可改

// console.log(sfeifojioad)

//Iterator + for..of 迭代器
let fib = {
    [Symbol.iterator]() {  //斐波拉契数
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { done: false, value: cur}
            }
        }
    }
}
for(var n of fib) {
    if(n > 1000)
        break;
    console.log(n);
}


//代理
var target = {};
var handler = {
    get: function(receiver, name) {
        console.log(receiver);
        return `Hello, ${name}!`;
    }
};
var p = new Proxy(target, handler);
p.world === "Hello,world";
