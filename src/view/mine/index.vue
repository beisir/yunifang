<template>
  <div class="mine box">
  	<div class="min-title">
  		<h3>登录</h3>
  		<i class="icon iconfont icon-left"></i>
  	</div>	
	<div class="content mine-box">
	   <div class="min-input">
	   	<div class="user">
	   	   <input type="text" placeholder="手机号">
	   	</div>	
	   	<div class="user user2">
	   		<input type="text" placeholder="手机号">
	    	<div class="btn">获取验证码</div>
	   	</div>
	   	<div class="user">
	   		<div class="submit">登录</div>
	   	</div>	
	   </div> 

	</div>
  </div>
</template>

<script>
export default {
  components: {
  }	
}	
</script>
<style lang="less">
.mine-box{
	background: #efefef;
}


.min-input{
	width:75%;
	margin: 30% auto;
}
.user{
  width:100%;
  margin-top: .1rem;
  display:-webkit-flex;
  align-items:center;
  input{
	width: 100%;
	padding:.1rem;
	box-sizing:border-box;
	border:none;
	border-radius:3px;
  }
  
}
.user2{
	input{
	 width:60%;
	}
	.btn{
  		color: #fe7b7a;
		padding:0 .1rem;
		margin-left: .1rem;
		line-height: .35rem;
		border:solid 1px #fe7b7a;
		text-align: center;
	    box-sizing:border-box;
	    border-radius:3px;
	    background: white;

	}
}
.submit{
    font-size: .14rem;
	width:100%;
	text-align: center;
	line-height: .35rem;
    background:#fe7b7a;
    color:white;
    margin-top: .2rem;
    border-radius:3px;
}
  

</style>