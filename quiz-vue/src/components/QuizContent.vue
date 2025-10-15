<script setup>
import { defineProps } from "vue";

const emit = defineEmits(["selectOption"]);
const { question } = defineProps(["question"]);

function emitSelectedOption(option) {
  emit("selectOption", option);
  // This function can be used to emit an event when an option is selected
  // e.g., emit('select-option', option);
}
</script>

<template>
  <section id="question-container">
    <h1 class="question-title">{{ question.text }}</h1>
  </section>
  <section id="options-container">
    <div
      class="option"
      v-for="option in question.answers"
      :key="option.id"
      @click="emitSelectedOption(option)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">{{ option.text }}</div>
    </div>
  </section>
</template>
<style scoped>
#question-container {
  margin-top: 20px;
}
#question-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.option-label {
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  font-size: 20px;
  padding: 0 20px;
  background-color: #b3f3c3;
  font-weight: bold;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
