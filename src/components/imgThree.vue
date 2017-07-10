<template>
  <div class="three-box">
  	<router-link  v-for="(item,i) in imgData" :class="'item-'+i" tag="div" :to="{path:'/Recom',query:{id:87}}">
  	  <img :src="item.image" alt="">
  	  <p class="no1">{{item.title}}</p>
  	  <p class="no2">{{item.description}}</p>
  	</router-link>
   </div>	
</template>
<script>
export default {
  props: ['imgData']	
}	
</script>
<style lang="less">
.three-box{
  margin: .08rem 0; 
  overflow: hidden;
  div{
  	width:49%;
  	img{
  		width:100%;
  	}
  }		
}	
.item-0,.item-1,.item-2{
  position: relative;	
  p{
    position: absolute;
    left:.1rem;
    z-index: 1000;
    &.no1{
      font-size:.14rem;
      top:.1rem;	
    }
    &.no2{
      top:.3rem;
      color:#9c9c9c;	
    }
  }
}
.item-0{
  float: left;
}
.item-1,.item-2{
  float: right;
}
.item-2{
  margin-top:.06rem;
}
</style>