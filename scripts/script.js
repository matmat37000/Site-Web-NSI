
let root = document.documentElement;
let button = document.documentElement.getElementsById("button-icon-cb")
var isDay = true;

function funcDayToNight() {
  if (isDay) { 
    console.log(isDay);
  
    // Day Mode
    // document.querySelector.add('class="fa-solid fa-sun"');
    // document.querySelector.remove('class="fa-solid fa-moon"');
    root.style.setProperty('--black-font-color', "#1f1f1f");
    root.style.setProperty('--white-font-color', "#e0eaeb");
    root.style.setProperty('--background-color', "#ebd7aa");
    root.style.setProperty('--secondary-background-color', "#e6bd60");
    root.style.setProperty('--day', "#ffc400");
    isDay = false;
  }
  else {
    console.log(isDay);
    // Night Mode
    // button.remove('class="fa-solid fa-sun"');
    // button.add('class="fa-solid fa-moon"');
    root.style.setProperty('--black-font-color', "#e0eaeb");
    root.style.setProperty('--white-font-color', "#1f1f1f");
    root.style.setProperty('--background-color', "#142755");
    root.style.setProperty('--secondary-background-color', "#071141");
    root.style.setProperty('--day', "#000e4d");
    isDay = true;
  }
};