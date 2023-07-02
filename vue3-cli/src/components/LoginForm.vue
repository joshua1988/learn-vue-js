<template>
  <form v-on:submit="loginUser">
    <div>
      <label for="">id: </label>
      <input type="text" v-model="username">
    </div>
    <div>
      <label for="">password: </label>
      <input type="password" v-model="password">
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    loginUser(event) {
      event.preventDefault();
      // console.log('hi')

      axios.post('https://jsonplaceholder.typicode.com/use/', {
        username: this.username,
        password: this.password
      }).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>