const body = document.querySelector("body");
const button = document.querySelector(".btn");
button.addEventListener("click", function toggleColor() {
  // body.classList.add("background");
  body.classList.toggle("background");
});
