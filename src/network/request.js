import axios from 'axios';
// 封装网络模块并导出
export function request(config) {
	//1、创建axios实例
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000/*',
	})

	//2、axios的拦截器
	// 请求成功 请求失败 响应成功 响应失败 
	//2.1、请求拦截的作用 可以拦截实例,也可以拦截全局
	instance.interceptors.request.use(config => {
		// 拦截器的作用
		//1、比如cofig中的一些信息不符合服务器要求
		// 2、每次发送网络请求时，都希望在界面中显示一个请求的图标
		// 3、某些网络请求（如登录（token）），必然携带一些特殊的信息:判断用户有没有登录,如果没有可以做一些相关的提示操作
		return config 
	},err => {

	})

	// 2.2、响应拦截
	// instance.interceptors.response.use(两个参数)
	instance.interceptors.response.use(res => {
		//相应的操作
		return res.data
	},err => {
		console.log(err);
	})

	//3、发送真正的网络请求
	return instance(config)
} 

// // 发送并发请求 axios.all([数组]) 传入数组
// axios.all(axios({url: 'xxxxx'}), axios({url:'xxxx'})).then(results => {
// 	// 返回数组
// })

// 设置默认url
// axios.defaults.baseURL = 'xxxx'
// 设置超时时间
// axios.defaults.timeout = 50000

// 创建实例
// const instance1 = axios.create({
// 	baseURL: 'xxxxx'
// })

// instance1({
// 	url: 'xxxxxx'
// }).then(res => console.log(res))