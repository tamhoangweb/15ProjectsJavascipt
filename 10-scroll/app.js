// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // get height of 2 elements
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
let navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // handle back to top
  const backToTopBtn = document.querySelector(".top-link");
  if (scrollHeight > 300) {
    backToTopBtn.classList.add("show-link");
  } else {
    backToTopBtn.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

//forEach
scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href");

    const element = document.getElementById(id.slice(1));
    const navbarHeight = navbar.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    //calculate position
    let position = element.offsetTop - navbarHeight;
    let position2 = element.offsetTop;
    console.log("position: ", position);
    console.log("navbarHeight: ", navbarHeight);
    console.log("linksContainerHeight: ", linksContainerHeight);
    if (!fixedNav) {
      position = position - navbarHeight;
      console.log("position 1: ", position);
    }
    if (navbarHeight > 82) {
      position = position + linksContainerHeight;
      console.log("position 2: ", position);
    }

    window.scrollTo({
      left: 0,
      top: position2,
    });
    linksContainer.style.height = 0;
  });
});
