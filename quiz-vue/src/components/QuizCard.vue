<template>
  <div class="card">
    <img
      src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="quiz.title"
    />
    <div class="card-body">
      <h2>Programing</h2>
      <p>2 Questions</p>
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
