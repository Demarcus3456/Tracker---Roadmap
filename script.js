"use strict";

const menuBar = document.querySelector(".menu-bar");
const menuIcon = document.querySelector(".menu-icon");

const cards = document.querySelector(".cards");
const cardBtn = document.querySelector(".card-btn");
const pen = document.querySelector(".pen");
const penBtn = document.querySelector(".pen-btn");

// Opens dropdown menu
menuIcon.addEventListener("click", function () {
  menuBar.classList.remove("hidden");
  menuIcon.classList.add("hidden");
});

// Changes content
cardBtn.addEventListener("click", function () {
  pen.classList.add("hidden");
  cards.classList.remove("hidden");
  menuBar.classList.add("hidden");
  menuIcon.classList.remove("hidden");
});

penBtn.addEventListener("click", function () {
  pen.classList.remove("hidden");
  cards.classList.add("hidden");
  menuBar.classList.add("hidden");
  menuIcon.classList.remove("hidden");
});
