// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

window.addEventListener("load", () => {
  const preLoader = document.querySelector(".preloader");
  preLoader.classList.add("hide-preloader");
});

const btnSwitch = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
btnSwitch.addEventListener("click", () => {
  if (btnSwitch.classList.contains("slide")) {
    btnSwitch.classList.remove("slide");
    video.play();
  } else {
    btnSwitch.classList.add("slide");
    video.pause();
  }
});
