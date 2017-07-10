import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    isshow:false,
    params:[],
    dity:"",
    comm:{comtext:'编辑',del:'结算',comstate:false},
    list:[],
    radio:false,
    radioall:false,
    sum:0,
    dialog:false,
    isdel:false
  },
  getters:{
    params (state){
      return state.params
    },
    dity (state){
      var arr = ""
      if(state.dity!=""){
        var arr = JSON.parse(state.dity)
      }
      return arr
    },
    isshow (state){
      return state.isshow
    },
    comm (state){
      if(state.comm.comstate){
        return {comtext:'完成',del:'删除',comstate:true}
      }else{
        return {comtext:'编辑',del:'结算',comstate:false}
      }
    },
    radio (state){
      return state.radio
    },
    list (state){
      return state.list
    },
    radioall (state){
      return state.radioall
    },
    sum (state){
      return state.sum.toFixed(2)
    },
    dialog (state){
      return state.dialog
    },
    isdel (state){
      return state.isdel
    }
  },
  mutations:{
  	addShop (state){
  		state.isshow = true
  	},
    showMark (state){
      state.isshow = false
    },
    compile (state){
      if(state.comm.comstate){
        state.comm = {comtext:'编辑',del:'结算',comstate:false}
      }else{
        state.comm = {comtext:'完成',del:'删除',comstate:true}
      } 
    },
    check (state,i){
      state.list[i].id =  !state.list[i].id
    },
    checkAll (state){
      state.radioall = !state.radioall
      state.list.forEach(function(val){
        val.id = state.radioall  
      })
    },
    arrSum (state,ind) {
      state.sum = 0;
      var num = 0;
      state.list.forEach(function(val){
        if(val.id){
          num++;
          state.sum += val.num*val.price;
        }else{
          state.radioall = false
        } 
      })
      if(state.list.length!=0){
        state.radioall = num==state.list.length ? true :false 
      }else{
        state.radioall = false
      }
    },
    delfn (state){
        state.list.forEach(function(val,i){
          if(val.id){
            state.list.splice(i,1);
          } 
        })
      window.localStorage['list'] = JSON.stringify(state.list)
    },
    addnum (state,obj){
      state.list.forEach(function(val,i){
        if(i==obj.ind){
          val.num = obj.type =='add' ? val.num+1 : val.num-1
          val.num = val.num<=1 ? 1 : val.num
        }
      })
    },
    isdelfn (state,ble){
      console.log(ble)
      state.isdel = ble
    }
  },
  actions:{
  	addShop ({commit}){
		  commit('addShop')
	  },
    showMark ({commit}){
      commit('showMark')
    },
    compile ({commit},state){
      commit('compile')
      commit('arrSum')
    },
    check ({commit},i){
      commit('check',i)
      commit('arrSum')
    },
    checkAll ({commit}){
      commit('arrSum')
      commit('checkAll')      
    },
    delfn ({commit,state}){
      if(state.comm.comstate){
        commit('delfn')
        commit('arrSum')                
        console.log(state.comm.comstate)
      }else{

      }
    },
    addnum ({commit},obj){
      commit('addnum',obj)
      // commit('arrSum')
    },
    isdelfn ({commit},ble){
      commit('isdelfn',ble)
    }
  }	
})