const Web3 = require('web3');



const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// // web3子模块
// console.log(Web3.modules);

// // 连接的网络信息
// web3.eth.getNodeInfo().then(console.log);

// // web3 eth网络是否在监听 // true
// web3.eth.net.isListening().then(console.log)

// // web3 whisper网络是否在监听 // true
// web3.ssh.net.isListening().then(console.log);

// // 当前网络network id
// web3.eth.net.getId().then(console.log);
// web3.shh.net.getId().then(console.log);

// // 返回节点的以太坊协议版本
// web3.eth.getProtocolVersion().then(console.log)

// // 返回当前节点上已经连接的其他节点数量
// web3.eth.net.getPeerCount().then(console.log);

// // Provider
// // 查询当前有效的通信服务提供器
// console.log(web3.providers);
// console.log(web3.eth.providers);
// console.log(web3.shh.providers);

// // 查询当前正在使用provider，没使用返回null
// console.log(web3.currentProvider);
// console.log(web3.eth.currentProvider);
// console.log(web3.shh.currentProvider);

// // 查看浏览器环境设置的web3 Provider
// console.log(web3.givenProvider);
// console.log(web3.eth.givenProvider);
// console.log(web3.shh.givenProvider);

// // 设置修改web3 Provider
// // const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
// // web3.setProvider(new Web3.providers.HttpProvider('http://192.168.1.1:7545'))
// console.log(web3.setProvider(myProvider));
// console.log(web3.eth.setProvider(myProvider));
// console.log(web3.shh.setProvider(myProvider));
