<template>
  <div class="login">
    <h2>Authenticate to continue:</h2>
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/login.vue'
export default {
  name: 'Login',
  components: {
    login
  }
}
</script>