var menuIcon = document.querySelector("#menu-icon");

menuIcon.addEventListener("click", function () {
  var hasClass = menuIcon.classList.contains("active");
  var menuContent = document.querySelector("#menu-content");

  console.log(menuContent);

  if (hasClass == false) {
    hasClass = menuIcon.classList.add("active");

    menuContent.classList.remove("d-none");
  } else if (hasClass == true) {
    hasClass = menuIcon.classList.remove("active");
    menuContent.classList.add("d-none");
  }
});
