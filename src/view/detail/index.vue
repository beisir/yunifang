<template>
<div class="detail box">
  <div class="title min-title">
    <i class="icon iconfont icon-left"></i>
    <h3>商品详情</h3>
    <router-link to="/shopCar" class="icon iconfont icon-iconfontgouwuche"></router-link>
  </div>
  <div class="content">
  	<Swiper :swiperData="swiperData" :swiperCache="swiperCache"></Swiper>
  	<subinfo :infoData="delData"></subinfo>
  	<goodsrel :subData="subData"></goodsrel>
    <activity></activity>
    <nav class="navs-router white">
      <router-link :to="{path:'/Detail/dity'}" active-class="active">产品详情</router-link>
      <router-link :to="{path:'/Detail/param'}" active-class="active">产品参数</router-link>
      <router-link to="/Detail/review" active-class="active">评论{{datas.commentNumber}}</router-link>
    </nav>
    <delog :delData="delData"></delog>  
    <router-view></router-view>
  </div>
  <div class="footer-btn white">
    <span class="addshop" @click="addShop">加入购物车</span>
    <span class="liji">立即购买</span>
  </div>
</div>
</template>
<script>
import Swiper from '@/components/swiper'
import subinfo from './component/subinfo'
import goodsrel from './component/goodsrel'
import activity from './component/activity'
import delog from './component/delog'
import {mapGetters , mapActions,mapState} from 'vuex'
export default {
  data (){
  	return {
  	  swiperCache: {
  	  	effect:'effect',
  	  	slidesPerView:'auto',
  	  	paginationClickable: true
  	  },
  	  swiperData: [],	
      subData:[],
      delData:[],
      datas:''
  	}
  },
  components: {
  	Swiper,
  	subinfo,
  	goodsrel,
    activity,
    delog
  },
  created (){
    console.log()
    this.getData(this.$route.query.id)
  },
  methods:{
    getData(opt){
      var that = this;    
      this.$axios.get('/api/detail?id='+opt).then(function(opt){
  	  	var datas = opt.data;
  	  	that.convert(datas.goods.gallery)
        that.datas = datas
        that.subData = datas.goodsRelDetails 
        that.delData = datas.goods
        that.$store.state.params = datas.goods.attributes
        that.$store.state.dity = datas.goods.goods_desc
        that.$router.push('/Detail/dity')
        console.log()	  		
  	  }).catch(function(err){
  	  	console.log(err)
  	  })
  	},
  	convert (opt){
  	  var arr = []
  	  opt.forEach(function(val,i){
  	  	arr.push({'activityImg':val.normal_url})
  	  })
  	  this.swiperData = arr	
  	},
    ...mapActions(['addShop'])
  }
}	
</script>
<style lang="less">
.detail{
  background: #ccc;
}
.navs-router{
  line-height: .4rem;
  text-align: center;
  display: flex;
  a{
    flex:1;
    font-size: .14rem;
    color:#5f646e;
  }
  .active{
    color:#fe7b7a;
    border-bottom:solid #fe7b7a 2px;
  }
}  
.footer-btn{
  padding:.05rem;
  text-align: right;
  border-top:solid #ccc 1px;
  span{
    width: 1rem;
    padding: .08rem 0;
    display: inline-block;
    text-align: center;
    color: white; 
    border-radius:3px;
    margin-left: .05rem;
  }
 .addshop{
    background:rgb(245, 173, 53);
  }
  .liji{
    background:#fc6b87;
  }
}
</style>