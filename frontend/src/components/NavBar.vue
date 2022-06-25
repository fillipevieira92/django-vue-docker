<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid d-flex">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav w-100">
          <li class="nav-item">
            <router-link class="nav-link" :class="path == '/' ? 'active':''" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="path == '/about' ? 'active':''" to="/about">About</router-link>
          </li>        
          <li class="nav-item">
            <a class="nav-link" @click="logout">Logout</a>
          </li>        
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import store from '@/helpers/store'

export default {
  name:'NavBar',
  props:{path: ''},
  methods:{
    logout(){
      store.dispatch('unauthorize')
    }
  }
}
</script>

<style scoped>
a{
  cursor:pointer;
}
</style>
