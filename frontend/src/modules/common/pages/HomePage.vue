<template>
  <div class="home">
    <NavBar path="/" />
    <h1>Seja bem vindo, {{ username }}</h1>
  </div>
</template>

<script>
import store from '@/helpers/store'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomePage',
  components:{
    NavBar
  },
  data(){
    return{
      username:''
    }
  },

  async mounted(){
    const user = await store.getters.userInfo
    this.username = user.username    
  }  
}
</script>
