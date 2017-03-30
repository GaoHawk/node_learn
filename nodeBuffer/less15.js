const buf1 = Buffer.from('this is a test')

console.log(buf1.toString());

console.log(buf1.toString('ascii'))

const buf2 = Buffer.from('7468697320697320612074c3a97374','hex')

console.log(buf2.toString());

console.log(Buffer.isBuffer(buf1))

console.log(buf1.isEncoding('ascii'))