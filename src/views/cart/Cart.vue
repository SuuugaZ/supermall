<template>
	<div id="cart">
	<!-- 导航 -->
		<nav-bar id="nav-bar">
			<template v-slot:center class="center">
				<div>购物车({{cartLength}})</div> 
			</template>
		</nav-bar>

	<!-- 商品列表 --> 
		<cart-list></cart-list>
	<!-- 底部汇总 -->
		<cart-bottom-bar></cart-bottom-bar>
	</div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
	name: 'ShopCart',
	data () {
		return {
		}
	},
	components: {
		NavBar,
		CartList,
		CartBottomBar
	},
	computed: {
		...mapGetters(['cartLength'])
	}
}
</script>

<style>
	#cart {
		margin-top: 44px;
	}

	#nav-bar {
		background-color: var(--color-tint);
		font-weight: 500;
		color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}

	.center {
		text-align: center;
	}



</style>