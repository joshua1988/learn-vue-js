<template>
  <div>
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {

  data() {
    return {
      str: 'Header'
    };
  },

  components: {
    'app-header': AppHeader
  },

  methods: {
    renewStr: function() {
      this.str = 'hi'
    }
  },
};
</script>

<style lang="scss" scoped>

</style>