<template>
  <div class="count white">
  	<div class="left">
  		<img src="//wimg.yunifang.com/images/limitedSale_bg.png">
  		<img src="//wimg.yunifang.com/images/limitedSale_logo.png">
  		<div class="tip">
  			<i>距抢购结束</i>
  			<h3 class="time">05:51:21</h3>
  		</div>
  	</div>
  	<div class="right swiper-container">
  	  	<div class="swiper-wrapper">
  	  		<div class="swiper-slide">
  	  			<img src="http://image.hmeili.com/yunifang/images/goods/1495/goods_img/170117123024613191766587705.jpg" alt="">
  	  			<div class="">
  	  				<p>限时包邮丨黑糖清透净颜黑面膜7片</p>
  	  				<p>109</p>
  	  			</div>
  	  		</div>
  	  		<div class="swiper-slide">
  	  			<img src="http://image.hmeili.com/yunifang/images/goods/1495/goods_img/170117123024613191766587705.jpg" alt="">
  	  			<div class="">
  	  				<p>限时包邮丨黑糖清透净颜黑面膜7片</p>
  	  				<p>109</p>
  	  			</div>
  	  		</div>
  	  	</div>
  	</div>
  </div>	
</template>
<script>
import Swiper from '@/lib/swiper/js/swiper.js'
import '@/lib/swiper/css/swiper.min.css'
export default {
  data () {
    return {
      swiper: ''   
    }
  },   
  mounted () {
    var that = this
    this.swiper = new Swiper('.right',{
      paginationClickable: true,
      autoplay: 2000
    })
  },
  updated () {
  	console.log(this.swiper)
    this.swiper.update()
  } 

}	
</script>
<style lang="less">
.count{
overflow: hidden;
}

.left{
	width:55%;
	float: left;
	position: relative;
	img:first-child{
		width:100%;
	}
	img:first-child + img{
		position: absolute;
	}
	img:nth-child(2){
		width:.5rem;
		top:.1rem;
		left:.1rem;
	}
	.tip{
	  width:100%;
	  text-align: center;
	  position: absolute;
	  top:45%;

	  i{
	  	padding-left: .2rem;
	  	font-style: normal;
	  	background: url(//wimg.yunifang.com/images/limitedSale_clock.png) no-repeat left;
	  	background-size: auto 100%;
	  }
	  h3{
		font-size: .22rem;
	  }
	}
}	
.right{
	width:45%;
	float: right;
	padding:.1rem 0;
	overflow: hidden;
	box-sizing:border-box;
	.swiper-slide{
	  padding-right:40%;
	  box-sizing:border-box;	
	}
}
</style>