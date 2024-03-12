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
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const menuIcon = document.querySelector(".menu");
  const closeIcon = document.querySelector(".close");

  menuIcon.addEventListener("click", function () {
    container.classList.toggle("menu-opened");
  });

  closeIcon.addEventListener("click", function () {
    container.classList.remove("menu-opened");
  });
});
