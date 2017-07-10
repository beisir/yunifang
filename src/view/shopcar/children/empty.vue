<template>
  <div class="empty">
  	<div class="empty-list"></div>
	<div class="empty-img"></div>
	<div class="empty-content">
		<p>购物车还是空的，快去逛逛</p>
		<router-link to="/Home">逛一逛</router-link>	
	</div>
  </div>
</template>
<style lang="less">

.empty-img{

  width:30%;
  height:1.2rem;
  background:url(//wimg.yunifang.com/yunifang/wap/images/cart.png) no-repeat center;
  background-size: 100% auto;
  margin:0 auto; 
  	margin-top: 1rem;
}	
.empty-content{
	width:30%;
	margin: 0 auto;
	text-align: center;
	p{
	   line-height: .2rem;
	   font-size: .14rem;
	   color: #323232;
	}
	a{
		display: block;
		padding:.05rem;
		background: #fc6b87;
		color: white;
		border-radius: 3px;
		margin-top: .1rem;
	}
}
</style>	