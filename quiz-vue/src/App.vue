<template>
  <main>
    <header>
      <h1 class="header-title" id="title">Quiz-Vue</h1>
      <input type="text" id="search-input" placeholder="Search..." />
    </header>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-size: 48px;
  font-weight: bold;
  color: #495a7d;
  flex-grow: 1;
}
#search-input {
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 200px;
}
</style>
