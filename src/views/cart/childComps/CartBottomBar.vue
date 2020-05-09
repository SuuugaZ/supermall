<template>
	<div class="bottom-bar">
		<div class="check-content">
			<check-button class="check-button" 
										:isChecked='isSelectAll'
										@click.native='checkClick'></check-button>
			<span>全选</span>
		</div>

		<div class="totalPrice">
			合计：￥{{totalPrice}}
		</div>

		<div class="calculate">
			去计算({{checkedLength}})
		</div>
	</div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";

export default {
	name: 'CartBottomBar',
	data () {
		return {
		}
	},
	components: {
		CheckButton
	},
	computed: {
		...mapGetters(['cartList']),

		// 计算购物车中item的price
		totalPrice() {
			return this.cartList.filter(item => {return item.check}).reduce((preValue, item) => { return preValue +item.price * item.count} ,0).toFixed(2)
		},
		checkedLength() {
			return this.cartList.filter(item => item.check).length
		},
		//1.状态显示 (通过computed处理isChecked属性,动态改变checkButton组件的显示状态)
		isSelectAll() {
			if(this.cartList.length == 0) return false
			return this.cartList.every(item => item.check)
		},
	},
	methods: {
		//2.点击全选按钮，item的checke-button全部被选中/取消选中
		//触发checkClick事件，判断全选按钮是否被选中，选中：修改所有item的check状态 true
		//																				没选中: 修改所有item的check状态 false
		checkClick() {
			if(this.isSelectAll) {
				this.cartList.forEach(item => item.check = false)
			} else {
				this.cartList.forEach(item => item.check = true)
			}
		}
	}
}
</script>

<style>
	.bottom-bar {
		font-size: 14px;
		display: flex;
		height: 40px;
		background-color: #eee;
		position: fixed;
		bottom: 49px;
		left: 0;
		right: 0;
	}

	.check-content {
		margin-left: 5px;
		display: flex;
		line-height: 40px;
		align-items: center;
		width: 90px;
	}

	.check-button {
		line-height: 20px;
		width: 20px;
		height: 20px;
	}
	.check-content span {
		margin-left: 5px;
	}

	.totalPrice {
		margin-left: 20px;
		line-height: 40px;
		flex: 1;
	}

	.calculate {
		background-color: orangered;
		width: 70px;
		height: 40px;	
		line-height: 40px;
		text-align: center;
		color:snow;
	}
</style>