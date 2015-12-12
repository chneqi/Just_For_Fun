# Just For Fun
记录一些有趣的东西

1. callby.js

========
#### callby.js
Add methods **callby** and **applyby** to Object.prototype

为Object原型添加**callby** 和 **applyby**方法
```javascript
// function call | 函数调用
func(arg1, arg2, ...argx)

// function call with method callby | 使用callby方法进行函数调用
arg1.callby(func, arg2, ...argx)

// function call with method applyby | 使用applyby方法进行函数调用
// [arg1, arg2, ...] could be a array-like object. e.g. arguments | 可以使用类数组对象
[arg1, arg2, ...].applyby(func, ...argx) 


/* with callby you can chain the code and avoid nested parentheses
 * 至于这玩意有什么卵用呢。这样能减少括号嵌套，强行写链式的代码 */
// example | 举个栗子
console.log(parseInt('12450')); // output: 12450
// with callby 
'12450'.callby(parseInt).callby(console.log); // output: 12450

/* the two method will change context | 顺便这两个函数会改变函数内this的指向 */
var say = function(unuse,sth){
    console.log(this.name+':"'+sth+'"');
};
var dog = { name:'dog' };
dog.callby(say,'12'); // output: dog:"12"

// more | 以及这样写也挺好玩的
Object.prototype['->']=Object.prototype.callby;
'12450'['->'](parseInt)['->'](console.log); // output: 12450
```
