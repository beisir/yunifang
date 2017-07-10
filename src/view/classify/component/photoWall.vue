<template>
  <div class="photo">
  	<div class="photo-wall">
  	   <div class="photo-left">
  	   	 <img src="//wimg.yunifang.com/yunifang/wap/images/mm-2x.png" alt="">
  	   </div>	
  	   <div class="photo-right">
  	   	 <div v-for="item in imgData">
            <router-link :to="{path:'/Clschild',query:{id:item.id,title:item.cat_name}}"> 
  	   	 	     <img :src="item.images" alt="">
  	   	    </router-link>
         </div>
  	   </div>	
  	</div>
  </div>	
</template>
<script>
export default {
  props:['imgData']
}  
</script>
<style lang="less">
.photo-wall{
  padding:.05rem .1rem;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  box-sizing: border-box;
  .photo-left{
  	width: 35%;
  }
  .photo-right{
  	width: 65%;
  	display: flex;
    flex-wrap:wrap;
    align-content: space-between;
    div{
  	  width: 46%;
  	  margin-left: 4%;
  	  float: left;
  	}
  }	
  img{
  	width: 100%;
  }
}	
</style>