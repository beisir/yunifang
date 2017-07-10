<template>
  <div class="recommend white">
  	<div class="recommend-title">推荐商品</div>
  	  <div class="subject-list white">
  	  	<div class="subject-ss"> 
  	  	  <dl v-for="item in subData">
  	  	  	<dt><img :src="item.goods_img"></dt>
  	  	  	<dd class="dds">{{item.goods_name}}</dd>
  	  	  	<dd><span>￥{{item.shop_price}}</span></dd>
  	  	  </dl>
  	  	</div>
  	  </div>
  	</div>
  </div>	
</template>
<script>
export default {
  props: ['subData'],
  created (){
  	console.log(this.subData)
  }	
}	
</script>
<style lang="less">
.recommend{
	margin-top: .1rem;
}
.recommend-title{
  padding-left: .2rem;	
  position: relative;
  line-height: .3rem;
	&:before{
		content:"";
		display: block;
		width:.05rem;
		height:.05rem;
		background: #fc6b87;
		position: absolute;
		left:.1rem;
		top:40%;
		transform:rotate(45deg);
	}
}	

</style>
