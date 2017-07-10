<template>
  <div class="nav-title white">
	<ul class="mid-nav">
		<li v-for="item in navData">
			<a class="circle">
				<img :src="item.image">
			</a>
			<div class="nav-text">{{item.title}}</div>
		</li>
	</ul>
  </div>	
</template>
<script>
export default {
  props: ['navData']
}
</script>
<style lang="less">
.nav-title{
	padding:0 .1rem;
  padding-top:.1rem;  
  ul{
  overflow:hidden;
    text-align: center;
    li{
      width:25%;
      float: left;
    }	
  }
  .circle{
    display: block;
    width:.34rem;
    margin:0 auto; 
    img{
      width:100%;
    }

  }
  .nav-text{
    padding: .05rem 0;
  }
}	
  
</style>