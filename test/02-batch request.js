const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const batch = new web3.BatchRequest();


const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "setNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contractAddress = '0xC1F8971e9273388BFfa2033c42E5F0e399Cf7694';
const userAddress = '0x1761470aE2a0a5a4F80428537d5A34e6feb2afc7';
const contract = new web3.eth.Contract(ABI, contractAddress);

// 将请求对象添加到批调用中
// 查看用户的账户余额
batch.add(web3.eth.getBalance.request(contractAddress, 'latest', (error, result) => {
    console.log(error, result);
}));
// 调取合约的getNumber方法
batch.add(contract.methods.getNumber().call.request({ from: userAddress }, (error, result) => {
    console.log(error, result);
}));

// 将执行批处理请求
batch.execute()