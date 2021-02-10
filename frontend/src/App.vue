<template>
  <div id="app">
    <BaseHeader/>
    <router-view/>
    <BaseFooter/>
  </div>
</template>
<script>
import BaseHeader from './components/BaseHeader'
import BaseFooter from './components/BaseFooter'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

html, body {
  padding: 0;
  margin: 0;
  background: #f7f7f7;
}
body {
  padding-top: 90px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
</style>
