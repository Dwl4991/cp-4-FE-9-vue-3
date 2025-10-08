<template>
  <header>
    <h4>Question 1/2</h4>
    <div class="bar">
      <div class="bar-progress"></div>
    </div>
  </header>
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

<style scope>
header {
  margin-top: 20px;
}
header h4 {
  font-size: 30px;
}
.bar {
  width: 100%;
  height: 50px;
  border: 3px solid #b3f3c3;
}
.bar-progress {
  width: 50%;
  height: 100%;
  background-color: #b3f3c3;
}

#question-container {
  margin-top: 20px;
}
#question-title {
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
}
</style>
