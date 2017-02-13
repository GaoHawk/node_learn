/*
* @Author: Administrator
* @Date:   2017-02-10 17:46:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-10 17:51:12
*/

var http = require('http');

http.createServer(function (request, response){


      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Hello World\n');
}).listen(8888);

//终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
