const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Get variables from the DOM
let passwordElement1 = document.getElementById("password1");
let passwordElement2 = document.getElementById("password2");

let copyButton1 = document.getElementById("copy-button1");
let copyButton2 = document.getElementById("copy-button2");

// Generate passwords
function generatePassword() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i < 15; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }
  passwordElement1.textContent = password1;
  passwordElement2.textContent = password2;
}

// Copy passwords to clipboard
function copyPassword1() {
  if (passwordElement1.textContent.trim() === "") {
    return;
  }
  navigator.clipboard.writeText(passwordElement1.textContent);
  alert("Copied the text to clipboard");
}

function copyPassword2() {
  if (passwordElement2.textContent.trim() === "") {
    return;
  }
  navigator.clipboard.writeText(passwordElement2.textContent);
  alert("Copied the text to clipboard");
}
