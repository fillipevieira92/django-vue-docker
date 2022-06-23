import { createStore, commit } from 'vuex'

const store = createStore({
  state: {
    user: {
      auth: false,
      token: '',
      refreshToken: '',
      username: '',
      email: ''
    },
  },

  getters:{
    userAuth () {
      return window.localStorage.getItem('user.auth') ? true:false;
    },
    user (state){
      return state.user
    }
  },

  mutations: {
    authorize: (state, user) => {
      console.log(user)
      state.user.auth = true;
      state.user.token = user.token;
      state.user.refreshToken = user.refreshToken;
      state.user.username = user.username;
      state.user.email = user.email
      
      window.localStorage.setItem('user.auth', state.user.auth)
      window.localStorage.setItem('user.token', state.user.token)
      window.localStorage.setItem('user.refreshToken', state.user.refreshToken)
      window.localStorage.setItem('user.username', state.user.username)
      window.localStorage.setItem('user.email', state.user.email)
    },
    unauthorize: (state) => {
      window.localStorage.removeItem('user.auth')
      window.localStorage.removeItem('user.token')
      window.localStorage.removeItem('user.refreshToken')
      window.localStorage.removeItem('user.username')
      window.localStorage.removeItem('user.email')
    }
  },

  actions: {
    authorize({commit}, user) {
      commit('authorize', user.user);
    },
    unauthorize({commit}){
      this.commit('unauthorize')
    }
  },  
})

export default store
