<script setup>
import { useRoute } from "vue-router";
import products from "../data/products.json";

const route = useRoute();
const product = products.find(
  (product) => product.id === parseInt(route.params.id)
);
</script>

<template>
  <div>
    <h1>Producit</h1>
    <h2>{{ product.name }} - {{ product.price }}</h2>
    <p>Year: {{ product.year }}</p>
  </div>
</template>
