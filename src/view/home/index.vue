<template>
  <div class="home">
    <Swiper :swiperData="swiperData" :swiperCache="swiperCache"></Swiper>
    <navTitle :navData="navData"></navTitle>
    <imgThree :imgData="imgData"></imgThree>
    <skewSwiper></skewSwiper>
   	<countDown></countDown>  
   	<subJects :subData="subData"></subJects>
   	<product :proData="proData"></product>
    <footerNav></footerNav>
  </div>
  </div>
</template>
<script type="text/javascript">
import Swiper from '@/components/swiper'
import navTitle from './component/navTitle'
import imgThree from '@/components/imgThree'
import skewSwiper from './component/skewSwiper'
import countDown from './component/countDown'
import subJects from './component/subJects'
import product from '@/components/product'
import footerNav from '@/components/footerNav'
export default {
  data (){
  	return {
  	  swiperCache: {
  	  	effect:'effect',
  	  	slidesPerView:'auto',
  	  	paginationClickable: true
  	  },
  	  swiperData: [],
  	  navData:[],
  	  imgData:[],
  	  subData:[],
  	  proData:[]
  	}
  },
  created (){
  	this.getData()
  },
  methods:{
  	getData(){
  	  var that = this;
  	  this.$axios.get('/api/homeList').then(function(opt){
  	  	var datas = opt.data.data;
  	  	that.swiperData = datas.activityInfo.activityInfoList
  	  	that.navData = datas.ad5
  	  	that.imgData = datas.ad8
  	  	that.subData = datas.subjects
        that.proData = datas.defaultGoodsList
  	  }).catch(function(err){
  	  	console.log(err)
  	  })
  	}
  },
  components:{
    Swiper,
    navTitle,
	  imgThree,
	  skewSwiper,
	  countDown,
	  subJects,
	  product,
    footerNav
  }

}
</script>
<style>
.home{
  background:#eee;
  padding-bottom:.41rem;	
}	

</style>
