<template>
  <div>
    <h1>Router</h1>
    <div>
      <router-link to="/main">Main</router-link>
      <router-link to="/login">Login</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>