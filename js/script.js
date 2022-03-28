var menuIcon = document.querySelector("#menu-icon");
var footerFixed = document.querySelector("#fixed-bottom");
console.log(footerFixed);

// heigh of client page
var body = document.body,
  html = document.documentElement;

var height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

// END - heigh of client page

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
