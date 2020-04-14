<template>
	<div class="goods-list-item" @click="itemClick">
		<!-- 放图片，价格，cfav -->
		<img :src="showImage" alt="">
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
		  <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'goodsListItem',
	props: {
		goodsItem: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	computed: {
		showImage() {
			return this.goodsItem.image || this.goodsItem.show.img
		}
	},
	methods: {
		itemClick() {
			this.$router.push('/detail/'+this.goodsItem.iid)
		}
	}
}
</script>

<style>
	.goods-list-item img {
		border-radius: 5px;
		height: 250px;
	}

	.goods-info {
		font-size: 12px;
		margin: 4px 0 3px;
		text-align: center;
	}

	.goods-info p {
		overflow: hidden;
		text-overflow: ellipsis;/* 省略号 */
		white-space: nowrap;
		margin-bottom: 3px;
	}

	.goods-info .price {
		color: var(--color-high-text);
		margin-right: 20px;
	}

	.goods-info .collect {
		position: relative;
	}
	.goods-info .collect::before {
		content: '';
		position: absolute;
		/* display: inline-block; */
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
	}
</style>