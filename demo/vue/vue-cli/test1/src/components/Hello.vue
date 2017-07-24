<template>
  <div class = 'helloWrap'>
    <myHeader></myHeader>
    <tab></tab>
  </div>
</template>

<script>
import myHeader from './header/Header'
import tab from './tab/Tab'
import myContent from './content/Content'
export default {
  name: 'hello',
  components: {
    myHeader,
    tab,
    myContent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goto () {
      this.$router.push('/foo');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.helloWrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
