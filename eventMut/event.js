/*
* @Author: Administrator
* @Date:   2017-02-13 14:05:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-13 14:07:57
*/

'use strict';
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
   console.log('listener1',arg1,arg2);
} );
emitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});
emitter.emit('someEvent','arg1 参数','arg2 参数')
