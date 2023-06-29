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

//Contact send form
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const errorAlert = document.querySelector(".my-error-alert");
function visibleCondition() {
  myAlert.classList.add("d-block");
}
function invisibleCondition() {
  myAlert.classList.remove("d-none");
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwWAdHfjTQNzbvgmB5OIfhH0id6bANB0PI9qvInpB_QdOQsw4xIF9QqYjY0zLYwuCVVFg/exec";
const form = document.forms["Fayz-Contactform"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //when submit clicked
  btnLoading.classList.toggle("d-none");
  btnSubmit.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      btnLoading.classList.toggle("d-none");
      btnSubmit.classList.toggle("d-none");
      //display alert
      visibleCondition();
      invisibleCondition();
      //reset form
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      //display error alert
      errorAlert.classList.toggle("d-none");
      if (visibleCondition() == true) {
        invisibleCondition();
      }
    });
});
