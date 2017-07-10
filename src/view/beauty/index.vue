<template>
  <div class="beauty box">
  	<div class="min-title title">
      <h3>美啦</h3>
      <a href="javascript:;">发帖</a>
    </div>	
    <div class="content">
      <Swiper :swiperData="swiperData" :swiperCache="swiperCache"></Swiper>
       <div class="navs">
        <ul class="imgs-nav">
          <li v-for="item in scrollData">
            <span>{{item.msg}}</span>
            <img :src="item.images" alt="">
            <div></div>
          </li>
        </ul>
      </div>
      <hotlist :hotData="hotData"></hotlist>
    </div>
  	<footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/footerNav'
import Swiper from '@/components/swiper'
import hotlist from './component/hotlist'
export default {
  data (){
    return {
      swiperCache: {
        effect:'effect',
        slidesPerView:'auto',
        paginationClickable: true
      },
      swiperData: [],
      scrollData: [],
      hotData: []
    }
  },
  components: {
  	footerNav,
    hotlist,
    Swiper
  },
  created (){
    this.getData()
  },
  methods:{
    getData(){
      var that = this;
      this.$axios.get('/api/beauty').then(function(opt){
        var datas = opt.data.data;
        that.swiperData = opt.data.swiper
        that.scrollData = opt.data.scrollx
        that.hotData = datas
      }).catch(function(err){
        console.log(err)
      })
    }
  }	
}	
</script>
<style lang="less">
.banner{
  img{
    width:100%;
  }
}
.navs{
  padding:.1rem 0;
  overflow-x:scroll; 
  ul{
    display: -webkit-box;
    li{
      width:38%;
      margin-left: .1rem;
      position: relative;
      overflow: hidden;
      div{
        padding-top: 60%;
      }
      span{
        position: absolute;
        padding:.05rem .1rem;
        background: rgba(255,255,255,.5);
        bottom:.1rem;
        left:.15rem;
        z-index: 11;
      }
      img{
        position: absolute;
        top:0;
        width:100%;
      }
      
    }
    li:last-child{
      padding-right: .1rem;
    }
  }
}
</style>