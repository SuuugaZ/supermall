<template>
	<div class="tab-content">
		<TabContentItem v-for="(item,index) in list" :key="index" :good='item' class="item"/>
	</div>
</template>

<script>
import TabContentItem from './TabContentItem'

export default {
	name: 'TabContent',
	props: {
		list: Array
	},
	components: {
		TabContentItem
	}
}
</script>

<style>
.tab-content {
	width: 100px;
	display: flex;
	/* 换行 */
	flex-flow: row wrap;
}

.item {
	/* 规定每个div的大小 */
	flex: 0 0 33%; 
	height: 100px;
}

</style>