<template>
<div>
		<!-- Slider main container -->
		<div class="swiper-container" 
				 id='detail-swiper'
				>
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
				<!-- 从后台请求数据 -->
        <div 
					class="swiper-slide" 
					v-for="item in topImages" 
					:key="item"
					>
					<img :src="item" alt="">
				</div>	
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
		</div>
</div>		
</template>

<script>
import Swiper from 'swiper'

export default {
	name: 'DetailSwiper',
	props: {
		topImages: {
			// 类型 
			type: Array,
			//default
			default() {
				return []
			}
		}
	},
	mounted () {
	  var mySwiper = new Swiper ('.swiper-container', {
			initialSlide: 0, 
			observer: true,
			observerParents: true,
			// Optional parameters
   		direction: 'horizontal',
			loop: true,

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
			},
				autoplay: true,
				autoplayDisableOnInteraction: true,
  		})
	}
}
</script>

<style>
#detail-swiper {
	height: 300px;
}
</style>