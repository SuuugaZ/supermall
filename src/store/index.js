import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from "./getters";

//1.安装插件
Vue.use(Vuex)

// 2.创建store对象
const store = new Vuex.Store({
	//state 存放需要vuex保管的对象
	state: {
		cartList: [] 
	},
	mutations,
	actions,
	getters
})

// 导出store对象
export default store

// 挂载到vue实例上