/*
* @Author: Administrator
* @Date:   2017-02-18 11:05:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-18 11:09:21
*/

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD')
var result = buffer1.compare(buffer2)

if(result<0){
    console.log(buffer1 + ' 在 ' + buffer2 + " 之前 ")
}else if(result == 0){
   console.log(buffer1+' 与 ' + buffer2 + "相同" )
}else {
   console.log(buffer1 + " 在 " + buffer2 + " 之后 ")
}
