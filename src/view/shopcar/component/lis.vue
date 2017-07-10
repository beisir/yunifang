<template>
  <li>
	<div class="shop-info">
	  <label for="">
		<div class="radio" @click="check">
			<i class="icon iconfont" :class="{'icon-xin-1':radio}"></i>
		</div>
	  </label>
	  <div class="item-inner">
	  	<div class="item-imgs">
	  		<img :src="item.imgs" alt="">
	  	</div>
	  	<div class="item-text">
	  		<p>{{item.info}}</p>
	  		<div class="item-price">
	  			<b>￥{{item.price}}</b>
	  			<span>数量{{item.num}}件</span>
	  		</div>
	  	</div>
	  </div>
	</div>
	<div class="addCart shop-num" v-show="comm.comstate">
  	    <span class="cart-title">购买数量</span>
		<div class="cart-btns">
		  <span class="cartprv">-</span>
		  <span class="cartnum">1</span>
		  <span class="cartadd">+</span>
		</div>			
  	</div>
  </li>	
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  props: ['item'],
  computed: {
    ...mapGetters(['comm','radio'])
  },
  methods:{
  	...mapActions(['check'])
  }	
}	
</script>
<style></style>