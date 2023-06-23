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
function Calendar() {
  //clock
  const clock = document.getElementById("clock");
  //date
  const time = new Date();
  const date = document.getElementById("date");
  //day
  const day = document.getElementById("day");
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
