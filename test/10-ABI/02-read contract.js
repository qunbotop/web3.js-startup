const Web3 = require('web3');
const fs = require('fs');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
// 获取合约的ABI文件
const myContractABI = JSON.parse(fs.readFileSync(`${__dirname}/myContract.abi`).toString());
const myContractAddress = "0x861172C8665D0657B86631B83A3a58e0FB452C54";
const myContract = new web3.eth.Contract(myContractABI, myContractAddress);
// 合约读函数
myContract.methods.getStorageValue().call((err, res) => {
    console.log(res); // 当前的值some message
})
// 合约写函数
/**
 * 调用写函数相当于发送了交易
 * 返回结果的触发条件
 * transactionHash: 返回string，发送交易得到交易哈希后立即触发
 * receipt: 返回Object，当收到交易收据时触发
 * confirmation: 返回number、object
 * error: 返回error和object
 */
myContract.methods.setStorageValue("list")
.send({ from: '0x082f86d84938583ce4501F59Dc5Dd4675648fD2A' })
.on('receipt', function(result) {
    console.log(result); // hash
    myContract.methods.getStorageValue().call((err, res) => {
        console.log(res); // list
    })
})