<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    function decrement() {
      count.value--;
    }
    function decrement5() {
      count.value -= 5;
    }
    function incrementt5() {
      count.value += 5;
    }

    function reset() {
      count.value = 0;
    }

    return { count, increment, decrement, reset, decrement5, incrementt5 };
  },
};
</script>

<template>
  <main>
    <div>
      <h1>Counter</h1>
      <span id="value">{{ count }}</span>
      <div>
        <button @click="increment" id="increment">+</button>
        <button @click="decrement" id="decrement">-</button>
        <button @click="reset" id="reset">Reset</button>
      </div>
      <div class="btn-group">
        <button @click="incrementt5" id="decrement">+5</button>
        <button @click="decrement5" id="decrement">-5</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  background-color: #333333;
  padding: 20px;
  border-radius: 8px;
}

#value {
  font-size: 50px;
}
button {
  font-size: 16px;
  margin: 0 5px;
  background-color: #555555;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  color: #ffffff;
}
.btn-group {
  display: flex;
  justify-content: center; /* biar tombol rata tengah */
  gap: 10px; /* jarak antar tombol */
  margin: 10px 0; /* jarak antar grup */
}

button:hover {
  background-color: #777777;
}
button:active {
  animation: pulse 0.5s linear;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
