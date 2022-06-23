<template>
  <div class="content">
    <router-view class="container my-auto"></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
