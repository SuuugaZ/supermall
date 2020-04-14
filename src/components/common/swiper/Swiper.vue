<template>
	<div>
		<!-- Slider main container -->
		<div class="swiper-container" >
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
				<!-- 从后台请求数据 -->
        <div class="swiper-slide" v-for="item in list" :key='item.id' >
					<a :href="item.link">
						<img :src="item.image" alt="">
					</a>
				</div>	
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper'
export default {
	name: 'Swiper',
	props: {
		list: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data () {
		return {
			
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
	.swiper-container {
    width: 100%;
	}
	img {
		width: 100%;
	}
</style>