<template>
  <main class="container">
    <div v-if="msg" class="alert alert-danger alert-dismissible fade show" role="alert">
      <i class="bi bi-exclamation-circle"></i>
      {{ msg }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>

    <div class="form-login">
      <h2>Login</h2>
      <form @submit.prevent="login" class="mb-3">
        <input
          @keyup="validForm"
          placeholder="Usuário"
          type="text"
          v-model="form.username"
          class="form-control w-100 mb-3"
          required
        />
        <input
          @keyup="validForm"
          placeholder="Senha"
          type="password"
          v-model="form.password"
          class="form-control w-100 mb-3"
          required
        />

        <input
          v-bind:class="formValid ? '' : 'disabled'"
          type="submit"
          class="btn btn-success w-100"
          value="Login"
        />
      </form>
      <p>
        Não tem cadastro? <router-link to="/register">Cadastre-se!</router-link>
      </p>
    </div>
  </main>
</template>

<script>
import { apiLogin } from "../service";

export default {
  name: "LoginPage",
  data: () => {
    return {
      form: {
        username: "",
        password: "",
      },
      formValid: false,
      msg: null,
    };
  },
  methods: {
    async login() {
      const res = await apiLogin(this.form);
      if (res) {
        this.msg = "Usuário ou senha inválidos.";
      } else {
        this.msg = null;
      }
    },

    validForm() {
      this.formValid = this.form.username != "" && this.form.password != "";
    },
  },
};
</script>

<style scoped>
main {
  width: 100%;
  max-width: 400px;
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
  margin-top: 5rem;
  background-color: #fff;
  color: #2c3e50;
}
h2 {
  text-align: left;
}
main > .form-login > p > a {
  font-weight: bold;
  color: #2c3e50;
  transition: 150ms all ease-in-out;
}

main > .form-login > p > a:hover {
  color: #32875f;
}
</style>
