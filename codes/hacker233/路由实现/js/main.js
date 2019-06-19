(function() {
    var Router = function () {
        this.routes = {}; //保存路由
        this.curUrl = ''; //获取当前的hash值
    }
    Router.prototype.init = function () {
        //hashchange事件,当hash变化时,调用reloadPage方法
        //第一个this指向window,bind里面的this指向调用这个函数的对象
        window.addEventListener('hashchange', this.reloadPage.bind(this));
    }

    Router.prototype.reloadPage = function () {
        this.curUrl = location.hash.substring(1) || '/';  //获取当前的hash值(去掉#)
        this.routes[this.curUrl](); //运行当前的hash值对应的函数
    }

    Router.prototype.map = function (key, callback) {  //保存路由对应的函数
        this.routes[key] = callback; //key表示hash值,callback表示当前hash对应函数
    }
    window.oRou = Router;
})()

var oRouter2 = new oRou();   //new一个oRou对象
oRouter2.init();  //调用里面的初始化函数,初始化hashchange事件函数
oRouter2.map('/', function () {   //调用map函数,传入两个参数,路由和回调函数
    var oSidebar = document.querySelector("sidebar");
    oSidebar.innerHTML = '我是主页';
})

oRouter2.map('/html', function () {   //调用map函数,传入两个参数,路由和回调函数
    var oSidebar = document.querySelector("sidebar");
    oSidebar.innerHTML = '我是html页面';
})

oRouter2.map('/css', function () {   //调用map函数,传入两个参数,路由和回调函数
    var oSidebar = document.querySelector("sidebar");
    oSidebar.innerHTML = '我是css页面';
})

oRouter2.map('/javascript', function () {   //调用map函数,传入两个参数,路由和回调函数
    var oSidebar = document.querySelector("sidebar");
    oSidebar.innerHTML = '我是js页面';
})

