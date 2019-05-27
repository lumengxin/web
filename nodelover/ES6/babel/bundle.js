"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Expression bobies
var evens = [13, 2];

var odds = evens.map(function (v) {
    return v + 1;
});
var nums = evens.map(function (v, i) {
    return v + i;
});

//Statement bodies
nums.forEach(function (v) {
    console.log(undefined);
    if (v % 5 === 0) fives.push(v);
});

//

var B = function B() {
    _classCallCheck(this, B);

    this.email = "xxx";
};

var A = function (_B) {
    _inherits(A, _B);

    function A() {
        _classCallCheck(this, A);

        //调用父类的constructor
        var _this = _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this));

        _this.name = "some";
        return _this;
    }

    _createClass(A, [{
        key: "say",
        value: function say() {
            console.log(this.name);
        }
    }]);

    return A;
}(B);

// var a = 'name';
// var obj = {
//     //a: a,
//     a  //es6写法 等同上一条
// };

//模板字符串


var str = "afjioejfji var some aa funciton " + a;
console.log(str);

//结构
var arr = [1, 2, 3];
var a = arr[0],
    b = arr[1],
    c = arr[2];

console.log(a);
console.log(b);
console.log(c);

var obj2 = { name: 'xin', email: 'xin@qq.com' };
var username = obj2.name,
    email = obj2.email;

//

function r(_ref) {
    var x = _ref.x,
        y = _ref.y,
        _ref$w = _ref.w,
        w = _ref$w === undefined ? 10 : _ref$w,
        _ref$h = _ref.h,
        h = _ref$h === undefined ? 10 : _ref$h;

    return x + y + w + h;
}
r({ x: 1, y: 2 }) === 23;

//...运算符
function some11111() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
    }

    console.log(arguments);
    console.log(arr);
}

function f(x, y, z) {
    return x + y + z;
}
//Pass each elem of array as argument
f.apply(undefined, [1, 2, 3]) == 6;

//let+const
//let作用域
// {
//     let sfeifojioad = "ifoj"
// }

// const a = 20;
// a = 10;  //常量不可改

// console.log(sfeifojioad)

//Iterator + for..of 迭代器
var fib = _defineProperty({}, Symbol.iterator, function () {
    //斐波拉契数
    var pre = 0,
        cur = 1;
    return {
        next: function next() {
            var _ref2 = [cur, pre + cur];
            pre = _ref2[0];
            cur = _ref2[1];

            return { done: false, value: cur };
        }
    };
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = fib[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        if (n > 1000) break;
        console.log(n);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
