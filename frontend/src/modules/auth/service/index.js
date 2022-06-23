import http from '@/helpers/axios'
import router from '@/helpers/router'
import store from '@/helpers/store'


async function apiLogin(data) {
  
  let self = this
  let user = {
    auth: false,
    token: '',
    refreshToken: '',
    username: '',
    email: ''
  }

  await http.post("auth/login/", data).then(res => {

      user.auth = true;
      user.token = res.data.access;
      user.refreshToken = res.data.refresh;

      store.dispatch('authorize',{user:user})
      router.push({name: 'home'})      

    }).catch(err => {

      console.log(err)
      
    })  
}

async function apiRegister(data) {

  await http.post("auth/register/", data).then(res => {
    router.push({name: 'login'})
  }).catch(error => {
    console.log(error.response.data)
  }) 
}

export {
  apiLogin,
  apiRegister
}