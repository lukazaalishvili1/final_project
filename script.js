// burger
let burger = document.querySelector(".burger_menu_img");
// header naviogation
let header_nav = document.querySelector(".header_nav");
// c icon image
let x_icon = document.querySelector(".x_icon_img");

// click on burger show x icon and  show navigation
burger.addEventListener("click", () => {
  header_nav.classList.add("show");
  burger.style.display = "none";
  x_icon.style.display = "block";
});

// click on x icon  hide navigation and show burger

x_icon.addEventListener("click", () => {
  header_nav.classList.remove("show");
  burger.style.display = "block";
  x_icon.style.display = "none";
});
