const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn"),
  color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", () => {
  let hexColor = "#",
    i = 0;

  for (i; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.innerHTML = hexColor;
});
