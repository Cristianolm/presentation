/*
==========================
SITE INFORMATION
==========================
*/
const projects = [
  {
    id: 0,
    title: "Ableton about page",
    desc: [
      "<p>This project is a clone of the <strong><a href='https://www.ableton.com/en/about/' target = '_blank'>Ableton about page</a></strong>.</p><p> The construction of this page is the result of one of the challenges proposed by the website <strong><a href='https://www.frontendpractice.com/projects/ableton' target = '_blank'>Frontend Practice</a ></strong>. </p>",
    ],
    link: "portfolio/Ableton/about.html",
    target: "_blank",
    tag: ["Cloned Website"],
  },
  {
    id: 1,
    title: "1º Presentation Site",
    desc: [
      "<p>The page you're looking at hasn't always been like this. In this project you can see how I created my first presentation page as a web programmer.</p>",
    ],
    link: "portfolio/FirstPresentationSite/index.html",
    target: "_blank",
    tag: ["Personal Website"],
  },
  // {
  //   id: 2,
  //   title: "For Layout Test",
  //   desc: [
  //     "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi perspiciatis optio ratione natus, quos architecto in sed tempore pariatur, assumenda dolor excepturi, est labore doloremque possimus repellat sequi illo recusandae.</p>",
  //   ],
  //   link: "#",
  //   target: "_self",
  //   tag: ["Cloned Website"],
  // },

  // {
  //   id: 3,
  //   title: "For Layout Test",
  //   desc: [
  //     "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi perspiciatis optio ratione natus, quos architecto in sed tempore pariatur, assumenda dolor excepturi, est labore doloremque possimus repellat sequi illo recusandae.</p>",
  //   ],
  //   link: "#",
  //   target: "_self",
  //   tag: ["Cloned Website"],
  // },
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

// Portfolio
const portfolioProjects = document.querySelector(".projects");

window.addEventListener("DOMContentLoaded", function () {
  displayPortfolioProjects(projects);

  // Display Portfolio Description
  const descToggle = document.querySelectorAll(".desc-toggle");

  descToggle.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let toggleTarget =
        e.currentTarget.parentNode.parentNode.querySelector(".project-desc");

      toggleTarget.classList.toggle("show-desc");

      let verticalToggleBar = toggleTarget.classList.contains("show-desc");
      if (verticalToggleBar == true) {
        btn.style.setProperty("--btn-vertical-bar-display", "none");
        btn.style.setProperty("--btn-bar-Color", "red");
      } else if (verticalToggleBar == false) {
        btn.style.setProperty("--btn-vertical-bar-display", "block");
        btn.style.setProperty("--btn-bar-Color", "green");
      }
    });
  });
});

function displayPortfolioProjects(portfolioItems) {
  let projects = portfolioItems.map(function name(proj) {
    console.log(portfolioItems);
    return `<article>
              <!-- Project title -->
              <div class="title">
                <h3><a href="${proj.link}" target = "${proj.target}">${proj.title}</a></h3>
                <div class="desc-toggle"></div>
              </div>
              <!-- Project text -->
              <div class="project-desc">
                ${proj.desc}
              </div>
            </article>`;
  });

  stringWithAllProject = projects.join("");
  portfolioProjects.innerHTML = stringWithAllProject;
}

// Redirect to Correct CV
const formCV = document.querySelector("form");
const formCVvalue = document.querySelector("form").querySelector("input");
formCVvalue.addEventListener("click", () => {
  let cvLang = document.querySelector("#lang");
  let value = cvLang.options[cvLang.selectedIndex].value;
  formCV.action = `cv/CV_Cristiano(${value}).pdf`;
});
