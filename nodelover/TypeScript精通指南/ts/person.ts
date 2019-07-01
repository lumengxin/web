enum Choose {
    Wife = 1,
    Mother = 2
}

function question(choose: Choose): void {
    console.log(choose);
    console.log('老婆和妈妈同时掉进水里先救哪个？');
    console.log('你的选择是：');
}

type Address = string;
type Tel = number;

// 声明变量： 
// let 变量名：类型 = 值；
// （方法）hello(): void { }


class Person {
    name: string;
    age: number;
    labels: Array<string>;
    wives: string[];
    contact: [Address, Tel];  //元组
    other: any;
    saveMother: boolean = true;
    constructor() { }
    answer(): Choose {
        if (this.saveMother === false) {
            return Choose.Wife;
        }
        return Choose.Mother;
    }
    hello(): void {
        console.log('hello,i\'m' + this.name);
    }
    empty() { }
    down(): never {
        while (true) { }
    }    
}

let z = new Person();

z.name = "张";
z.age = 23;
z.labels = ['围殴', '非我'];
z.wives = ['li', 'tao', 'gui'];
z.contact = ['zlc', 2];
z.saveMother = false;
z.other = '非人类';

let len = (<string>z.other).length;  //类型断言（强转）
//let len = (z.other as string).length;
console.log(len);

question(z.answer());

z.hello();
console.log(z.empty());

// 变量解构
let [a, b] = [2, 7];
console.log(a, b);

let [A, ...x] = [1,4,2,5,3];
console.log("OUTPUT: A", A);
console.log("OUTPUT: x", x);

let {a:x, ...b} = {a: 'string a', b: 'string b', c: 'string c'}
console.log("OUTPUT: b", b);
console.log("OUTPUT: x", x);
