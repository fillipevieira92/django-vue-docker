import http from '@/helpers/axios'

function apiLogin(data) {
  http.post("auth/login/", data).then(res => console.log(res)) 
}

function apiRegister(data) {
  http.post("auth/register/", data).then(res => {
    console.log(res)
    this.$router.push("/login")
  }).catch(error => {
    console.log(error.response.data)
  }) 
}

export {
  apiLogin,
  apiRegister
}