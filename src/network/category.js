import { request } from './request'

export function getCategoryTitle() {
	return request({
		url: '/category'
	})
}

export function getCategoryContent(maitKey) {
	return request({
		url: '/subcategory',
		params: {
			maitKey
		}
	})
}