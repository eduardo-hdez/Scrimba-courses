// Get the button element
const buttonEl = document.getElementById("convert-btn");

// Event listener for button click
buttonEl.addEventListener("click", function () {
  const inputValue = document.getElementById("input-num").value;

  if (inputValue == "" || inputValue <= 0) {
    alert("Please enter a valid positive number");
  }

  let meterToFeetText = `${inputValue} meters = ${meterToFeet(
    inputValue
  )} feet | ${inputValue} feet = ${feetToMeter(inputValue)} meters`;
  let literToGallonText = `${inputValue} liters = ${literToGallon(
    inputValue
  )} gallons | ${inputValue} gallons = ${gallonToLiter(inputValue)} liters`;
  let kilogramToPoundText = `${inputValue} kilograms = ${kilogramToPound(
    inputValue
  )} pounds | ${inputValue} pounds = ${poundToKilogram(inputValue)} kilograms`;

  document.getElementById("length-conversion").textContent = meterToFeetText;
  document.getElementById("volume-conversion").textContent = literToGallonText;
  document.getElementById("mass-conversion").textContent = kilogramToPoundText;
});

// Functions for conversions
function meterToFeet(num) {
  return (num * 3.281).toFixed(3);
}

function literToGallon(num) {
  return (num * 0.264).toFixed(3);
}

function kilogramToPound(num) {
  return (num * 2.204).toFixed(3);
}

function feetToMeter(num) {
  return (num / 3.281).toFixed(3);
}

function gallonToLiter(num) {
  return (num / 0.264).toFixed(3);
}

function poundToKilogram(num) {
  return (num / 2.204).toFixed(3);
}
