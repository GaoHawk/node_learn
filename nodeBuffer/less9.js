const str = '\u00bd + \u00bc = \u00be';

console.log(`${str}: ${str.length} 个字符,` +
        `${Buffer.byteLength(str,'utf8')}个字节`);

        
