/*
* @Author: Administrator
* @Date:   2017-02-18 11:01:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-18 11:03:05
*/

var buffer1 = new Buffer('菜鸟教程')
var buffer2 = new Buffer('www.runoob.com')
var buffer3 = Buffer.concat([buffer1,buffer2])
console.log('buffer3的内容是: ' + buffer3.toString())
