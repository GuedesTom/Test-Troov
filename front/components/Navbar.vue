<template>
  <b-navbar toggle="lg" type="dark" variant="info">
    <nuxt-link to="/" class="nav-item">App Troov Test</nuxt-link>
    <b-navbar-nav>
      <li class="nav-item">
        <nuxt-link to="/create" class="nav-link">Nouvel Object</nuxt-link>
      </li>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <li class="nav-item">
        <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/signup" class="nav-link">SignUp</nuxt-link>
      </li>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
