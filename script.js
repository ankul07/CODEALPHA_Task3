// "use strict";

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const menuButton = document.querySelector(".nav-open-btn");
menuButton.addEventListener("click", (e) => {
  console.log("hello");

  navbar.classList.add("active");
  overlay.classList.add("active");
});

const closeMenuButton = document.querySelector(".nav-close-btn");
closeMenuButton.addEventListener("click", (e) => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});
