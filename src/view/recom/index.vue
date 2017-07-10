<template>
  <div class="recom box">
    <div class="recom-header min-title title">
   	  <h3>{{datas.title}}</h3>
   	  <i class="icon iconfont icon-left"></i>
    </div>	
 	  <recom :lists="datas.goodsList"></recom>	
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
  created (){
  	this.getData()
  },
  components: {
    recom
  },
  methods:{
  	getData(){
  	  var that = this;
  	  this.$axios.get('/api/recom?id='+that.$route.query.id).then(function(opt){
  	  	that.datas = opt.data
  	  }).catch(function(err){
  	  	console.log(err)
  	  })
  	}
  }
}		
</script>