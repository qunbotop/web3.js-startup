let Web3 = require('web3');
const bigNumber = require('bignumber.js');

web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
// 浮点数精度20位
const a = new bigNumber("1234567890123456789012345678901.123456789012345678901");
// 十进制
console.log(a.toString(10));

// 检查是否是一个大数
const res1 = web3.utils.isBigNumber(a);
const res2 = web3.utils.isBigNumber(1);
console.log(res1, res2); // true false