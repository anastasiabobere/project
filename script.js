//menu function
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

//reveal function
// const items = document.querySelector(".about-div");

// const isInViewport = (el) => {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };
// const run = () =>
//   items.forEach((item) => {
//     if (isInViewport(item)) {
//       item.classList.add("show");
//     }
//   });
// //Events
// window.addEventListener("load", run);
// window.addEventListener("resize", run);
// window.addEventListener("scroll", run);
