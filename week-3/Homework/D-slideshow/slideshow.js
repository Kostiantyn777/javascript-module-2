// Write your code here
const kitten1 = "./images/kitten1.jpg";
const kitten2 = "./images/kitten2.jpg";
const kitten3 = "./images/kitten3.jpg";
const dog1 = "./images/dog1.jpg";
const dog2 = "./images/dog2.jpg";

// Created an array of Images
const arrayOfMyImages = [kitten1, kitten2, kitten3, dog1, dog2];

let imgIndex = 0;
let intervalVar;
let delayInterval = 1500;

// Select Buttons and image
const autoBackButton = document.querySelector("#auto-back");
const backButton = document.querySelector("#back");
const stopButton = document.querySelector("#stop");
const forwardButton = document.querySelector("#forward");
const autoForwardButton = document.querySelector("#auto-forward");
const selectImage = document.querySelector("#random-image");
const showNumber = document.querySelector("#show-number");

// Added click event for each button

autoBackButton.addEventListener("click", autoBackEvent);
backButton.addEventListener("click", backEvent);
stopButton.addEventListener("click", stopEvent);
forwardButton.addEventListener("click", forwardEvent);
autoForwardButton.addEventListener("click", autoForwardEvent);

function showImage() {
  selectImage.src = arrayOfMyImages[imgIndex];
  showNumber.textContent = imgIndex;
}

function backEvent() {
  imgIndex = imgIndex == 0 ? arrayOfMyImages.length - 1 : imgIndex - 1;
  showImage();
}
///
function forwardEvent() {
  imgIndex = imgIndex == arrayOfMyImages.length - 1 ? 0 : imgIndex + 1;
  showImage();
}

function autoBackEvent() {
  resetInt(backEvent);
}

function autoForwardEvent() {
  resetInt(forwardEvent);
}

function stopEvent() {
  resetInt();
}

function resetInt(fnc) {
  if (intervalVar) clearInterval(intervalVar);
  if (typeof fnc === "function") {
    intervalVar = setInterval(fnc, delayInterval);
  }
}

showImage();
