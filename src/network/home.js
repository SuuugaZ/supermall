//Q:为什么要多一层封装
//A：把首页所有请求都放在一个文件中，方便管理

import {request} from './request';

export function getHomeMultidata() {
	return request({
		url: '/home/multidata'
	})
}

export function getHomeGoods(type,page) {
	return request({
		url: '/home/data',
		params: {
			type,
			page
		}
	})
}