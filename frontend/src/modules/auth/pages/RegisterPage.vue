<template>
  <main>
    <h2>Cadastro</h2>
    <form @submit.prevent="register" class="mb-3">
      <input @keyup="validForm" placeholder="Usuário" type="text" v-model="form.username" class="form-control w-100 mb-2" required>
      <input @keyup="validForm" placeholder="Primeiro nome" type="text" v-model="form.first_name" class="form-control w-100 mb-2" required>
      <input @keyup="validForm" placeholder="Último nome" type="text" v-model="form.last_name" class="form-control w-100 mb-2" required>
      <input @keyup="validForm" placeholder="Email" type="text" v-model="form.email" class="form-control w-100 mb-2" required>

      <input @keyup="validForm" placeholder="Senha" type="password" v-model="form.password" class="form-control w-100 mb-2" required>
      <input @keyup="validForm" placeholder="Confirmar senha" type="password2" v-model="form.password2" class="form-control w-100 mb-4" required>

      <input :class="formValid ? '':'disabled'" type="submit" class="btn btn-success w-100" value="Cadastrar">
    </form>
    <p>Já tem cadastro? <router-link to="/login">Login.</router-link></p>
  </main>
</template>

<script>
import { apiRegister } from '../service'

export default {
  name:'RegisterPage',
  data:() => {
    return{
      form:{
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: "",
      },
      formValid: false
    }
  },
  methods:{
    register(){
      apiRegister(this.form)
    },

    validForm(){
      if (
        this.form.username != "" &&
        this.form.first_name != "" &&
        this.form.last_name != "" &&
        this.form.email != "" &&
        this.form.password != "" &&
        this.form.password2 != "" &&
        this.form.password == this.form.password2
      ) {
        this.formValid = true;
      } else {
        this.formValid = false;
      }
    }
  }

}
</script>

<style scoped>
main{
  width: 100%;
  max-width: 400px;  
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
}
h2{
  text-align: left;
}
main>p>a {
  font-weight: bold;
  color: #2c3e50;
  transition: 150ms all ease-in-out;
}

main>p>a:hover{
  color: #32875f;
}
</style>
