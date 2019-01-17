<template>
  <div id="app">
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from './components/ParentComponent.vue'
import userModule from './store/user'

export default {
  name: 'app',
  created(){
    this.$store.registerModule('user', userModule)
    this.$store.dispatch('user/fetchUser')
  },
  components: {
    ParentComponent
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
