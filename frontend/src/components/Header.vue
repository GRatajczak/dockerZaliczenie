<template>
  <nav class="nav">
    <router-link :to="{ name: 'List' }">Lista</router-link>
    <router-link :to="{ name: 'About' }">O nas</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
  .nav {
    width: 100%;
    height: 90px;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
  }
</style>