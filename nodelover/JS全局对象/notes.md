                      js全局对象
(http://www.runoob.com/jsref/dom-obj-document.html / MDN)
1.Document
    document.images;  //返回当前页面所有图片
    / Array.from(document.images);
    document.title = '123'; //动态修改
    document.cookie; 

2.Style
    .style 修改样式

3.Event
    事件。onclick ...

4.全局对象
    window:代表当前窗口
     document; => window.document;
     window.a = '123'; a; //123
     window.open("https://baidu.com");
    navigator:用户信息
    screen:屏幕
    location
    localStorage
    window.print()

5.字符串
    Math:
     Math.random();
     Math.round(Math.random() * 10);
    RegExp:
    String:
     `a and b`.match(/\b\w/igm);
     "str".charAt(2);
     "a".concat("b");  //拼接，字数串、数组
     "fiefj".substr(3); 
     "aaacc".replace(/c*/ig, 'a');
     "abcd".slice(1,3);

6.数组
    ["1","2"].toString();

github: /MiYogurt/web-advanced-practice