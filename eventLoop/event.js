/*
* @Author: Administrator
* @Date:   2017-02-13 11:16:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-13 13:58:16
*/

'use strict';
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event',function(){
     console.log('some_event 事件触发')
});

setTimeout(function() {
    event.emit('some_event');
},1000)


