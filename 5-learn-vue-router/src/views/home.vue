<script setup>
import products from "../data/products.json";
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <div class="products">
      <RouterLink
        v-for="product in products"
        :key="product.id"
        :to="`/product/${product.id}`"
        >{{ product.name }}</RouterLink
      >
    </div>
  </div>
</template>

<style scope>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}
</style>
