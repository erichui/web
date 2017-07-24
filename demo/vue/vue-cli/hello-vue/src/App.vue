<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click= 'goto'>button</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goto () {
      this.$router.push('/header')
    }
  },
  created () {
    console.log(this.$router)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
