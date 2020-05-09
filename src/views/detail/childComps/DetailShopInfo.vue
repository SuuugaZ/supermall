<template>
	<div class="shop-info" v-if="Object.keys(shopInfo).length">
		<div class="shop-top">
			<img :src="shopInfo.logo" alt="">
			<span class="name">{{shopInfo.name}}</span>
		</div>

		<div class="shop-middle">

			<div class="shop-middle-item shop-middle-left">
				<div class="info-sells left-item">
					<div class="sells-count">{{shopInfo.sells|sellCountFilter}}</div>
					<div class="sells-text">总销量</div>
				</div>
				<div class="info-goods left-item">
					<div class="goods-count">{{shopInfo.goodsCount}}</div>
					<div class="goods-text">全部宝贝</div>
				</div>
			</div>

			<div class="shop-middle-item shop-middle-right">
				<!-- loop -->
				<div class="table" v-for="(item, index) in shopInfo.score" :key="index">
					<span class="desc">{{item.name}}</span>
					<span class="score" :class="{'score-better': item.isBetter}">{{item.score}}</span>
					<span class="better" :class="{'is-better':item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
					<!-- 动态绑定样式,使用对象语法 :class='{'className':boolean}' -->
				</div> 
			</div>

		</div>

		 <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
	</div>
</template>

<script>
export default {
	name: 'DetailShopInfo',
	props: {
		shopInfo: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	filters: {
		sellCountFilter: function(value) {
			if(value < 10000) return value
			return (value/10000).toFixed(1)+'万'
		}
	}
}
</script>

<style>
.shop-top {
	padding: 25px 10px;
}

.shop-top img {
	width: 48px;
	margin-right: 15px;
	vertical-align: middle;
	border-radius: 50%;
}

 .name {
	font-weight: 500;
	font-size: 20px;
	color: black;
	vertical-align: middle;

}

.shop-middle {
	display: flex;
}

.shop-middle-item {
	flex: 1;
	box-sizing: border-box;
}

.shop-middle-left {
	display: flex;	
	box-sizing: border-box;
	position: relative;
}

.shop-middle-left::after {
	content: '';
	position: absolute;
	background-color: rgba(100,100,100,.1);
	width: 2px;
	height: 40px;
	right: 0;
	top: 10px;
}

.info-goods,
.info-sells {
	flex: 1;
	padding: 5px 14px;
	text-align: center;
	font-size: 13px;
	color: rgb(22, 22, 22);
	font-weight: 500;
}

.sells-text,
.goods-text {
	margin-top: 8px;
}

.sells-count,
.goods-count {
	font-size: 16px;
	font-weight: 600;
}

.shop-middle-right {
	color: darkslategray;
	font-size: 13px;
	font-weight: 600;
}

.table {
	padding: 2px;
}

.desc {
	margin-left: 25px;
}

.score {
	color: rgb(4, 151, 4);
	margin-left: 15px;
}

.better {
	background-color: rgb(4, 151, 4);
	color: aliceblue;
	position: absolute;
	right: 16px;
}

.is-better {
	background-color: red;
	color: aliceblue;
}

.score-better {
	color: red;
}

 .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>