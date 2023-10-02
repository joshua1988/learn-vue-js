<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">change</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello');
    const changeMessage = () => {
      message.value = 'Hi';
    }

    return { message, changeMessage }
  }
}
</script>