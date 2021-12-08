import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg:'Vuex desde cero.',
    amigos: [],
    amigo: null
  },
  mutations: {
    addAmigo(state){
      state.amigos = [state.amigo,...state.amigos]
    }
  },
  actions: {
    addAmigoAction(context){
      context.commit('addAmigo');
    }
  },
  modules: {
  },
  getters:{
    mensaje(state){
      return state.msg;
    }
  }
})
