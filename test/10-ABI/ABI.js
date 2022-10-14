/**
 * ABI 智能合约暴露出来的标准接口，通过这个接口
 * 就可以将智能合约转换成应用对象中的对象实例，
 * 通过这个实例就可以和智能合约交互了
 * 
 * ABI是以JSON的形式表示
 */


/**
 * ABI表现形式举例
 * 
 * 函数(functions)
 * type: 函数的类型，默认为function也有constructor构造函数
 * stateMutability: 函数状态可变性，可以是payable、nonpayable、view、pure
 * inputs、outputs: 函数输入、输出的参数描述列表
 * name: 函数名称
 * 
 * 
 * 事件(events)
 * type: 类型，总是event
 * inputs: 输入对象列表，包括name、type、indexed
 * anonymous: 是否为匿名的
 */