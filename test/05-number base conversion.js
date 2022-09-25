const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// 进制转换
// 转成16进制
const hex = web3.utils.toHex('123');
console.log(hex); // ox7b

// 16进制转10进制 字符串数字类型
const hexToNumberString = web3.utils.hexToNumberString('0x7b');
console.log(hexToNumberString, typeof hexToNumberString); // 123 string

// 16进制转10进制 数字类型
const hexToNumber = web3.utils.hexToNumber('0x7b');
console.log(hexToNumber, typeof hexToNumber); // 123 number

// 16进制转utf-8
const hexToUtf8 = web3.utils.hexToUtf8('0xe5bca0e4b889');
console.log(hexToUtf8); // 张三

// ascii转16进制
const asciiTohex = web3.utils.asciiToHex('abcdef');
console.log(asciiTohex); // 0x6162636465666
// 16进制转Ascii
const hexToAscii = web3.utils.hexToAscii('0x6162636465666');
console.log(hexToAscii); // abcdef

// 16进制转bytes
const hexToBytes = web3.utils.hexToBytes('0x616263ea');
console.log(hexToBytes); // [ 97, 98, 99, 234 ]

// 地址转换
// 全小写
const address1 = web3.utils.isAddress('0x1761470ae2a0a5a4f80428537d5a34e6feb2afc7');
console.log(address1); // true
// 全大写
const address2 = web3.utils.isAddress('0X1761470AE2A0A5A4F80428537D5A34E6FEB2AFC7');
console.log(address2); // true
// 去除0x
const address3 = web3.utils.isAddress('1761470AE2A0A5A4F80428537D5A34E6FEB2AFC7');
console.log(address3); // true
// 修改了一部分大小写
const address4 = web3.utils.isAddress('0x1761470aE2a0a5a4F80428537d5A34e6feb2afc7');
console.log(address4); // false