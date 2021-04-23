const menuItem = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".custom-navbar");
const navbarTitle = document.querySelector(".navbar-title");

menuItem.addEventListener("click", () => {
  navbar.classList.toggle("open");
});


function myFunction(x) {
  if (x.matches) { // If media query matches
    navbarTitle.innerText = "NMS Band"
  } else {
    navbarTitle.innerText = "Nelson Nighthawk Band"
  }
}

var x = window.matchMedia("(max-width: 630px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
