<template>
  <div id="app">
    <v-app>
      <v-card flat tile>
        <v-toolbar>
          <v-toolbar-title>
            <router-link to="/" class="toolbar-title">Group-Finder</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-if="!user" to="/auth" text>Log in</v-btn>
            <v-btn v-else @click="logOut" text>Log out</v-btn>
            <v-btn to="/join" text>Join</v-btn>
            <v-btn to="/create" text>Create</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>

      <v-content>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import auth from "@/auth";

export default {
  name: "auth-success",
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
  },
  methods: {
    logOut() {
      auth.logout();
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.toolbar-title {
  color: black;
  text-decoration: inherit;
}
</style>
