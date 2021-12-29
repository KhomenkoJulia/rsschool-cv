let menu = document.querySelector('.nav-menu__list');
let burger = document.querySelector('.nav-menu__toggle');
burger.addEventListener('click', function(e) {
  burger.classList.toggle('nav-menu__toggle--active');
    menu.classList.toggle("nav-menu__list--show");
});