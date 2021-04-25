const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarClassList = sidebar.classList;

toggleBtn.addEventListener("click", () => {
  sidebarClassList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebarClassList.remove("show-sidebar");
});
