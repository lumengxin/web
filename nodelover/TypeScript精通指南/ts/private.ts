class Dad {
    protected surname;
    private money;
    public others;
    default_something;
    constructor() {}
}

class son extends Dad {
    constructor() {
        super()
    }
}

let d = new Dad();
d.others = "23";
d.default_something = "laoli";
console.log("OUTPUT: d.others", d.others);


let s = new son();
console.log(s);

// 可选属性
interface Person2 {
    readonly idCard: string;
    name?: string;   
    [index: string]: string | number;
}

let person: Person2 = {
    idCard: '2344543324',
    0: 20,  // 0 -> string [index]
    age: 32 // string/number
}
console.log("OUTPUT: person", person);

// 接口描述函数
//type Db = string;
interface InitFunc {
    (options: Db) : string;
}
let myFunc : InitFunc = function (opts: Db) {
    return '';
}

