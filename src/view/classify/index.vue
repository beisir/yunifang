<template>
  <div class="classify box">
	  <searchBar></searchBar>
    <div class="content">
	    <photoWall :imgData="imgData"></photoWall>
      <photoImg :phoData="phoData"></photoImg>
      <photoTit :titData="titData"></photoTit>
      <div class="act-title white">明星产品</div>
      <product :proData="proData"></product>
    </div>
    <footerNav></footerNav>
  </div>
</template>
<script>
import searchBar from '@/components/searchBar'
import footerNav from '@/components/footerNav'
import photoWall from './component/photoWall'
import photoImg from './component/photoImg'
import photoTit from './component/photoTit'
import product from '@/components/product'
export default {
  data (){
    return {
      imgData: [],
      proData: [],
      phoData: [],
      titData: []
    }
  },
  components: {
  	searchBar,
  	photoWall,
    photoImg,
    photoTit,
    product,
  	footerNav
  },created (){
    this.getData()
  },
  methods:{
    getData(){
      var that = this;
      this.$axios.get('/api/classify').then(function(opt){
        var datas = opt.data.data;
        that.proData = datas.goodsBrief
        that.imgData = datas.category[0].children  
        that.phoData = datas.category[1].children
        that.titData = datas.category[2].children
        console.log(that.imgData)
      }).catch(function(err){
        console.log(err)
      })
    }
  }	
}	
</script>
<style>
.classify{
  padding-bottom: .41rem;
}
</style>