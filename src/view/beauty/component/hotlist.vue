<template>
  <div class="hotlist">
  	<div class="act-title white">精选推荐</div>
	<div class="hot-content">
	  <div class="hot-card" v-for="item in hotData">
	   	<div class="pic">
	   		<img :src="item.imageUrl" alt="">
	   		<span>{{item.topicName}}</span>
	   		<p>{{item.title}}</p>
	   	</div>
	   	<div class="info">
	   		<p>{{item.description}}</p>	
	   	</div>
	   	<div class="data">
	   	  <span>
	   	  	<i class="icon iconfont icon-follow"></i>
	   	  	{{item.browsingCount}}
	   	  </span>
	   	  <span>
	   	  	<i class="icon iconfont icon-xin"></i>
	   	  	{{item.praiseCount}}
	   	  </span>
	   	  <span>
	   	  	<i class="icon iconfont icon-xinxi1"></i>
	   	  	{{item.commentSize}}
	   	  </span>
	   	</div>
	  </div>	
	</div>
  </div>	
</template>
<script>
export default {
  props: ['hotData']	
}	
</script>
<style lang="less">
.hot-content{
	background: #eee;
}
.hot-card{
  background: white;	
  margin-bottom: .1rem;
}
.pic{
  position: relative;
  img{
  	width:100%;
  	
  }	
  span,p{
      background: rgba(0,0,0,.4);
  	  color:white;
  	  position: absolute;
  	}
  	span{
	  top:.1rem;
	  right:.1rem;
	  padding:.05rem;
  	}
  	p{
  	  bottom:0;
  	  width:100%;
  	  padding: .05rem .1rem;
  	  box-sizing:border-box;
  	  text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
  	}
}	
.info{
    color:#646464;
	padding:.1rem;
	box-sizing: border-box;
}
.data{
	color:#aeadad;
	padding:.05rem .1rem .1rem .1rem;
  span{
  	margin-right:.1rem;
  	&:last-child{
  		float:right;
  	};
  }
}
</style>