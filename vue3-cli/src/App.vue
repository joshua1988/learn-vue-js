<template>
  <div>
    <app-header v-bind:title="message"></app-header>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    'app-header': AppHeader,
    LoginForm: LoginForm
  },
  data() {
    return {
      message: '컴포넌트 예제'
    }
  },
}
</script>

<style scoped>

</style>