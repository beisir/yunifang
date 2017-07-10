<template>
  <div class="phototit">
  	<div class="category-title">按功效</div>
  	<div class="category-p">专业的肌肤解决方案</div>
  	<ul class="category-uls">
  	  <li v-for="item in titData" :style="{'background':item.bgcolor}">
        <router-link :to="{path:'/Clschild',query:{id:item.id,title:item.cat_name}}">
          <a href="#">#{{item.cat_name}}#</a>
  	  	  <p>{{item.act_text}}</p>
  	    </router-link> 
      </li>  	  
  	</ul>
  </div>	
</template>
<script>
export default {
  props: ['titData']
}  
</script>
<style lang="less">
.phototit{
  padding: .06rem;
}	
.category-title{
  line-height: .34rem;
  text-align: center;
  font-size: .14rem;
  &::before,&::after{
  	content:'-';
  };	
}
.category-p{
  line-height: .18rem;
  padding: .04rem;
  color: #969696;
  text-align: center;	
}
.category-uls{
    border-bottom: 1px solid #ccc;
	overflow: hidden;
  li{
  	width: 49%;
  	float: left;
  	text-align: center;
  	padding: .1rem 0;
  	margin: .05rem 0;
  	background: #f6e5e2;
  	margin-left:1% ;
  }
}
</style>