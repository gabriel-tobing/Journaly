const menuToggleButton = document.getElementById("menu-toggle");
const closeButton = document.getElementById("close-button");
const sidebarContainer = document.getElementById("sidebar-container");

menuToggleButton.addEventListener("click", () => {
  sidebarContainer.classList.add("show");
});

closeButton.addEventListener("click", () => {
  sidebarContainer.classList.remove("show");
});