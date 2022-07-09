// NAVBAR (mobile)
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const span = document.querySelector(".temp-bar");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  navToggle.classList.toggle("active");
  span.classList.toggle("active");
});

// Get current age
const age = document.querySelectorAll(".age");
const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

const myAge = getAge("1996-01-21");

age.forEach(function (e) {
  e.textContent = myAge;
});

// Main margin to header
// const headerHeight = document.querySelector(".header").offsetHeight;
// const main = (document.querySelector(".main").style.paddingTop =
//   headerHeight + "px");
