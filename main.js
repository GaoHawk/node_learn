/*
* @Author: Administrator
* @Date:   2017-02-10 18:13:01
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-10 18:14:13
*/
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束！");
