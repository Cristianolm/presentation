// Open an close desktop menu
var dropdown = document.querySelector(".more-dropdown-boxes");
var dropdownBottom = document.querySelector("#dropdown");

dropdownBottom.addEventListener("click", function () {
  var hasClass = dropdown.classList.contains("d-none");
  if (hasClass == false) {
    dropdown.classList.add("d-none");
  } else if (hasClass == true) {
    dropdown.classList.remove("d-none");
  }
});

// Open an close mobile menu
var toOpenMenu = document.querySelector("#to-open-menu");
var openMenu = document.querySelector("#open-menu");

toOpenMenu.addEventListener("click", function () {
  toOpenMenu.classList.add("d-none");
  openMenu.classList.remove("d-none");

  // console.log(toOpenMenu);
});

openMenu.addEventListener("click", function () {
  openMenu.classList.add("d-none");
  toOpenMenu.classList.remove("d-none");

  // console.log(toOpenMenu);
});
