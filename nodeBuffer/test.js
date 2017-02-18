/*
* @Author: Administrator
* @Date:   2017-02-18 10:36:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-18 10:37:21
*/

buf = new Buffer(256)
len = buf.write('www.runoob.com')

console.log("写入字节数 : " + len);
