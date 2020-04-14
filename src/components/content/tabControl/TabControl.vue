<template>
	<div class="tab-control">
		<!-- 文字不同，样式相同 -->
		<div v-for="(item, index) in titles" 
				 :key='item'
				 class="tab-control-item" 
				 @click="itemClick(index)" 
				 :class="{active: index == currentIndex}">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabControl',
	// 需要父组件传入参数
	props: { 
		titles: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data () {
		return {
			// 记录当前选中的item
			currentIndex: 0
		}
	},
	methods: {
		itemClick(index) {
			this.currentIndex = index;
			// 子组件向父组件发射事件和参数
			this.$emit('tabClick', index)
		}
	}
}
</script>

<style>
	.tab-control {
		display: flex;
		text-align: center;
		font-size: 15px;
	}
	.tab-control-item {
		flex: 1;
		height: 40px;
		line-height: 40px;
	}
	.tab-control-item span {
		padding: 0 5px 5px;
	}
	/* 需要动态绑定的样式 */
	.active {
		color: var(--color-high-text);
	}
	.active span {
		border-bottom: 3px solid var(--color-tint);
	}
</style>