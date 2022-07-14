/*
========================================================================================================
SITE INFORMATION


Note: The values in "tag" can not contain numbers. Beacuse the link between 
the filter buttons and the projects is connected between the name that appears 
in the "tag" field and its respective index. But if the value of the "tag" is the value 
that appears as a display on the site. Hence, in the "displayMenuButtons()" function, 
there is a pattern that eliminates all values associated with the "tag" field.
========================================================================================================
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
    tag: "Cloned Website",
  },
  {
    id: 1,
    title: "1º Presentation Site",
    desc: [
      "<p>The page you're looking at hasn't always been like this. In this project you can see how I created my first presentation page as a web programmer.</p>",
    ],
    link: "portfolio/FirstPresentationSite/index.html",
    target: "_blank",
    tag: "Personal Website",
  },
  // {
  //   id: 2,
  //   title: "1º Test JS",
  //   desc: [
  //     "<p>The page you're looking at hasn't always been like this. In this project you can see how I created my first presentation page as a web programmer.</p>",
  //   ],
  //   link: "#",
  //   target: "_blank",
  //   tag: "Test JS",
  // },
  // {
  //   id: 3,
  //   title: "2º Test JS",
  //   desc: [
  //     "<p>The page you're looking at hasn't always been like this. In this project you can see how I created my first presentation page as a web programmer.</p>",
  //   ],
  //   link: "#",
  //   target: "#",
  //   tag: "Test JS",
  // },
  // {
  //   id: 4,
  //   title: "3º Test JS",
  //   desc: [
  //     "<p>The page you're looking at hasn't always been like this. In this project you can see how I created my first presentation page as a web programmer.</p>",
  //   ],
  //   link: "#",
  //   target: "#",
  //   tag: "Test JS",
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
var test = displayMenuButtons();

window.addEventListener("DOMContentLoaded", function () {
  displayPortfolioProjects(projects);
  const connectionBtwnIdValuesBtnsAndArticles = displayMenuButtons();
  console.log(connectionBtwnIdValuesBtnsAndArticles);
  hideProjects();
});

function displayMenuButtons() {
  let tags = projects.reduce(
    function (acc, currItem) {
      acc += currItem.tag;
      return acc + currItem.id + "-";
    },
    ["All-"]
  );

  var tagsList = tags.split("-");
  tagsList.pop();

  // console.log(tagsList);

  // Create two array, where the index values of one "uniqueTagListId" is the correspondent "id" value of the elements in the array "uniqueTagList"
  const uniqueTagListId = [];

  for (let pos = 0; pos < tagsList.length; pos++) {
    if (pos === 0) {
      uniqueTagListId[pos] = null;
    } else if (pos > 0) {
      uniqueTagListId[pos] = tagsList[pos].substr(-1);
    }
  }

  // console.log(uniqueTagListId);

  // Create list of the categories without thei identifier in the end
  let ListWithoutId = [...new Set(tagsList)];

  for (let pos = 1; pos < ListWithoutId.length; pos++) {
    var deleteLastNumbers = ListWithoutId[pos].replace(/[0-9]/g, "");

    if (pos !== "-1") {
      ListWithoutId[pos] = deleteLastNumbers;
    }
  }

  // console.log(ListWithoutId);

  // Generate List of buttons without repeted values
  const uniqueTagList = [...new Set(ListWithoutId)];

  // Generate buttons
  buttonStr = uniqueTagList.map(function (e) {
    return `<button class="filter-btn" data-group="${e}">${e}</button>`;
  });
  const stringWithAllButtons = buttonStr.join("");
  let filterProjects = document.querySelector(".filterProjects");
  filterProjects.innerHTML = stringWithAllButtons;

  // console.log(buttonStr);
  // // RETURN
  const tagsAndIds = [uniqueTagListId, ListWithoutId, uniqueTagList];
  // console.log(tagsAndIds);
  return tagsAndIds;
}
// HERE======================================================
function hideProjects() {
  let article = document.querySelectorAll("article");
  let filterBtn = document.querySelectorAll(".filter-btn");
  console.log(article);
  console.log(filterBtn);
  // console.log(article[0].dataset.id);
  // console.log(filterBtn[1].dataset.group);
  var btnCliked = [];
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      var btnClikedTemp = e.currentTarget.dataset.group;
      btnCliked[0] = btnClikedTemp;
      console.log(btnCliked[0]);

      // APPLY "DIPLAY: BLOCK" to all articles
      if (btnCliked[0] === "All") {
        article.forEach((stl) => {
          stl.style.display = "block";
        });
      }
      // APPLY "DIPLAY: NONE" to non selected articles
      else if (!btnCliked[0] !== "All") {
        // Check What projects have the tag iqual to the button
        var checkProjects = projects.map((project) => {
          if (project.tag === btnClikedTemp) return "show";
          else if (project.tag !== btnClikedTemp) return "hide";
          else return null;
        });
        console.log(checkProjects);

        // Positions to hide the display none and keep
        var articlesToDisplayNone = [];
        var articlesToKeep = [];
        for (let pos = 0; pos < checkProjects.length; pos++) {
          if (checkProjects[pos] === "hide") {
            articlesToDisplayNone.push(pos);
          } else if (checkProjects[pos] === "show") {
            articlesToKeep.push(pos);
          }
        }
        console.log(articlesToDisplayNone);
        console.log(articlesToKeep);

        // Display none
        for (let pos = 0; pos < article.length; pos++) {
          if (articlesToDisplayNone.includes(pos)) {
            article[pos].style.display = "none";
          }
          if (!articlesToDisplayNone.includes(pos)) {
            article[pos].style.display = "block";
          }
        }
      }
    });
  });
}

// HERE======================================================

function displayPortfolioProjects(portfolioItems) {
  let projects = portfolioItems.map(function (proj) {
    return `<article data-id=${proj.id}>
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
}

// Redirect to Correct CV
const formCV = document.querySelector("form");
const formCVvalue = document.querySelector("form").querySelector("input");
formCVvalue.addEventListener("click", () => {
  let cvLang = document.querySelector("#lang");
  let value = cvLang.options[cvLang.selectedIndex].value;
  formCV.action = `cv/CV_Cristiano(${value}).pdf`;
});
