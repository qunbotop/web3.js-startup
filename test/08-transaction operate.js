// 交易相关的操作
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// // 查询当前账户的余额
// web3.eth.getBalance('0x1761470aE2a0a5a4F80428537d5A34e6feb2afc7', (error, result) => {
//     const balance = result.toString();
//     // 默认单位为wei
//     console.log(balance); // 99994972920000000000
//     // 使用工具函数转化成ether单位
//     console.log(web3.utils.fromWei(balance, "ether")); // 99.99497292
// })

// // 查询评价gas价格
// web3.eth.getGasPrice().then(res => {
//     // 默认wei
//     console.log(res);
//     // 使用工具函数转化成ether单位
//     console.log(web3.utils.fromWei(res, "ether"));
// })