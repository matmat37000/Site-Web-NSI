
let root = document.documentElement;
let button = document.documentElement.getElementsById("button-icon-cb")
var isDay = true;

function funcDayToNight() {
  if (isDay) { 
    console.log(isDay);
    // Day Mode
    // document.querySelector.add('class="fa-solid fa-sun"');
    // document.querySelector.remove('class="fa-solid fa-moon"');
    root.style.setProperty('--black-font-color', "#02111B");
    root.style.setProperty('--white-font-color', "#fbffff");
    root.style.setProperty('--background-color', "#c1e857");
    root.style.setProperty('--secondary-background-color', "#325327");
    root.style.setProperty('--day', "#325327");
    var image = document.getElementById("button-icon-cb");
		image.src = "../svg/sun.svg";
    isDay = false;
  }
  else {
    console.log(isDay);
    // Night Mode
    // button.remove('class="fa-solid fa-sun"');
    // button.add('class="fa-solid fa-moon"');
    root.style.setProperty('--black-font-color', "#fbffff");
    root.style.setProperty('--white-font-color', "#02111B");
    root.style.setProperty('--background-color', "#325327");
    root.style.setProperty('--secondary-background-color', "#c1e857");
    root.style.setProperty('--day', "#c1e857");
    var image = document.getElementById("button-icon-cb");
		image.src = "../svg/moon.svg";
    isDay = true;
  }
};