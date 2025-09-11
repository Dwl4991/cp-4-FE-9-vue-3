<script setup>
const { quiz } = defineProps(["quiz"]);
</script>

<template>
  <div class="card">
    <img :src="quiz.img" :alt="quiz.title" />
    <div class="card-body">
      <h2>{{ quiz.title }}</h2>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 270px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}
.card-body {
  padding: 20px;
}

.card-body h2 {
  font-weight: bold;
}
</style>
