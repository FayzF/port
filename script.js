// scroll navbar sticky
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  //   navbar.classList.add("navbar-dark bg-dark shadow-sm ");
  console.log(scrollY);
  if (scrollY > 0) {
    navbar.classList.add("navbar-dark", "bg-dark", "shadow-sm");
  } else {
    navbar.classList.remove("navbar-dark", "bg-dark", "shadow-sm");
  }
});
