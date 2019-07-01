var Choose;
(function (Choose) {
    Choose[Choose["Wife"] = 1] = "Wife";
    Choose[Choose["Mother"] = 2] = "Mother";
})(Choose || (Choose = {}));
function question(choose) {
    console.log(choose);
    console.log('老婆和妈妈同时掉进水里先救哪个？');
    console.log('你的选择是：');
}
var Person = /** @class */ (function () {
    function Person() {
        this.saveMother = true;
    }
    Person.prototype.answer = function () {
        if (this.saveMother === false) {
            return Choose.Wife;
        }
        return Choose.Mother;
    };
    Person.prototype.hello = function () {
        console.log('hello,i\'m' + this.name);
    };
    Person.prototype.empty = function () { };
    Person.prototype.down = function () {
        while (true) { }
    };
    return Person;
}());
var z = new Person();
z.name = "张";
z.age = 23;
z.labels = ['围殴', '非我'];
z.wives = ['li', 'tao', 'gui'];
z.contact = ['zlc', 2];
z.saveMother = false;
z.other = '非人类';
var len = z.other.length; //类型断言
console.log(len);
question(z.answer());
z.hello();
console.log(z.empty());
