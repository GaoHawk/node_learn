const buf1 = Buffer.from('buffer')
const buf2 = Buffer.from(buf1)

buf1[0] = 0x61;

console.log(buf1.toString())

console.log(buf2.toString())

