<template>
  <div>
    <p id="titlePhrase">Sign in with Umich Email:</p>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
  import auth from '@/auth'

  export default {
    name: 'auth',
    mounted() {
      auth.authForm('#firebaseui-auth-container')
    }
  }
</script>

<style>
  @import "../../node_modules/firebaseui/dist/firebaseui.css";
  #titlePhrase {
    font-size: 30px;
  }
</style>