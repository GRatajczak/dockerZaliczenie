<template>
  <nav class="nav">
    <div class="brand">
      <img alt="Docker Notes" src="../assets/logo.png"> DockerNotes
    </div>
    <router-link :to="{ name: 'Notes' }">Lista</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Header'
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
    display: flex;
    justify-content: center;
    align-items: center;
    .brand {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      font-weight: 700;
      font-size: 21px;
    }
    img {
      height: 70px;
      margin: 10px;
    }
    a {
      font-size: 21px;
    }
  }
</style>
