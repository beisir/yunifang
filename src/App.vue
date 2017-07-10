<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import '@/static/fonts/iconfont.css'
import '@/static/css/animate.css'
export default {
  name: 'app'
}
</script>

<style lang="less">
.white{
	background:white;
}
.box{
   position: absolute;
   left:0;
   bottom:0;
   right:0;
   top:0;
   display: flex;
   flex-direction:column;
	.content{
		flex:1;
		overflow-y:scroll; 
	}
}
.act-title{
  line-height: .3rem;
  text-align: center;
  &::before,&::after{
    content: '—';
    display: inline-block;
    padding: 0 .1rem;
  }
} 
.min-title{
  font-size: .14rem;
  position: relative;
  line-height: .38rem;
  background:white;
    border-bottom: 1px solid #ccc;
  h3{
    text-align: center;
      font-weight: normal;
  }
  a{
    position: absolute;
    right:.15rem;
    top:0;
  }
}
.icon-left{
  font-size: .2rem;
  position: absolute;
  left: .15rem;
  top:0;
  color: #fe7b7a;
}


.subject-list{
  overflow-x:scroll; 
  .subject-ss{
    display: -webkit-box;
  dl{
    float: left;
    width:29.3%;
    margin-left: 4%;
    .dds{
      
      line-height: .18rem;
    }
    dd{
      position: relative;
      span{
        color:#fc6b87;
      }
      del{
        position: absolute;
        right:-.1rem;
        color:#5f646e;
      }
    }
    img{
      width: 100%;
    }
  } 
  }
}


.addCart{
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
