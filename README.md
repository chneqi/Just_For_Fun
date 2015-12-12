# Just For Fun
1. callby.js

========
#### callby.js
Add methods **callby** and **applyby** to Object.prototype
```javascript
// function call
func(arg_1, arg_2, ...arg_x)

// function call with method callby
arg_1.callby(func, arg_2, ...arg_x)

// function call with method applyby,
// [arg_1, arg_2, ...] could be a array-like object. e.g. arguments
[arg_1, arg_2, ...].applyby(func, ...arg_x) 


/* with callby you can chain the code and avoid nested parentheses */
// example
console.log(parseInt('12450')); // output: 12450
// with callby 
'12450'.callby(parseInt).callby(console.log); //output: 12450
// more
Object.prototype['->']=Object.prototype.callby;
'12450'['->'](parseInt)['->'](console.log); // 12450
```
