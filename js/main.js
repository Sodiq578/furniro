// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}



$(document).ready(function () {
    $(".slick").slick({
        infinite: true,          // Cheksiz qaytish
        slidesToShow: 3,         // Ko'rsatilayotgan slaydlar soni
        slidesToScroll: 0,       // Qaytishda aylanadigan slaydlar soni
        speed: 200,              // Animatsiya tezligi (ms)
        autoplaySpeed: 4000,     // Avtomatik qaytishning tezligi (ms)
        centerMode: true,        // O'rtada joylashgan slayt rejimi
        centerPadding: "0px",      // O'rtadagi slaytning ichki bo'shligi
        dots: true,              // Slaytlar navigatsiyasi (nuqtalar)
    });
});


// Active bo'lmagan slaytlarning ichidagi rasmlarning o'lchamini o'zgartirish
$(".slick-slide:not(.slick-center) span img").css("width", "700px");

// Slayderda o'zgarishlarni qayta yuklash uchun
$(".slick").slick("refresh");
