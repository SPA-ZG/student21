<template>
  <Navbar />
  <div class="custom-container">
    <h1>
      Oops, ERROR 404 {{ $route.params.catchAll }} not found. Try returning
      <RouterLink to="/">HOME?</RouterLink>
    </h1>
  </div>
</template>

<style scoped>
.custom-container {
  text-align: center;
  display: flex;
}
</style>
