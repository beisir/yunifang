<template>
  <div class="subjects">
  	<div class="act-title white">热门专题</div>
  	<div class="subject-content" v-for="item in subData">
  	  <router-link tag="div" class="subject-image" :to="{path:'/Special',query:{id:item.id}}">
  	    <img :src="item.image">
  	  </router-link>
  	  <div class="subject-list white">
        <div class="subject-ss"> 
  	  	  <router-link v-for="val in item.goodsList" :to="{path:'/Special',query:{id:val.id}}" tag="dl">
  	  	  	<dt><img :src="val.goodsImage"></dt>
  	  	  	<dd class="dds">{{val.goods_name}}</dd>
  	  	  	<dd><span>￥{{val.shop_price}}</span><del>￥   {{val.market_price}}</del></dd>
  	  	  </router-link>
        </div>
  	  </div>
  	</div>
  </div>	
</template>
<script>
export default {
  props: ['subData']	
}	
</script>
<style lang="less">
 .subject-image{
    img{
      width:100%;
    }
  } 
</style>