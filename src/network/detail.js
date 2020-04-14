import {request} from './request'

export function getDetail(iid) {
	return request({
		url: '/detail',
		params: {
			iid //params就是跟在地址后的参数
		}
	})
}

export class GoodsInfo {
	constructor(itemInfo, columns, services) {
		//要传入的参数 res.result.itemInfo res.result.columns res.result.services 
		this.title = itemInfo.title
		this.desc= itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
	}
}

export class ShopInfo {
	constructor(ShopInfo) {
		//要传入的参数 res.result.shopInfo
		this.logo = ShopInfo.shopLogo
		this.name = ShopInfo.name
		this.fans = ShopInfo.cFans
		this.sells = ShopInfo.cSells
		this.score = ShopInfo.score
		this.goodsCount = ShopInfo.cGoods
	}
}

export class ItemParams {
	constructor(info, rule) {
		this.image = info.image ? info.image[0]: ''
		this.productInfo = info.set 
		this.rule = rule.tables[0]
	}
}

export function getRecommend() {
	return request({
		url: 'recommend'
	})
}