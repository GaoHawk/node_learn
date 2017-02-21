/*
* @Author: Administrator
* @Date:   2017-02-20 10:42:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-20 10:54:28
*/

'use strict';
const has = p => o => o.hasOwnProperty(p);
const sortBy = p => (a,b) => a[p] > b[p];

let result;
let users = [
   { name:'Qian',age:27,pets:['Bao'],title:'Consultant' },
   { name:'Zeynep',age:19,pets:['Civelek','Muazzam']},
   { name:'Yael',age:52,title:'VP of Engineering'}
];

result = users
    .filter(has('pets'))
    .sort(sortBy('age'));
console.log(result);
