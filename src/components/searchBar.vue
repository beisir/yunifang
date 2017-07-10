<template>
  <div class="search white title">
  	<i class="icon iconfont icon-sousuo-sousuo"></i>
  	<input type="text" placeholder="请输入商品名称">
  </div>	
</template>
<style lang="less">
.search{
  width: 100%;
  padding: .05rem .1rem; 
  box-sizing:border-box;
  border-bottom: solid 1px #ccc; 
  position: relative;
  input{
  	line-height: .28rem;
  	border: none;
  	padding-left: .3rem;
  	width: 100%;
  	box-sizing:border-box; 
  	background: #f5f5f5;
  	border-radius:3px; 
  }
  i{
  	color: #fe5c7b;
  	position: absolute;
  	top:.1rem;
  	left:.15rem;
  }

}	
</style>
