<template>
	<div id='home'>
		<!-- nav bar -->
		<nav-bar class="home-nav">
			<template v-slot:center class="center">
				<div>购物街</div>
			</template>
		</nav-bar>
		<!-- 轮播图 -->
		<swiper :list='list' 
						v-if="list.length>0"></swiper>
		<!-- 推荐信息 -->
		<recommend-view :recommends='recommends'></recommend-view>
		<!-- 详情展示 -->
		<feature-view></feature-view>
		<!-- TabControl -->
		<tab-control :titles="titles"
								  class="tab-control"
									@tabClick='tabClick'></tab-control>
									<!-- goods需要根据用户的点击来动态的决定 -->
		<goods-list :goods="showGoods"></goods-list>
		<back-top @click.native="backClick"></back-top>		
	</div>
</template>

<script>
// 公共组件
import NavBar from '../../components/common/navbar/NavBar'
import Swiper from '../../components/common/swiper/Swiper'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import BackTop from '../../components/content/backtop/BackTop'

//子组件
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

//方法
import {
	getHomeMultidata,
	getHomeGoods
} from '../../network/home'


export default {
	name: 'Home',
	data () {
		return {
			result: null,
			list: [],
			recommends: [],
			titles: ['流行','新款','精选'],
			goods: {
				// key: value 
				'pop': {page: 0, list: []},
				'new': {page: 0, list: []},
				'sell': {page: 0, list: []}
			},
			currentType: 'pop'
		}
	},
	components: {
		NavBar,
		Swiper,
		RecommendView,
		FeatureView,
		TabControl,
		GoodsList,
		BackTop
	},
	//生命周期函数
	created() {
		// 1、请求多个数据
		this.getHomeMultidata()

		// 2.请求商品数据
		this.getHomeGoods('pop')
		this.getHomeGoods('new')
		this.getHomeGoods('sell')
	},
	destroyed () {
		console.log('home destroyed');	
	},
	activated () {
		console.log('activated');	
		
	},
	deactivated () {
		console.log('deactived');
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list
		}
	},
	methods: {
		// 事件监听相关的方法 
		tabClick(index) {
			// index是从子组件传进来的参数
			// 根据index值决定相关参数
			switch (index) {
				case 0: 
					this.currentType = 'pop'
					break
				case 1:
					this.currentType = 'new'
					break
				case 2:
					this.currentType = 'sell'
					break
			}	
		},

		backClick() {
			
		},

		// 网络请求相关的方法 
		getHomeMultidata() {
			getHomeMultidata().then(res => {
				console.log(res);	
				this.result = res;
				this.list = res.data.banner.list;
				this.recommends = res.data.recommend.list;
			})
		},
		getHomeGoods(type) {
			const page = this.goods[type].page + 1
			getHomeGoods(type,page).then(res => {
				// 把请求到的数据追加到goods的list中
				console.log(res.data.list)
				this.goods[type].list.push(...res.data.list)
				this.goods[type].page += 1
			})
		},	
	}
}
</script>

<style>
#home {
	padding-top: 44px;
}
.home-nav {
	color: aliceblue;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 999;
}
.home-nav {
	/* 可以使用之前定义的变量 */
	background-color: var(--color-tint);
}
.center div {
	flex: 1;
	font-size: 16px;
}
.tab-control {
	position: sticky;
	top: 44px;
	background-color: #fff;
	z-index: 999;
}
</style>