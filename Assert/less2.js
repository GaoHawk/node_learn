/*
* @Author: Administrator
* @Date:   2017-03-22 16:45:04
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-22 16:52:14
*/

'use strict';
const assert = require('assert')

// assert.deepEqual({a:1},{a:'1'})

// assert.deepStrictEqual({a:1},{a:'1'})

assert.doesNotThrow(
   () => {
     throw new TypeError('错误');
   },
   TypeError,
   '抛出错误'
  );
