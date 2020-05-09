import { 
	ADD_COUNT,
	ADD_PRODUCT
 } from "./mutation-types";

export default {
	// actions不仅可以包含任意异步操作，也可以处理复杂逻辑判断
	addCart({state, commit}, payload) {
		//查找数组中是否有该商品
		// 判断在数组中是否含有和要新添加的元素相同的元素,如果有，返回这个元素（oldProduct = currentValue)，如果没有,oldProduct = undefined
		// let oldProduct = state.cartList.find(item => item.id === payload.id)

		// if(oldProduct) {
		// 	commit(ADD_COUNT, oldProduct)
		// }
		// else {
			//payload为Detail传过来的product
		// 	payload.count = 1 
		// 	payload.check = true
		// 	commit(ADD_PRODUCT, payload)
		// }


		// action方法可以返回一个promise
		return new Promise((resolve, reject) => {
			const oldProduct = state.cartList.find(item => item.id === payload.id)
			if(oldProduct) {
				commit(ADD_COUNT, oldProduct)
				resolve('商品数量+1')
			} else {
				payload.count = 1
				payload.check = true
				commit(ADD_PRODUCT, payload)
				resolve('商品已添加')
			}
		})
	}
}