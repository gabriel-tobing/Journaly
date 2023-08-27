const menuToggleButton = document.getElementById("menu-toggle");
const closeButton = document.getElementById("close-button");
const sidebarContainer = document.getElementById("sidebar-container");
const sidebarContent = document.querySelector(".sidebar-container .sidebar-content");

menuToggleButton.addEventListener("click", () => {
  sidebarContainer.classList.add("show");
});

closeButton.addEventListener("click", () => {
  sidebarContainer.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if(!menuToggleButton.contains(e.target) && !closeButton.contains(e.target) && !sidebarContent.contains(e.target)) {
    sidebarContainer.classList.remove("show");
  }
});


const dropdownLinkButton = document.getElementById("dropdown");
const dropdownContainer = document.getElementById("dropdown-container");

dropdownLinkButton.addEventListener("click", (e) => {
  e.preventDefault();

  dropdownContainer.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if(!dropdownLinkButton.contains(e.target) && !dropdownContainer.contains(e.target)) {
    dropdownContainer.classList.remove("show");
  }
});



const currentYear = document.getElementById("current-year");

currentYear.innerHTML = new Date().getFullYear();