import { createStore } from 'vuex'
import jwt_decode from 'jwt-decode'

const store = createStore({
  state: {
    access: {
      refreshToken: '',
      auth: false,
      token: '',      
    },
  },

  getters:{
    userAuth() {
      return window.localStorage.getItem('AUTH');
    },
    
    userInfo() {
      return jwt_decode(window.localStorage.getItem('UID'))
    }
  },

  mutations: {
    authorize: (state, access) => {

      state.access.refreshToken = access.refreshToken;
      state.access.token = access.token;
      state.access.auth = true;
            
      window.localStorage.setItem('UID', state.access.token)
      window.localStorage.setItem('AUTH', state.access.auth)
      
    },

    unauthorize: (state) => {

      window.localStorage.removeItem('AUTH')
      window.localStorage.removeItem('UID')      
      state.access.auth = false
      window.location.reload()

    },

  },

  actions: {

    authorize({commit}, access) {
      commit('authorize', access);
    },

    unauthorize({commit}){
      commit('unauthorize')
    },

  },  
})

export default store
