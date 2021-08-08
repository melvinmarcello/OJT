const navHome = document.querySelector(".home");
const navService = document.querySelector(".service");
const navProject = document.querySelector(".project");
const navPartner = document.querySelector(".partner");
const navNews = document.querySelector(".news");
const Name = document.querySelector(".navbar-brand");

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", function () {
    navbarShrink();
    navHome.style.color = "black";
    navService.style.color = "black";
    navProject.style.color = "black";
    navNews.style.color = "black";
    navPartner.style.color = "black";
    Name.style.color = "black";
  });
});
