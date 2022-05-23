// Fetch elements
const lengthEl = document.querySelector("#length > p");
const volumeEl = document.querySelector("#volume > p");
const massEl = document.querySelector("#mass > p");
const inputEl = document.getElementById("num-el");

// Add event listener to update DOM
inputEl.addEventListener('input', convertUnits);

// 1 meter = 3.281 feet
// 1 feet = 0.3048 meters

// 1 liter = 0.2641720524 gallons
// 1 gallon = 3.785411784 liters

// 1 kg = 2.20462 pounds
// 1 pound = 0.45359237 kilos

// Function to convert the units
function convertUnits(){
    const val = +inputEl.value;

    // Update length units
    lengthEl.textContent = `${val} meters = ${(val * 3.281).toFixed(3)} feet | ${val} feet = ${(val * 0.3048).toFixed(3)} meters`;

    // Update volume units
    volumeEl.textContent = `${val} liters = ${(val * 0.2641720524).toFixed(3)} gallons | ${val} gallons = ${(val * 3.785411784).toFixed(3)} liters`;

    // Update mass units
    massEl.textContent = `${val} kilos = ${(val * 2.20462).toFixed(3)} pounds | ${val} pounds = ${(val * 0.45359237).toFixed(3)} kilos`;
}


