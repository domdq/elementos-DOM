const body = document.querySelector("body");
const button = document.querySelector(".btn");
button.addEventListener("click", function toggleColor() {
  body.classList.toggle("bodydark");
  button.classList.toggle("btn-dark");
});
