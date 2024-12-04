"use strict";

const menuBar = document.querySelector(".menu-bar");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
  menuBar.classList.remove("hidden");
  menuIcon.classList.add("hidden");
});
