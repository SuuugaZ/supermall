<template>
	<div id='tab-bar'>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'TabBar'
}
</script>

<style>
	#tab-bar {
		display: flex;
		position: fixed;
		bottom: 0;
		/* width: 300px; */
		/* 如果不设置宽度，要设置left和right使元素和浏览器宽度一致 */
		left: 0;
		right: 0;
		box-shadow: 0 -2px 1px rgba(100, 100, 100, .1)
	}
</style>