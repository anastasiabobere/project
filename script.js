// const menu = document.querySelector(".menu");
// const close = document.querySelector(".close");
// const nav = document.querySelector("nav");
// menu.addEventListener("click", () => {
//   nav.classList.remove("open-nav");
//   console.log("clicked");
// });

// close.addEventListener("click", () => {
//   nav.classList.add("open-nav");
// });
// document.querySelector(".menu").addEventListener("click", function () {
//   var nav = document.querySelector("nav");
//   nav.classList.toggle("active"); // Add or remove the 'active' class
// });

// const menu = document.querySelector(".menu");
// const close = document.querySelector(".close");
// const header = document.querySelector("header");
// menu.addEventListener("click", () => {
//   header.classList.add("open-nav");
//   console.log("clicked");
// });
// close.addEventListener("click", () => {
//   header.classList.remove("open-nav");
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const header = document.getElementById("nav-con");
  const close = document.querySelector(".close");
  menuButton.addEventListener("click", function () {
    header.classList.add("open");

    console.log("clicked");
  });
  close.addEventListener("click", function () {
    header.classList.remove("open");
  });
});
