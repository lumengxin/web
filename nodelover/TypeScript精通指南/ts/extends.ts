var __extends = (this && this.__extends) || function(d, b) {
    console.log(d);
    console.log(b);
    for (var p in b) {
        if (b.hasOwnProperty(p)) {
            console.log(p);
            d[p] = b[p];
        }
    }
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var a = (function() {
    function a() {
        a.sname = '1';
        return a;
    }
}());
var b = (function(_super) {
    __extends(b, _super);
    function b() {
        return _super.apply(this, arguments) || this;
    }
    return b;
}(a));