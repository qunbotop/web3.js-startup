// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract MyContract {
    // 状态变量
    string storageValue;
    // public的状态变量
    string public name;
    // 构造函数
    constructor(){
        name = "list";
        storageValue = "some message";
    }
    // 结构体
    struct Student {
        string name;
        int age;
    }
    // 修改状态变量
    function setStorageValue(string memory str) public {
        storageValue = str;
    }
    function getStorageValue() public view returns(string memory) {
        return storageValue;
    }
    // 可以发币的函数
    function setMoney() public payable {}
    // 事件
    event myEvent(string name);

    function emitEvent(string memory _name) public returns(string memory) {
        emit myEvent(_name);
        return strConcat("hello", _name);
    }
    // 字符串转换
    function strConcat(string memory _a, string memory _b) internal pure returns (string memory) {
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        string memory ret = new string(_ba.length + _bb.length);
        bytes memory bret = bytes(ret);
        uint k = 0;
        for(uint i = 0; i < _ba.length; i++) bret[k++] = _ba[i];
        for(uint i = 0; i < _bb.length; i++) bret[k++] = _bb[i];
        return string(ret);
    }
}