const arr = new Uint16Array(20);
const buf = Buffer.from(arr.buffer, 0, 16);

// 输出: 16
console.log(buf.length);