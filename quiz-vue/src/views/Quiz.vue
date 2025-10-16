<script setup>
import QuizContent from "@/components/QuizContent.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizResult from "@/components/QuizResult.vue";

import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const numberOfCorrectAnswers = ref(0);
const currentQuestionIndex = ref(0);
const showResults = ref(false);

const questionPage = computed(() => {
  return `${currentQuestionIndex.value + 1}/${quiz.questions.length}`;
});
const barPercentage = computed(() => {
  return `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`;
});

function onSelectOption(option) {
  if (option.correct) {
    numberOfCorrectAnswers.value++;
  }

  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    showResults.value = true;
    return;
  }
  currentQuestionIndex.value++;
}
</script>
<template>
  <QuizHeader :questionPage="questionPage" :barPercentage="barPercentage" />
  <QuizContent
    v-if="!showResults"
    :question="quiz.questions[currentQuestionIndex]"
    @selectOption="onSelectOption"
  />
  <QuizResult
    v-else
    :quizQuestionLength="quiz.questions.length"
    :numberOfCorrectAnswers="numberOfCorrectAnswers"
  />
</template>

<style scoped></style>
