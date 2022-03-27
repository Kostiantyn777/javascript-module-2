// Selecting buttons

const selectBlueButton = document.querySelector("#blueBtn");
const selectOrangeButton = document.querySelector("#orangeBtn");
const selectGreenButton = document.querySelector("#greenBtn");
const jumbotron = document.querySelector(".jumbotron");
const donateBikeButton = document.querySelector(".buttons .btn-primary ");
const volunteerButton = document.querySelector(".buttons .btn-secondary ");
console.log(volunteerButton);

// Adding event listener for Blue Button
selectBlueButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#588fbd";
  donateBikeButton.style.backgroundColor = "#ffa500";
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
});

// Adding event listener for Orange Button
selectOrangeButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateBikeButton.style.backgroundColor = "#5751fd";
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "white";
});

// Adding event listener for Green Button
selectGreenButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateBikeButton.style.backgroundColor = "black";
  volunteerButton.style.backgroundColor = "#8c9c08";
});
