<template>
  <div class="swiper-container white">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiperData"><img :src="item.activityImg"></div> 
    </div>
    <div class="swiper-pagination"></div>	
  </div>
</template>

<script>
import Swiper from '@/lib/swiper/js/swiper.js'
import '@/lib/swiper/css/swiper.min.css'
export default {
  props: ['swiperData','swiperCache'],
  data () {
    return {
      swiper: ''   
    }
  },   
  mounted () {
    var that = this
    this.swiper = new Swiper(this.$el,{
      autoplay: 2000,
      pagination: '.swiper-pagination',
      paginationClickable: that.swiperCache.slidesPerView,
      effect: that.swiperCache.effect,
      slidesPerView:that.swiperCache.slidesPerView,
      centeredSlides: true,
      coverflow:{
        rotate:50,  //旋转的角度
        stretch:0,  //拉伸
        depth:100,  //深度
        modifier:1, //修正值（该值越大前面的效果越明显）
        slideShadows:true  //页面阴影效果
      }
    })
  },
  updated () {
    this.swiper.update()
  } 
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.swiper-container{
  overflow:hidden;
  box-sizing:border-box;
	img{
		width: 100%;
    display:block;
	}
  .swiper-pagination{
      margin-bottom: .1rem;
    .swiper-pagination-bullet{
      width:6px;
      height:6px;
      background:#000;
      opacity: .5;
      -webkit-transition:opacity .5s ease;
    }
    .swiper-pagination-bullet-active{
       background: white; 
    }
  }
}
</style>
