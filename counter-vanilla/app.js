const countValue = document.getElementById("value");
const countDecrease = document.getElementById("decrement");
const countIncrease = document.getElementById("increment");
let count = 0;

countValue.textContent = count;

countIncrease.addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});

countDecrease.addEventListener("click", () => {
  count--;
  countValue.textContent = count;
});
