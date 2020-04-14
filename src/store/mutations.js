import { 
	ADD_COUNT,
	ADD_PRODUCT
 } from "./mutation-types";

export default {
	//在mutation中定义函数，函数里写操作方法 
	//默认参数 1、state 2、payload（需要传递的参数,payload也可以是一个对象） 
	[ADD_COUNT](state, payload) {
		payload.count +=1
	},
	[ADD_PRODUCT](state, payload) {
		state.cartList.push(payload)
	}
}