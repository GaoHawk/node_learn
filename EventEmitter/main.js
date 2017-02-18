/*
* @Author: Administrator
* @Date:   2017-02-13 11:04:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-18 10:26:10
*/

var events = require('events')
var eventEmitter = new events.EventEmitter()

// 监听器 #1
var listener1 = function listener1() {
    console.log("监听器 listener1 执行")
}

// 监听器 #2
var listener2 = function listener2(){
   console.log("监听器listener2 执行")
}

eventEmitter.addListener('connection',listener1)

eventEmitter.on('connection',listener2)

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection')

eventEmitter.emit('connection')

eventEmitter = require('connection',listener1)
console.log("listener1 不再受监听.");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + ' 个监听器监听连接事件')

console.log("执行完毕")
