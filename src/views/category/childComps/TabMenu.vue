<template>
	<div class="tab-menu">
		<ul>
			<li v-for="(item, index) in list" 
				  :key='item.title' 
					@click="itemClick(index)"
					:class="{active:currentIndex===index}">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TabMenu',
	data () {
		return {
			currentIndex: 0
		}
	},
	props: {
		list: Array
	},
	methods: {
		itemClick(index) {
			this.$emit('itemClick', index)
			this.currentIndex = index
		}
	}
}
</script>

<style>
	.tab-menu {
		background-color: #f6f6f6;
	}

	.tab-menu ul li {
		height: 40px;
		text-align: center;
		line-height: 40px;
	}

	.tab-menu .active {
		border-left: 3px solid var(--color-tint);
		background-color: white;
	}
</style>