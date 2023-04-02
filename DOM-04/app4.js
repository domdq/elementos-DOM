const body = document.querySelector("body");
const button = document.querySelector(".btn");
const colors = ["#191825", "#865DFF", "#E384FF", "#FFA3FD", "#E7B10A"];
button.addEventListener("click", changeColorBody);
function changeColorBody() {
  const quantityColorsArray = colors.length;
  const randomNumeber = Math.random() * quantityColorsArray;
  const roundedNumber = Math.floor(randomNumeber);
  body.style.backgroundColor = colors[roundedNumber];
}
