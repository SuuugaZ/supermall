<template>
	<div class="recommend">
		<div v-for='item in recommends' :key='item.id' class="recommend-item">
			<a :href="item.link">
				<img :src="item.image">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecommendView',
	props: {
		// 因为是Home的子组件，所以父组件需要通过props向子组件传递参数
		recommends: {
			type: Array,
			defauit() {
				return []
			}
		}
	}
}
</script>

<style>
	/* img size 70px*70px */
	.recommend {
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 12px;
		padding: 10px 0 20px;
		border-bottom: 8px solid #eee;
	}
	.recommend-item {
		flex: 1;
	}
	.recommend-item img {
		width: 70px;
		height: 70px;
	}


</style>