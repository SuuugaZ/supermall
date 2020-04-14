<template>
	<div class="goodsInfo" v-if="Object.keys(goods).length !== 0">
		<div class="title">
			{{goods.title}}
		</div>
		<div class="price">
			<span class="nowPrice">{{goods.newPrice}}</span>
			<span class="oldPrice">{{goods.oldPrice}}</span>
			<span v-if="goods.discount" class="discount">{{goods.discount}}</span>
			<!-- price的伪元素 活动价 -->
		</div>

		<div class="columns">
			<span v-for="column in goods.columns" :key='column'>{{column}}</span>
		</div>

		<div class="info-service">
			<!-- index in number 对数字的遍历从1开始 -->
			<!-- <span v-for="index in goods.services.length" :key="index">
				<img :src="goods.services[index-1].icon" alt="">
				<span>{{goods.services[index-1].name}}</span>
			</span> -->
			<span class="info-service-item" v-for="(item, index) in goods.services" :key="index">
				<img :src="item.icon" alt=""> 
				<span>{{item.name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailGoodsInfo',
	props: {
		goods: {
			type: Object,
			default() {
				return {}
			}
		}
	},
}
</script>

<style>
.goodsInfo {
	padding: 10px 8px 0;
	border-bottom: 3px solid rgba(100,100,100,.1);
}

.title {
	font-weight: 500;
	color: black;
	font-size: 15px;
}

.price {
	padding: 14px 0 18px;
}

.price .nowPrice {
	color: var(--color-high-text);
	font-size: 22px;
	margin-right: 5px;
}

.price .oldPrice {
	color: darkgrey;
	font-size: 11px;
	text-decoration: line-through;
}

.discount {
	position: absolute;
	background-color: var(--color-high-text);
	color: aliceblue;
	font-size: 10px;
	padding: 3px;
	border-radius: 8px;
	margin-left: 2px;
}

.columns {
	padding-bottom: 6px;
	display: flex;
	text-align: center;
	color: darkgray;
	font-size: 12px;
	border-bottom: 2px solid rgb(245, 242, 242);
}

.columns span {
	flex: 1;
}

.columns span:nth-child(1) {
	text-align: left;
}

.columns span:nth-child(3) {
	text-align: right;
}

.info-service {
	display: flex;
}

.info-service-item {
	flex: 1;
	text-align: center;
	padding: 20px 0;
}

.info-service img {
	width: 10px;
	vertical-align: top;
	margin-right: 2px;
}

.info-service span {
	font-size: 10px;
}
</style>