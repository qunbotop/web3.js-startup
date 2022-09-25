const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// 将wei单位转成其他单位
const ether = web3.utils.fromWei('1', 'ether');   // 一个标准ETH  18次方
const finney = web3.utils.fromWei('1', 'finney');
const gigawei = web3.utils.fromWei('1', 'shannon'); // Gwei 计算gas 9次方
console.log(ether);
console.log(finney);
console.log(gigawei);

// 将其他单位金额转成wei单位
const ether1 = web3.utils.toWei('1', 'ether');   // 一个标准ETH  18次方
const finney1 = web3.utils.toWei('1', 'finney');
const gigawei1 = web3.utils.toWei('1', 'shannon'); // Gwei 计算gas 9次方
console.log(ether1);
console.log(finney1);
console.log(gigawei1);

/**
 *  "noether": "0",
    "wei": "1",
    "kwei": "1000",
    "Kwei": "1000",
    "babbage": "1000",
    "femtoether": "1000",
    "mwei": "1000000",
    "Mwei": "1000000",
    "lovelace": "1000000",
    "picoether": "1000000",
    "gwei": "1000000000",
    "Gwei": "1000000000",
    "shannon": "1000000000",
    "nanoether": "1000000000",
    "nano": "1000000000",
    "szabo": "1000000000000",
    "microether": "1000000000000",
    "micro": "1000000000000",
    "finney": "1000000000000000",
    "milliether": "1000000000000000",
    "milli": "1000000000000000",
    "ether": "1000000000000000000",
    "kether": "1000000000000000000000",
    "grand": "1000000000000000000000",
    "mether": "1000000000000000000000000",
    "gether": "1000000000000000000000000000",
    "tether": "1000000000000000000000000000000"
 */

