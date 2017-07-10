<template>
  <div class="subinfo white">
  	 <div class="goods-subinfo">
		<div class="g-left">
  	 	  <p>{{infoData.goods_name}}</p>
  	 	  <div>
  	 	  	<b class="newprice">￥{{infoData.shop_price}}</b>
  	 	  	<del>￥{{infoData.market_price}}</del>
  	 	  	<span>券</span>
  	 	  	<span>抵</span>
  	 	  </div>
  	 	</div>
  	 	<div class="collect">
  	 	  <i class="icon iconfont icon-shoucang"></i>
  	 	  <p>收藏</p>
  		</div>
  	 </div>
  	 
  	 <div class="yunfei">
  	 	<span>运费 <i>{{infoData.shipping_fee}}</i></span>
  	 	<span>销量 <i>{{infoData.sales_volume}}</i></span>
  	 </div>
  </div>
</template>
<script>
export default {
  props: ['infoData'],
  mounted (){
    console.log(this.infoData)
  }
}  
</script>
<style lang="less">
.subinfo{
	padding:0 .1rem ;
}
.goods-subinfo{
	display: flex;
  .g-left{
  	width:75%;
  	div{
  		padding: .05rem 0;
  	   .newprice{
  	   	font-size: .2rem;
  	   	color: #fc6b87;
  	   }
  	   del{
  	   	margin-left: .1rem;
  	   }
  	   span{
  	   	padding:.03rem .05rem;
  	   	display:inline-block;
  	   	border: #fc6b87 1px solid;
  	   	color: #fc6b87;
  	   	margin-left: .15rem;
  	   }
  	}
  }
}	
.collect{
	width:25%;
	text-align: center;
	border-left:1px solid #ccc;
	i{
		font-size: .32rem;
	}
}
.yunfei{
	line-height: .3rem;
	span:last-child{
		float:right;
		margin-right:30%;
	}
	i{
	  color: #fc6b87;
	  font-style: normal;
	}
}
</style>