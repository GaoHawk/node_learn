const arr = new Uint16Array(2)

arr[0] = 5000;
arr[1] = 4000;

const buf = Buffer.from(arr.buffer)

console.log(buf)

arr[1] = 6000;

console.log(buf)

const ab = new ArrayBuffer(10)
const buf1 = Buffer.from(ab,0,2);

console.log(buf1.length);