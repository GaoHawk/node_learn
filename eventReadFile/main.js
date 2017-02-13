/*
* @Author: Administrator
* @Date:   2017-02-13 10:25:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-13 10:56:08
*/

'use strict';
var fs = require('fs');
fs.readFile('input.txt',function(err,data){
   if(err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log('程序执行完毕');
