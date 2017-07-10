<template>
  <nav class="footerNav">
      <div class="lis" v-for="(item,index) in navList">
        <router-link :to="item.path" active-class="active">
          <i :class="item.icon"></i>
          <p>{{item.text}}</p>
        </router-link>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'footerNav',
  data () {
    return {
      navList: [
        {
          icon: 'icon iconfont icon-fuwuchaoshi',
          text: '首页',
          path: '/Home'
        },
        {
          icon: 'icon iconfont icon-fenlei',
          text: '分类',
          path: '/Classify'
        },
        {
          icon: 'icon iconfont icon-bangbangtang',
          text: '美啦',
          path: '/Beauty'
        },
        {
          icon: 'icon iconfont icon-iconfontgouwuche',
          text: '购物车',
          path: '/Shopcar'
        },
        {
          icon: 'icon iconfont icon-wo',
          text: '我的',
          path: '/Mine'
        }
      ]
    }
  }
}
</script>

<style lang="less">

  .footerNav{
    display:flex;
    height:.4rem;
    width:100%;
    background-color:#fff;
    border-top:solid #ccc 1px;
    position:fixed;
    bottom:0;
    z-index: 1111;
    .lis{
      padding-top: 3px;
      flex:1;
      text-align:center;
      a{
        color:#646464;
      }
      .active{
        color: #fc6b87;
      }
    }
    .icon{
      font-size:.16rem; 
    }
  
}
</style>
<!-- Add "scoped" attribute to lismit CSS to this component only -->
