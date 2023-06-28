// SCROLL NAVBAR
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (scrollY > 0) {
    navbar.classList.add("navbar-dark", "bg-dark", "shadow");
  } else {
    navbar.classList.remove("navbar-dark", "bg-dark", "shadow");
  }
});

//CALENDAR
//clock
const clock = document.getElementById("clock");
//date
const time = new Date();
const date = document.getElementById("date");
//day
const day = document.getElementById("day");
function Calendar() {
  const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //month
  const month = document.getElementById("month");
  const Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  day.innerHTML = `${Day[time.getDay()]}`;
  date.innerHTML = `${time.getDate()}`;
  month.innerHTML = `${Month[time.getMonth()]}`;
  clock.innerHTML = `-${time.getHours()}:${time.getMinutes()}-`;
  window.requestAnimationFrame(Calendar);
}
Calendar();

// slider About
const slides = document.querySelectorAll(".slide");
const AbHeading = document.querySelectorAll(".slide h2");

slides.forEach((slide, idx) => {
  slide.addEventListener("click", (e) => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  });
});

//project
const projectCards = document.querySelectorAll(".projectCard");
let filled = false;
projectCards.forEach((projectCard, index) => {});
