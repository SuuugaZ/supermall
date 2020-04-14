<template>
	<div class='tab-bar-item' @click="itemClick">
		<!-- 具名插槽 -->
		<!-- 使用v-if v-else来决定哪个插槽应该被渲染 -->
		<div v-if='!isActive'><slot name="item-icon"></slot></div> 
		<div v-else><slot name="item-icon-active"></slot></div> 
		<!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
		<!-- 如果要改变颜色，需要动态绑定样式 -->
		<div :style="activeStyle"><slot name='item-text'></slot></div>
	</div>
</template>

<script>
export default {
	name: 'TabBarItem',
	props: {
		path: String,
		activeColor: {
			type: String,
			default: '#ff5777' //传入默认值
		}
	},
	// data () {
	// 	return {
	// 		isActive: false
	// 	}
	// },
	computed: {
		isActive () {
			return this.$route.path.indexOf(this.path) != -1;
		},
		activeStyle () {
			return this.isActive ? {color : this.activeColor} : {}
		}
	},
	methods: {
		itemClick () {
			// 点击tabbar选项，改变当前路径
			// this.$router.path = this.path; 
			// this.$router.path是只读的属性
			//this.path是通过实例的path属性传递进来的
			// 当我们需要改变路径时，可以通过this.$router.push()或replace()方法改变路径
			if(this.$route.path.indexOf(this.path) == -1) this.$router.replace(this.path);
		}
	}
}
</script>

<style>
		.tab-bar-item {
		flex: 1;
		text-align: center;
		background-color: rgb(247, 243, 245);
		height: 49px;
		font-size: 14px;
	}

	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		margin-bottom: 2px;
		vertical-align: middle;
	}

	/* 不能指定具体的颜色，需要使用者自行传入颜色 */
	/* .active {
		color: red;
	} */

</style>