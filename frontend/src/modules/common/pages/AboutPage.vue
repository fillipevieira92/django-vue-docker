<template>
  <div class="about">
    <NavBar path="/about" />
    <div class="about-content container">
      <h1>DJANGO | VUE | DOCKER</h1><br/>
      <p>O intuito deste projeto é para facilitar e agilizar o processo inicial do desenvolvimento de um sistema.</p>
      <p>O projeto já conta com authenticação por JWT, tela de login e de cadastro.</p>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "AboutPage",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.about-content{
  font-weight: bolder !important;  
}

</style>
