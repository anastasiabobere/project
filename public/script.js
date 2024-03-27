// menu function
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
// login?
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });
// app.listen(5501, () => {
//   console.log("server PUSSSYYY  ");
// });
