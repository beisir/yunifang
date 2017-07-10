<template>
  <div class="clschild box">
  	<div class="recom-header min-title title">
   	  <h3>{{$route.query.title}}</h3>
   	  <i class="icon iconfont icon-left"></i>
    </div>
    <div class="clschild-content content">
    	<product :proData="proData"></product>
    </div>
  </div>	
</template>
<script>
import product from '@/components/product'
export default {
  data (){
  	return {
  	  proData: []	
  	}
  },	
  created (){
  	this.getData()
  },
  components: {
    product
  },
  methods:{
  	getData(){
  	  var that = this;
  	  this.$axios.get('/api/clschild?id='+that.$route.query.id).then(function(opt){
  	  	that.proData = opt.data
  	  	console.log(opt)
  	  }).catch(function(err){
  	  	console.log(err)
  	  })
  	}
  }		
}	
</script>