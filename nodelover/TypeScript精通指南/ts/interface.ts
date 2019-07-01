// 接口
interface pointer {
    x: number;
    y?: number;   // 可以不传 y 的值
}

function somefun({x = 0, y = 0} : pointer = {x: 2, y: 4}) {
    console.log("OUTPUT: somefun -> y", y);
    console.log("OUTPUT: somefun -> x", x);
}

somefun();


interface Db {
    host: string ;   
    port: number;
    connect(password: string, username?: string): void;
}

class MySQL implements Db {
    readonly host: any = "127.0.0.1:5500";  // host字段只可读，不能修改
    port: any;
    constructor () {
        // readonly只能在构造函数修改
        this.host = "12.32.145.1";
    }
    connect(password: string, uname: string): void {

    }
}

let server = new MySQL();
console.log(server.host);
