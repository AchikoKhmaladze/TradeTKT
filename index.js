"use strict";

// SELECTING ELEMENTS //

const close = document.querySelector(".fa-x");
const navBar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

// ADD EVENT LISTENERS //

burger.addEventListener("click", () => {
  navBar.style.right = "0px";
  overlay.style.display = "block";
});

close.addEventListener("click", () => {
  navBar.style.right = "-300px";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  navBar.style.right = "-300px";
  overlay.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navBar.style.right = "-300px";
    overlay.style.display = "none";
  }
});
