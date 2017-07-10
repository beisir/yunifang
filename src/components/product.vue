<template>
  <div class="product white">
  	<ul class="padded">
  	  <router-link tag="li" v-for="item in proData" :to="{path:'/Detail',query:{id:item.id}}">
  	  	<img :src="item.goods_img" alt="">
  	  	<div class="card">
  	  	  <p>{{item.efficacy}}</p>
  	  	  <p class="inner">{{item.goods_name}}</p>	
  	  	</div>
  	  	<div class="card-price">
  	  	  <span>￥{{item.shop_price}}</span>	
  	  	  <del>￥{{item.market_price}}</del>	
  	  	</div>
  	  </router-link>
  	</ul>
  </div>	
</template>
<script>
export default {
  props: ['proData']	
}	
</script>

<style lang="less">
.product{
  padding: 0 .04rem;
  ul{
  	overflow: hidden;
  	li{
  	  width: 49%;
  	  background: #fff;
      border:solid #ccc 1px;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2); 
      margin-top: 4px;
      img{
      	width:100%;
      }
      &:nth-child(even){
		float: right;
      }
      &:nth-child(odd){
		float: left;
      }

  	}
  }
}	
.card{
  padding:.05rem;

  box-sizing:border-box;
  p{
  	line-height: .18rem;
  };     
  .inner{
  	height:.36rem;
  	color:#9c9c9c;
  } 	
}
.card-price{
	padding-bottom: .05rem;
  span{
  	font-size: .16rem;
  	color:#fc6b87;
  }	
  del{
  	color:#9c9c9c;
  	padding-left: .2rem;
  }
}
</style>