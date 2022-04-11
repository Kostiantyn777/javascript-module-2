/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

/*--------------Task 1-------------- */
const body = document.querySelector("body");

function changeColorOfThePage() {
  body.style.backgroundColor = "#91e8ff";
}

const myTimeout = setTimeout(changeColorOfThePage, 5000);

/*--------------Task 2-------------- */

function changeColorWithSetInterval() {
  body.style.backgroundColor =
    body.style.backgroundColor == "blue" ? "green" : "blue";
}
const myInterval = setInterval(changeColorWithSetInterval, 5000);
