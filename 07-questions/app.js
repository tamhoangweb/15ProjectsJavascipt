//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".question-btn");

//Cach 1: traversing the dom
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     questions.forEach((question) => {
//       question.classList.contains("show-text")
//         ? question.classList.remove("show-text")
//         : 1;
//     });
//     e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
//   });
// });

// Cach 2
questions.forEach((question) => {
  const questionBtn = question.querySelector(".question-btn");
  questionBtn.addEventListener("click", () => {
    questions.forEach((question) => {
      question.classList.contains("show-text")
        ? question.classList.remove("show-text")
        : 1;
    });
    question.classList.toggle("show-text");
  });
});
