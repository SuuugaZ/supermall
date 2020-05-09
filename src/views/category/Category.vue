<template>
	<div class="category">
		<NavBar class="category-nav">
			<template v-slot:center class="center"><div>商品分类</div></template>
		</NavBar>
		<div class="content">
			<TabMenu 
				:list='list'
				@itemClick='itemClick'
				class="tab-menu"/>
			<TabContent :list='contentList' class="tab-content"/> 
		</div>
		
	</div>
	
</template>

<script>
import TabMenu from './childComps/TabMenu'
import NavBar from '../../components/common/navbar/NavBar'
import TabContent from './childComps/TabContent'

import { getCategoryTitle, getCategoryContent }from '../../network/category.js'

export default {
	name: 'Category',
	// data是一个函数
	data() {
		return {
			list: [],
			maitKey: '',
			index: '',
			contentList: []
		}
	},
	created() {
		this._getCategoryTitle()
	},
	components: {
		TabMenu,
		NavBar,
		TabContent
	},
	methods: {
		_getCategoryTitle() {
			getCategoryTitle().then(res => {
				const { list } = res.data.category
				this.list = list
				this.maitKey = list.map(item => item.maitKey) 
	      this._getCategoryContent(0)				
			})
		},
		_getCategoryContent(index) {
			const maitKey = this.maitKey[index]
			getCategoryContent(maitKey).then(res => this.contentList = res.data.list)
			console.log(this.contentList)
		},
		itemClick(index) {
			console.log(this.maitKey[index])
			const maitKey = this.maitKey[index]
			// 根据maitKey请求网络数据
			this._getCategoryContent(index)	
		}
	} 
}
</script>

<style>
	.category-nav {
		color: aliceblue;
		background-color: var(--color-tint);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
	}
	.content {
		position: absolute;
		width: 100%;
		top: 44px;
		bottom: 49px;
		display: flex;
	}
	.tab-menu {
		overflow: auto;
		width: 25%;
		height: 100%;
	}
	.tab-content {
		height: 100%;
		overflow: auto;
		flex: 1;
	}

</style>
