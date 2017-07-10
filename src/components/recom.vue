<template>	
<ul class="recom-list content">
  <li v-for="item in lists">
  	<div class="recom-title">{{item.goodsName}}</div>
  	<div class="recom-content">
  	   <div class="item-media">
  	   	<img :src="item.goods_img" alt="">
  	   </div>
  	   <div class="item-inner">
  	      <p>{{item.description}}</p>
  	      <div>
  	      	  <span>￥{{item.shop_price}}</span>
  	      	  <span>￥{{item.market_price}}</span>
  	      	  <a href="javascript:;">立即抢购</a>
  	      </div>
  	   </div>
  	</div>
  </li>
</ul>
</template>
<script>
export default {
  props: ['lists']
}	
</script>
<style lang="less">
.recom-list{
background:white;
  li{
  	border-bottom:solid #ccc 1px;
  }
}
.recom-title{
  line-height: .4rem; 
  padding-left: .18rem;
  font-size: .14rem;
  color:#1c1c1c;
}
.recom-content{
  padding-left: .18rem; 
  padding-bottom: .05rem;
  display:-webkit-flex;
  .item-media{
  	width: 1rem;
  	img{
  		width:100%;
  	}
  }	
  .item-inner{
  	float: right;
	flex:1;
	margin-left: .15rem;
	display: flex;
	flex-direction:column;
	justify-content:space-between;
	font-size: .14rem;	
	p{
      line-height: .2rem;
      color: #737373;
	}
	div{
	  span{
	  	display: inline-block;
	  	margin-top: .05rem;
	  }
	  span:nth-child(1){
	  	font-size:.16rem;
	  	color:#fc6b87;
	  };
	  span:nth-child(2){
	  	color:#9c9c9c;
	  	margin-left: .1rem;
	  };
	  a{
	  	display: inline-block;
	  	padding:.05rem;
	  	background: #fc6b87;
	  	border-radius: 3px;
	  	color:white;
	  	float: right;
	  	margin-right: .05rem;
	  }
	}
  }
}	
</style>