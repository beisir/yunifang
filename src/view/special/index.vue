<template>
  <div class="special box">
  	<div class="min-title title">
   	  <h3>{{datas.title}}</h3>
   	  <i class="icon iconfont icon-left"></i>
    </div>
    <div class="special-content content">
   	  <div class="special-banner">
   	  	<img :src="datas.descImage" alt="">
   	  </div>
   	  <div class="special-text">
   	  	<p>{{datas.title}}</p>
   	  	<p>{{datas.detail}}</p>
   	  </div>
   	  <recom :lists="datas.goodsList"></recom>		  
    </div>
  </div>
</template>
<script>
import recom from '@/components/recom'
export default {
  data (){
    return {
      datas: []
    }
  },
  components: {
  	recom
  },
  created (){
    this.getData()
  },
  methods:{
    getData(){
      var that = this;
      this.$axios.get('/api/special?id='+that.$route.query.id).then(function(opt){
        that.datas = opt.data
      }).catch(function(err){
        console.log(err)
      })
    }
  }	
}	
</script>
<style lang="less">
.special-content{
  background: #ccc;
}
.special-banner{
  img{
  	width:100%;
  }	
}
.special-text{
  background: white;
  margin-bottom: .1rem;
  p{
  	padding:.1rem;
  }
}	
</style>