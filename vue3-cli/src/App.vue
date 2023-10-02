<template>
  <AppHeader 
    v-bind:appTitle="message"
    v-on:change="changeMessage">
  </AppHeader>
</template>

<script>
// import 컴포넌트이름 from './컴포넌트 경로'
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    // '컴포넌트이름': 컴포넌트 내용
    // 'app-header': AppHeader,
    // 'AppHeader': AppHeader,
    // AppHeader: AppHeader,
    AppHeader
  },
  data() {
    return {
      message: '앱 헤더 컴포넌트'
    }
  },
  methods: {
    changeMessage() {
      this.message = '변경됨'
    }
  }
}
</script>

<style scoped>

</style>