import http from '@/helpers/axios'
import router from '@/helpers/router'
import store from '@/helpers/store'


async function apiLogin(data) {
  
  await http.post("auth/login/", data).then(res => {

      const access = {
        refreshToken:res.data.refresh,
        token:res.data.access,
        auth:true,
      }

      store.dispatch('authorize', access)
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