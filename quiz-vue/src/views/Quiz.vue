<script setup>
import QuizContent from "@/components/QuizContent.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
</script>
<template>
  <QuizHeader />
  <QuizContent :question="quiz.question[currentQuestionIndex]" />
</template>

<style scope></style>
