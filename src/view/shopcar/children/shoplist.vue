<template>
  <div class="shoplist">
  	<ul>
       <li v-for="(item,i) in list">
        <div class="shop-info">
          <label for="" @click="check(i)">
          <div class="radio">
            <i class="icon iconfont" :class="{'icon-xin-1':item.id}"></i>
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
            <span class="cartprv" @click="addnum({type:'prev',ind:i})">-</span>
            <span class="cartnum">{{item.num}}</span>
            <span class="cartadd" @click="addnum({type:'add',ind:i})">+</span>
          </div>      
          </div>
        </li>
  	</ul>
  	<div class="checkall">
  	  <label for="" @click="checkAll()">
  	    <div class="radio">
  	    	<i class="icon iconfont" :class="{'icon-xin-1':radioall}"></i>
  	    </div>
  	  </label>
  	  <span>全选</span>
  	  <div class="del" @click="delfn">{{comm.del}}</div>
      <span class="sum" v-if="!comm.comstate">总计￥{{sum}}元</span>
  	</div>
    <Dialogs></Dialogs>
  </div>	
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import Dialogs from '@/components/dialog'
export default{
  data (){
    return {

    }
  },
  computed: {
    ...mapGetters(['comm','radio','list','radioall','sum'])
  },
  created (){
    this.getData()
  },
  methods: {
    getData(){
      var list = window.localStorage['list']
      var result = JSON.parse(list)
      result.forEach(function(val){
        val['id'] = false
      })
      this.$store.state.list = result
    },
   ...mapActions(['check','checkAll','delfn','addnum'])
  },
  components: {
    Dialogs
  }
}  
</script>
<style lang="less">
.shoplist li{
	padding:.05rem 0;
	background: white;
  -webkit-transition: height .6s;
  -moz-transition: height .6s;
  -ms-transition: height .6s;
  -o-transition: height .6s;
  transition: height .6s;
}	
.icon-xin-1{
  display: inline-block;
  font-size: .1rem;
  color:red;
  margin-top: .02rem;
}
.shop-info{
  display:flex;
  label{
  width:.4rem;
  .radio{
  	width:.15rem;
  	height:.15rem;
  	border:solid #ccc 1px;
  	border-radius: 50%;
  	margin: 50% auto;
    text-align: center;
  }
}	

}

.checkall {
  width:100%;
  background: white;
  padding:.05rem;
  box-sizing:border-box;
  overflow: hidden;
  position: absolute;
  bottom:.41rem;
  label{
  	display: inline-block;
	width:.15rem;
  	height:.15rem;
  	border:solid #ccc 1px;
  	border-radius: 50%;;
  	float: left;
  	margin-left: .08rem;
    .radio{
      text-align: center;
    }
  }

    span{
	    margin-left: .2rem;
	    display: inline-block;
	}
	.del{
		float:right; 
		padding:.05rem .15rem;
		background: #fc6b87;
		margin-right: .2rem;
		color: white;
		border-radius: 3px;
	}
  .sum{
    float: right;
    margin-right: .1rem;
  }
	label,span{
		margin-top: .05rem;
	}
}
.item-inner{
  flex:1;
  display: flex;
  .item-imgs{
  	width:.6rem;
  	img{
  	  width:100%;
  	}
  }
  .item-text{
  	float: left;
  	padding-left: .1rem;
  	p{
  		width:100%;
  		height:.4rem;
  		font-size: .14rem;
  	}
  }
  .item-price{
  	b{
  		color: #fc6b87;
  		margin-right: .2rem;
  		font-size: .14rem;
  	}
  }
}
.shop-num{
  .cart-title{
  	margin-left: .2rem;
  }
}
</style>