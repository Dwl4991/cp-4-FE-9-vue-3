<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="">
    <a href="/">Home</a>
    <a href="/about">About</a>
    |
    <RouterLink active-class="active" to="/">Home</RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 20px;

  padding: 10px;
}

.active {
  font-weight: 900;
  color: white;
  background-color: red;
  padding: 5px 10px;
  border-radisus: 5px;
  text-decoration: none;
}
</style>
