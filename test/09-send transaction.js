// 发送交易
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// // 1. 发送交易
// // 交易信息body
// const transactionBody = {
//     // 发送地址
//     from: '0x1761470aE2a0a5a4F80428537d5A34e6feb2afc7',
//     // 接收地址
//     to: '0x2031a839435922C4fBE416B54ff0cA567F41b28a',
//     // 发送数量
//     value: web3.utils.toWei('1', 'ether'),
//     data: ''
// }

// // 发起交易
// web3.eth.sendTransaction(transactionBody, function(error, result) {
//     // transactionHash
//     console.log(result);
//     // 交易区块信息
// }).then(console.log);


// // 2. 查询交易信息
// // 返回具有指定哈希值的交易对象
// const transactionHash = '0x8016573a47f537f8a46aa50bf62d4bc42cbd9b204aed5fc001bef667498e64a8'
// web3.eth.getTransaction(transactionHash).then(console.log)
/**
 * {      
        // 32字节的交易hash          
        hash: '0x8016573a47f537f8a46aa50bf62d4bc42cbd9b204aed5fc001bef667498e64a8',     
        // 发送人在此之前进行的交易次数
        nonce: 4,
        // 32字节，该交易所在的区块hash，打包中为null
        blockHash: '0x9953c1f780d27f35edf51d25ccb382936cf064fd94ac80404ea764049d152b93',
        // 该交易所在区块的区块号，打包中为null
        blockNumber: 7,
        // 该交易在区块中的位置索引，打包中为null
        transactionIndex: 0,
        // 发送人地址
        from: '0x1761470aE2a0a5a4F80428537d5A34e6feb2afc7',
        // 接收人地址
        to: '0x2031a839435922C4fBE416B54ff0cA567F41b28a',
        // 发送数量
        value: '1000000000000000000',
        // 由发送人指定的gas数量
        gas: 90000,
        // 由发送人指定的gas价格，以wei为单位
        gasPrice: '20000000000',
        // 伴随交易发送的数据
        input: '0x',
        v: '0x25',
        r: '0x8c32f84da498b9a245016f6469a1a14de22284a351fb9a29707f18e0343a0a96',        
        s: '0x4100c0a305a0a9c3b4d7bd512b531004a28c78bffa62e492c12708023cdf1721'
    }
 */


// // 3. 查询交易收据（进区块数据）
// const transactionHash1 = '0x8016573a47f537f8a46aa50bf62d4bc42cbd9b204aed5fc001bef667498e64a8'
// web3.eth.getTransactionReceipt(transactionHash1).then(console.log)