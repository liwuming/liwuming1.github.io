
es6，是在2015年新发布的一个重磅ecmascript版本



由于当前多数浏览器并不支持es6语法，因此在编写es6程序时，需要使用babel进行转码翻译成es5语法，

es6函数的改动
promise，let，箭头函数，

关于变量，let,const
关于函数，支持箭头函数，函数支持默认值
支持promise，

> promise是什么，用于表示一个异步操作的最终完成(成功或失败)及其结果值







# 1. 关于变量的定义
在es6中，新增了两块级作用域的定义方式，let,const
let，用于定义变量，const用于定义常量

1、作用域，局部，
> 当全局范围使用let定义变量时，不会挂载在window上

2、不能重复定义

3、不存在变量提升，也就是说let定义的变量，必须先定义后使用

> 所谓变量提升，是指变量可以在声明之前使用，值为undefined





在es5中只有两种作用域，全局和函数，没有块级作用域，因此代码会出错
```js
var num=11;
if(num==10){
    function hello(){
        console.log('hello a');
    }
}else{
    function hello(){
        console.log('hello b');
    }
}
hello();
```
在es6中，新增了块级作用域，以上代码可以正常运行

