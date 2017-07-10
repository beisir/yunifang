<template>
   <div class="act-content">
	  <div class="act-title white">优惠活动</div>
	  <Swiper :swiperData="imgsData2" :swiperCache="swiperCache"></Swiper>
	</div>
</template>
<script>
import Swiper from '@/components/swiper'
export default {
  data (){
  	return {
  	  swiperCache:{
  	  	effect:'coverflow',
  	  	paginationClickable: false,
  	  	slidesPerView: 1.4
  	  },
  	  imgsData2:[
  	  {activityImg:'https://image.yunifang.com/yunifang/images/goods/temp/170527155491221343694704636.jpg'},
  	  {activityImg:'https://image.yunifang.com/yunifang/images/goods/temp/17053117517852078998169884.jpg'},
  	  {activityImg:'https://image.yunifang.com/yunifang/images/goods/temp/170517182432515641098188782.jpg'},
  	  {activityImg:'https://image.yunifang.com/yunifang/images/goods/temp/170527155491221343694704636.jpg'}  
  	  ]  
  	}
  },
  components: {
  	Swiper	
  }	
}	
</script>
