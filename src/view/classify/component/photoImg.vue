<template>
  <div class="phototit">
  	<div class="category-title">按功效</div>
  	<div class="category-p">专业的肌肤解决方案</div>
  	<ul class="category-imgs">
  	  <li v-for="item in phoData">
        <router-link :to="{path:'/Clschild',query:{id:item.id,title:item.cat_name}}"><img :src="item.images" alt=""></router-link>
  	  </li>
  	</ul>
  </div>	
</template>
<script>
export default {
  props: ['phoData']
}  
</script>
<style lang="less">
.category-imgs{
    display: flex;
    flex-wrap:wrap;
    border-bottom: 1px solid #ccc;
  li{
    width: 30%;
    margin-right: 5%;
    margin-bottom: 3%;
    img{
      width: 100%;
    }
    &:nth-child(3n){
      margin-right:0;
    };
  }
}
</style>