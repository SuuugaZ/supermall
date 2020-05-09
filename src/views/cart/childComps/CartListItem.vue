<template>
	<div id="cart-list-item">
		<div class="item-selector">
			<check-button :isChecked='listItem.check' @click.native="check"></check-button>
		</div>
		<div class="item-img">
			<img :src="listItem.image" alt="商品图片">
		</div>
		<div class="item-info">
			<div class="item-title">{{listItem.title}}</div>
			<div class="item-desc">{{listItem.desc}}</div>
			<div class="item-bottom">
				<div class="left item-price">￥{{listItem.price}}</div>
				<div class="right">x {{listItem.count}}</div>
			</div>	
		</div>
	</div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";

export default {
	name: 'CartListItem',
	props: {
		listItem: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	components: {
		CheckButton
	},
	methods: {
		check() {
			this.listItem.check = !this.listItem.check
		}
	}
}
</script>

<style>
	#cart-list-item {
		width: 100%;
		display: flex;
		font-size: 0;
		padding: 5px;
		border-bottom: 1px solid #ccc;
	}

	.item-selector {
		width: 14%;
		display: flex;
		justify-content: center;
    align-items: center;
	}

	.item-img {
		padding: 4px;
	}

	.item-img img {
		display: block;
		width: 80px;
		height: 100px;
		border-radius: 5px;
	}

	.item-info {
		width: 65%;
		font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
	}

	.item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

	.item-desc {
    font-size: 14px;
    color: #666;
		margin-top: 15px;
	}
	
	.item-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
	
  .item-price {
    color: orangered;
  }
	
</style>