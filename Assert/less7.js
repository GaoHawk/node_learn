/*
* @Author: Administrator
* @Date:   2017-03-22 17:16:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-22 17:18:15
*/

'use strict';
const assert = require('assert');

assert.notDeepEqual({a:1},{a:'1'})

assert.notDeepStrictEqual({a:1},{a:'1'})
