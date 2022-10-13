const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// // 返回当前节点控制的账户列表
// web3.eth.getAccounts().then(console.log)

// // 创建一个新账户 参数为密码
// web3.eth.personal.newAccount('password123').then(console.log)
// web3.eth.getAccounts().then(console.log)

// // 查询coinbase 获取当前接收挖矿奖励的账户地址
// // 是否正在挖空, 仿真以太网一般默认第一个账户在挖矿
// web3.eth.isMining().then(console.log); // true
// // 查询当前获得coinbase的账户地址
// web3.eth.getCoinbase().then(console.log); // 返回地址