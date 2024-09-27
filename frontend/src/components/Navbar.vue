<script setup>
import { useAuthStore } from '../stores/auth'
const store = useAuthStore()
</script>

<template>
  <head>
    <link rel="apple-touch-icon" href="favicon.png" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/"> Blog App</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Posts</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/profiles">User profiles</router-link>
        </li>

        <li v-if="store.user === null || store.user.id === null" class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>

        <li v-else class="nav-item">
          {{ 'User: ' + store.user.profileName }}
        </li>
      </ul>
      <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
      <!-- </form> -->
    </div>
  </nav>
</template>
