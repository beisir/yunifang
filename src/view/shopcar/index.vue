<template>
  <div class="shopcar box">
	<div class="title min-title">
		<h3>购物车</h3>
		<a @click="compile" :class="{'red':comm.comstate}">{{comm.comtext}}</a>
	</div>
	<div class="content shop-box">
  	   <router-view></router-view>
	</div>	
  	<footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/footerNav'
import {mapActions,mapGetters} from 'vuex'
export default {
  components: {
  	footerNav
  },
  created(){

  	// this.$router.push('/Shopcar/empty')
  	this.$router.push('/Shopcar/shoplist')
  },
  computed :{
    ...mapGetters(['comm'])
  },
  methods: {
    ...mapActions(['compile'])
  }	
}	
</script>

<style>
.shop-box{
  background:#efefef;
}	
.red{
  color: red;
}
</style>