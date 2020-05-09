<template>
<div>
	<keep-alive exclude="Detail">
		<router-view></router-view>
	</keep-alive>
	<main-tab-bar></main-tab-bar>	
</div>
</template>

<script>
//引入组件
import MainTabBar from './components/content/maintabbar/MainTabBar'

export default {
  name: 'app',
	components: {
		MainTabBar
	}
}
</script>

<style>
	@import './assets/css/base.css';
</style>
