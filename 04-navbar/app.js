// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksClassList = links.classList;
console.log(linksClassList);
navToggle.addEventListener("click", () => {
  if (linksClassList.contains("show-links")) {
    console.log(1);
    linksClassList.remove("show-links");
  } else {
    console.log(0);
    linksClassList.add("show-links");
  }
});
