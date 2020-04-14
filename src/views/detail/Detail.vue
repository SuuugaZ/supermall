<template>
	<div id="detail">
		<nav-bar class="detail-nav">
			<template v-slot:left>
				<img class="backImg"
					   @click="backClick" src="../../assets/img/common/back.svg" alt="">
			</template>

			<template v-slot:center>
				<div class="title"
						 v-for="(item, index) in titles"
						 :key="item"
						 @click="titleClick(index)"
						 :class="{active: currentIndex == index}">
					{{item}}
				</div>
			</template>			
		</nav-bar>
		<detail-swiper :top-images="topImages" 				  								 				 
									 v-if="topImages.length>0"></detail-swiper>
		<detail-goods-info :goods='goods' ></detail-goods-info>
		<detail-shop-info :shopInfo='shopInfo'></detail-shop-info>
		<div class="detail-images">
			<div v-for="item in detailImages" :key="item">
			<img class="detailImage" :src="item" alt="">
		</div>
		</div>
		<detail-item-params :item-params='itemParams'></detail-item-params>
		<detail-comment-info :comment-info='commentInfo'></detail-comment-info>
		<!-- 推荐内容不需要新建子组件，直接使用GoodsList组件就行 -->
		<goods-list :goods='recommends'></goods-list>
		<detail-bottom-bar @addCart='addToCart'></detail-bottom-bar>
	</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailItemParams from './childComps/DetailItemParams'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from "../../components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";

import {getDetail, GoodsInfo, ShopInfo, ItemParams, getRecommend} from '../../network/detail'

export default {
	name: 'Detail',
	data () {
		return {
			// 保存id
			id: null,
			titles: ['商品','参数','评论','推荐'],
			currentIndex: 0,
			topImages: [],
			goods: {},
			shopInfo: {},
			detailImages: [],
			itemParams: {},
			commentInfo: {},
			recommends: []
		}
	},
  // 在组件创建完成后获取id
	created () {
		// 1.保存传入的id
		this.id = this.$route.params.id //params.id对应路径里定义的变量

		//2.根据iid请求详情数据
		getDetail(this.id).then(
			res => {
				console.log(res);
				const data = res.result
				//2.1 获得轮播图数据
				this.topImages = data.itemInfo.topImages

				//2.获取商品数据
				this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

				//3.获取店铺数据
				this.shopInfo = new ShopInfo(data.shopInfo)

				//4.获取图片
				this.detailImages = data.detailInfo.detailImage[0].list

				//5.获取参数信息
				this.itemParams = new ItemParams(data.itemParams.info, data.itemParams.rule)

				//6.获取评价信息
				if(data.rate.cRate !== 0) {
					this.commentInfo = data.rate.list[0]
				}
			}
		)

		// 3. 请求recommend数据
		getRecommend().then(res => {
			this.recommends = res.data.list
			console.log(this.recommends);
		})
	},
  
	components: {
		NavBar,
		DetailSwiper,
		DetailGoodsInfo,
		DetailShopInfo,
		DetailItemParams,
		DetailCommentInfo,
		GoodsList,
		DetailBottomBar
	},
	methods: {
		titleClick(index) {
			this.currentIndex = index
		},
		backClick() {
			this.$router.back()
		},
		addToCart() {
			//1.获取购物车需要展示的信息
			const product = {}
			product.image = this.topImages[0]
			product.title = this.goods.title
			product.desc = this.goods.desc
			product.price = this.goods.realPrice
			product.id = this.id

			//2.将商品添加到cart组件
			// this.$store.commit('addCart',product)
			//这里最好使用actions
			this.$store.dispatch('addCart', product)
		}
	},
}
</script>

<style>
	#detail {
		margin-top: 44px;
		position: relative;
		z-index: 9999;
		background-color: #fff;
	}

	.detail-nav {
		position: fixed;
		z-index: 99;
		top: 0;
		right: 0;
		left: 0;
		background-color: #fff;
	}
	
	.center {
		display: flex;
		font-size: 13px;
	}

	.backImg {
		width: 22px;
		margin-top: 10px;
	}

	.title {
		flex: 1;
	}

	.active {
		color: var(--color-high-text)
	}

	.detail-images {
		margin-top: 10px;
	}

	.detailImage {
		width: 100%;
	}

	
</style>