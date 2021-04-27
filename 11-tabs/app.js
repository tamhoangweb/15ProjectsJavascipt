const btns = document.querySelectorAll("button.tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  }
});
