
let root = document.documentElement;
var isDay = true;

function funcDayToNight() {
  if (isDay) { 
    // Night Mode
    root.style.setProperty('--black-font-color', "#e0eaeb");
    root.style.setProperty('--white-font-color', "#1f1f1f");
    root.style.setProperty('--background-color', "#142755");
    root.style.setProperty('--secondary-background-color', "#071141");
    isDay = false;
  }
  else {
    // Day Mode
    root.style.setProperty('--black-font-color', "#1f1f1f");
    root.style.setProperty('--white-font-color', "#e0eaeb");
    root.style.setProperty('--background-color', "#ebd7aa");
    root.style.setProperty('--secondary-background-color', "#e6bd60");
    isDay = true;
  }
};