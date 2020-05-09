<template>
	<div class="item">
		<img :src="showImage" class="img">
		<div>{{good.title}}</div>
	</div>
</template>

<script>
export default {
	name: 'TabContentItem',
	props: {
		good: Object
	},
	computed: {
		showImage() {
			return this.good.image
		}
	}
}
</script>

<style>
.item {
	font-size: 13px;
	padding: 10px;
	text-align: center;
}
.img {
	width: 60px;
}

</style>