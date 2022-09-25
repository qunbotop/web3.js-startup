const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// 查询当前区块高度
web3.eth.getBlockNumber().then(console.log) // 4

/**
 * getBlock 
 * blockHashOrBlockNumber： 区块编号、hash值、类型
 *      - 区块号 
 *      - 区块hash值 BLOCK HASH
 *      - 字符串：earliest创世区块、latest最新区块、pending当前开采区块
 * returnTransactionObjects：是否返回transaction信息 
 *      - true返回详细交易信息
 *      - false不返回交易信息 只有区块信息
 */
web3.eth.getBlock('latest', true, function(error, result) {
    console.log(result);
}); // [Object]

// 返回指定地址发出的交易数量 number
web3.eth.getBlockTransactionCount('latest', function(error, result) {
    console.log(result);
});

// 返回指定地址发出的交易信息 [Object]
/**
 * 1. 区块号、hash、关键字
 * 2. 序号indexNumber 区块中交易的索引，索引从0开始
 */
web3.eth.getTransactionFromBlock('latest', 0, function(error, result) {
    console.log(result);
});