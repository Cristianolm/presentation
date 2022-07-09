/*
==========================
SITE INFORMATION
==========================
*/
const projects = [
  {
    id: 0,
    title: "Ableton",
    desc: [
      "<h4>Ableton about page</h4> <p>This project is a clone of the Ableton about page.</p>",
      "<p> The construction of this page is the result of one of the challenges proposed by the website <a href='https://www.frontendpractice.com/projects/ableton' >Frontend Practice</a >. </p>",
    ],
    btns: [
      ["Clone", "portfolio/Ableton/about.html"],
      ["Original", "https://www.ableton.com/en/about/"],
    ],
  },
];
/*
==========================
*/

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
