<template>
  <section id="question-container">
    <h1 class="question-title">apa kamu manusia?</h1>
  </section>
  <section id="options-container">
    <div class="option">
      <p class="option-label">A.</p>
      <div class="option-value">1</div>
    </div>
    <div class="option">
      <p class="option-label">B.</p>
      <div class="option-value">2</div>
    </div>
    <div class="option">
      <p class="option-label">C.</p>
      <div class="option-value">3</div>
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
