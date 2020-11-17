<template>
  <div id="app">
     <transition name="router-anim" enter-active-class="animated fadeIn">
        <router-view></router-view>
     </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  components: {
  },
  data () {

  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px; */

  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap')
}
</style>
