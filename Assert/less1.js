/*
* @Author: Administrator
* @Date:   2017-03-22 16:40:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-22 16:43:23
*/

'use strict';
const assert = require('assert');

const obj1 = {
   a: {
     b:1
   }
}

const obj2 = {
   a: {
     b:2
   }
};

const obj3 = {
   a: {
     b:1
   }
}

const obj4 = Object.create(obj1);

assert.deepEqual(obj1,obj1)

// assert.deepEqual(obj1,obj2);

assert.deepEqual(obj1,obj3)

assert.deepEqual(obj1,obj4)
