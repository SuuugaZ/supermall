<template>
	<div class="goods-list">
		<!-- 如果子组件要使用父组件中的数据，通过props接收父组件传递进来的参数 -->
		<goods-list-item v-for="(item, index) in goods" 
										 :key='index'
										 :goods-item='item'
										 class="goods-list-item">
		</goods-list-item>
		
	</div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
	name: 'goodsList',
	// 获取home组件中的数据
	props: {
		goods: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		GoodsListItem
	}
}
</script>

<style>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px
	}
	.goods-list-item {
		width: 48%;
	}
</style>