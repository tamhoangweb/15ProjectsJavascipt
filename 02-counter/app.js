let count = 0;
const value = document.getElementById("value"),
  btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count == 0) {
      value.style.color = "#000";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "green";
    }
    value.textContent = count;
  });
});
