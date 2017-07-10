<template>
  <div class="delog" v-if="isshow" >
  	<transition-group enter-class="animated bounceOutDown" leave-class="animated bounceInDown">	
  	<div class="mark animated " @click="showMark" :key="1"></div>
  	<div class="delog-content white animated bounceInUp bounceInDown" :key="2">
  		<div class="delog-msg">
  			<div class="delog-left">
  				<img :src="ims=delData.goods_img" alt="">
  			</div>
  			<div class="delog-right">
  			   <h3>￥{{delData.shop_price}}</h3>
  			   <p>库存{{delData.stock_number}}件</p>
  			   <p>限购{{delData.restrict_purchase_num}}件</p>
  			</div>
  		</div>
  		<div class="select" v-if="delData.goodsCombinations">
  			<span v-for="val in delData.goodsCombinations" :class="{'red':val.isChecked}">{{val.typeName}}</span>
  		</div>
  		<div class="addCart">
  		    <span class="cart-title">购买数量</span>
			<div class="cart-btns">
			  <span class="cartprv" @click="addnum('prev')">-</span>
			  <span class="cartnum">{{num}}</span>
			  <span class="cartadd" @click="addnum('add')">+</span>
			</div>			
  		</div>
  		<div class="footer-btn oks">
			<span class="liji" @click="oks">确定</span>
		</div>
  	</div>
  </transition-group>	
  </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  props: ['delData'],
  data (){
  	return {
  		ims:'',
  		num:1
  	}
  },
  computed:{
  	...mapGetters(['isshow'])
  },
  methods:{
  	addnum (res){
  	  if(res=='add'){
  	    this.num ++;  
  	  }else{
  	  	this.num = this.num <=1 ? 1 :this.num-1
  	  }
  	},
  	oks (){
  	  var that = this
		var list = window.localStorage['list'];
		var a = 1;
		this.arr = list ? JSON.parse(list) : []
		this.arr.forEach(function(val,i){
			if(val.info == that.delData.goods_name){
				that.arr[i].num += that.num;
				window.localStorage.setItem('list',JSON.stringify(that.arr))
				a = 0;
				that.arr = []
				return
			}
		})
		if(a){
			var listParams = {
				info:that.delData.goods_name,
				imgs:that.ims,
				classify: that.classify,
				price:that.delData.shop_price,
				num: that.num
			} 
			this.arr.unshift(listParams);
			window.localStorage.setItem('list',JSON.stringify(this.arr))
			that.arr = []
			// this.$store.commit('dialong')
		}
		this.$store.state.isshow = false	
  	},
  	...mapActions(['showMark'])
  }	
}	
</script>
<style lang="less">
.mark{
	position: fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background: rgba(0,0,0,.5);
	z-index: 100;
}

.delog-content{
	width:100%;
	position: absolute;
	bottom:0;
	z-index: 1000;			
}	
.delog-msg{
	padding:.1rem 0;
	overflow: hidden;
}
.select{
	padding: .05rem;
	span{
		display: inline-block;
		padding: .05rem .1rem;
		margin:0 .1rem;
		border-radius:3px;
		background: #e7e7e7;
		color: #000;
	}
	.red{
		background: #fc6b87;
		color: white;
	}
}
.delog-left{
	width:.5rem;
	height: .5rem;
	margin:0 .2rem;
	box-sizing:border-box;
	float: left;
	img{
		width: 100%;
	}
}
.delog-right{
	float: left;
	h3{
		font-size: .18rem;
		color:#fc6b87;
	}
	p{
		line-height: .2rem;
		color: #323232;
	}
}
.addCart{
	border-top:solid #ccc 1px;
  padding:.1rem .2rem;
  .cart-btns{
  	float: right;
  	display: flex;
  	span{
	  padding: .02rem .1rem;
	  border:solid #ccc 1px;
	}
  }	
}
.cart-title{
	font-size: .14rem;
}
.oks{
 text-align: center;
 .liji{
 	background:#fc6b87;
 }
}
</style>
