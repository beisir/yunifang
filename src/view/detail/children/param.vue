<template>
  <div class="parmas white">
  	<ul>
  		<li v-for="item in params">
          <span>{{item.attr_name}}</span>
          <i>{{item.attr_value}}</i>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed:mapGetters(['params']),
}
</script>
<style lang="less" scoped>
ul{
	padding:0 .1rem;
	li{
		line-height: .4rem;
		font-size: .14rem;
		i{
			float: right;
			font-style: normal;
		}
	}
}	
</style>