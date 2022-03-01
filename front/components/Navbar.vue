<template>
  <b-navbar toggle="lg" type="dark" variant="info">
    <nuxt-link to="/" class="nav-item">App Troov Test</nuxt-link>
    <b-navbar-nav>
      <li class="nav-item">
        <nuxt-link to="/create" class="nav-link">Nouvel Object</nuxt-link>
      </li>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto" v-if="isAuthenticated">
      <li class="nav-item">
        <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/signup" class="nav-link">SignUp</nuxt-link>
      </li>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto" v-else>
      <nuxt-link class="navbar-item" to="/" @click="logout">Logout</nuxt-link>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>

<style></style>
