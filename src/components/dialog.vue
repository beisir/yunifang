<template>
  <div class="dialog" v-if="dialog">
	<div class="dialog-content">
	  <div class="dialog-title">{{}}</div>	
	  <div class="dialog-btn"><span @click="isdelfn(false)">取消</span><span  @click="isdelfn(true)">确定</span></div>	
	</div>
  </div>	
</template>
<script>
import {mapGetters,mapActions} from 'vuex'	
export default {
  computed: mapGetters(['dialog','isdel'])	,
  methods: mapActions(['isdelfn'])
}
</script>	
<style lang="less">
.dialog{
  width:100%;
  height:100%;
  position: fixed;
  z-index: 10000;
  top:0;
  background:rgba(0,0,0,.5);
  display: -webkit-box;
  -webkit-box-pack:center;
  -webkit-box-align:center;
}	
.dialog-content{
	width:70%;
	background: white;
	border-radius: 5px;
	text-align:center;
	overflow: hidden;
}
.dialog-title{
	line-height: .4rem;

}
.dialog-btn{
  line-height: .4rem;
  span{
    display: block;
    width:50%;
    float: left;
    &:first-child{
    	background:#fbdbdc;
    	color:#fc6b87;
    };
    &:last-child{
    	background:#fc6b87;
    	color:#fff;
    };
  }
}
</style>