import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store =new Vuex.Store({
  state:{
    count: 1,
    showTimePicker:false,
    isHome:true,
    isApp:false,
  },
  getters :{
    results:state =>{
      return state=state+5
    }
  },
  mutations:{
    showPicker:(state,status)=>{
      state.showTimePicker = status
    },
    show:(state,status)=>{
      state.isHome=status;
      state.isApp=!status;
    }
  },
  actions :{
    showTimePicker({ commit }, status) {
      commit('showPicker', status)
    },
    showTab({commit},status){
      commit('show',status);
    }
  }
})

export default store
