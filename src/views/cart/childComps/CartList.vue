<template>
	<div id="cart-list">
		<cart-list-item v-for="(item, index) in cartList"
										:list-item='item'
										:key="index"></cart-list-item>
	</div>
</template>

<script>
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
	name: 'CartList',
	components: {
		CartListItem
	},
	// 获取数据的方法 1.props接收父组件传递的数据 2.直接从vuex中获取
	computed: {
		...mapGetters(['cartList'])
	}
}
</script>

<style>

</style>