<template>
  <div class="dity">
  	<div>
  		<img v-for="item in dity" :src="item.url" alt="">
  	</div>
  </div>	
</template>	
<script>
import {mapGetters} from 'vuex'
export default {
  computed:mapGetters(['dity'])
}	
</script>	
<style scoped>
  img{
  	width:100%;
  }	
</style>