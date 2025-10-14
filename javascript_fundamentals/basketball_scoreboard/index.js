let homeScoreEl = document.getElementsByClassName("num-score")[0];
let guestScoreEl = document.getElementsByClassName("num-score")[1];

let homeCount = 0;
let guestCount = 0;

// HOME ADD functions
function addOneHome() {
  homeCount += 1;
  homeScoreEl.textContent = homeCount;
}

function addTwoHome() {
  homeCount += 2;
  homeScoreEl.textContent = homeCount;
}

function addThreeHome() {
  homeCount += 3;
  homeScoreEl.textContent = homeCount;
}

// GUEST ADD functions
function addOneGuest() {
  guestCount += 1;
  guestScoreEl.textContent = guestCount;
}

function addTwoGuest() {
  guestCount += 2;
  guestScoreEl.textContent = guestCount;
}

function addThreeGuest() {
  guestCount += 3;
  guestScoreEl.textContent = guestCount;
}

// RESET functions
function resetHome() {
  homeCount = 0;
  homeScoreEl.textContent = homeCount;
}

function resetGuest() {
  guestCount = 0;
  guestScoreEl.textContent = guestCount;
}

function newGame() {
  homeCount = 0;
  guestCount = 0;
  homeScoreEl.textContent = homeCount;
  guestScoreEl.textContent = guestCount;
}
