/*
* @Author: Administrator
* @Date:   2017-03-22 17:04:51
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-22 17:08:25
*/

const assert = require('assert');


const obj1 = {
   a :{
     b :1
   }
};

const obj2 = {
   a:{
     b:2
   }
}

const obj3= {
   a:{
      b:1
   }
}
const obj4 = Object.create(obj1)

// assert.notDeepEqual(obj1,obj1);

assert.notDeepEqual(obj1,obj2);

assert.notDeepEqual(obj1,obj4);

assert.notDeepEqual(obj1,obj3)
