if (localStorage.getItem("darkMode") === "true") {
  if (!document.body.classList.contains("dark-mode")) {
    document.body.classList.add("dark-mode");
  }
} else {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
  }
}

// mode toggle
document.querySelector("#mode-toggler").onclick = () => {
  document.body.classList.toggle("dark-mode");
  valPercent = (mySlider.value / mySlider.max) * 100;
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "true");
    mySlider.style.background = `linear-gradient(to right, var(--primary-color) ${valPercent}%, var(--dark-primary) ${valPercent}%)`;
  } else {
    localStorage.setItem("darkMode", "false");
    mySlider.style.background = `linear-gradient(to right, var(--primary-color) ${valPercent}%, var(--off-white) ${valPercent}%)`;
  }
};

// random sample from array
function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

// array of upper case letters, lower case letters, numbers, and symbols
let number = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];
let lowerAlpha = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`,
];
let upperAlpha = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`,
];
let symbols = [
  `!`,
  `@`,
  `#`,
  `$`,
  `%`,
  `^`,
  `&`,
  `*`,
  `(`,
  `)`,
  `-`,
  `_`,
  `+`,
  `=`,
  `{`,
  `}`,
  `[`,
  `]`,
  `|`,
  `:`,
  `;`,
  `"`,
  `'`,
  `<`,
  `>`,
  `.`,
  `?`,
  `/`,
  `~`,
  ``,
];

// check if checkboxes are checked
function check() {
  let upperBox = document.getElementById("uppercase");
  let lowerBox = document.getElementById("lowercase");
  let numberBox = document.getElementById("numbers");
  let symbolBox = document.getElementById("symbols");
  if (
    upperBox.checked &&
    lowerBox.checked &&
    numberBox.checked &&
    symbolBox.checked
  ) {
    let raw = upperAlpha.concat(lowerAlpha, number, symbols);
    return raw;
  } else if (upperBox.checked && lowerBox.checked && numberBox.checked) {
    let raw = upperAlpha.concat(lowerAlpha, number);
    return raw;
  } else if (upperBox.checked && lowerBox.checked && symbolBox.checked) {
    let raw = upperAlpha.concat(lowerAlpha, symbols);
    return raw;
  } else if (upperBox.checked && numberBox.checked && symbolBox.checked) {
    let raw = upperAlpha.concat(number, symbols);
    return raw;
  } else if (lowerBox.checked && numberBox.checked && symbolBox.checked) {
    let raw = lowerAlpha.concat(number, symbols);
    return raw;
  } else if (upperBox.checked && lowerBox.checked) {
    let raw = upperAlpha.concat(lowerAlpha);
    return raw;
  } else if (upperBox.checked && numberBox.checked) {
    let raw = upperAlpha.concat(number);
    return raw;
  } else if (upperBox.checked && symbolBox.checked) {
    let raw = upperAlpha.concat(symbols);
    return raw;
  } else if (lowerBox.checked && numberBox.checked) {
    let raw = lowerAlpha.concat(number);
    return raw;
  } else if (lowerBox.checked && symbolBox.checked) {
    let raw = lowerAlpha.concat(symbols);
    return raw;
  } else if (numberBox.checked && symbolBox.checked) {
    let raw = number.concat(symbols);
    return raw;
  } else if (upperBox.checked) {
    let raw = upperAlpha;
    return raw;
  } else if (lowerBox.checked) {
    let raw = lowerAlpha;
    return raw;
  } else if (numberBox.checked) {
    let raw = number;
    return raw;
  } else if (symbolBox.checked) {
    let raw = symbols;
    return raw;
  }
}

// generate password on page load
generatePass();

// generate password and display on page function
function generatePass() {
  let length = Number.parseInt(
    document.getElementById("password-length-number").value
  );
  let raw = check();
  var password = getRandomSubarray(raw, length).toString().replace(/,/g, "");
  document.getElementById("password").value = password;
}

// copy password to clipboard on button click
document.getElementsByClassName("btn-copy")[0].onclick = () => {
  document.getElementById("password").select();
  document.execCommand("copy");
};
document.getElementsByClassName("btn-copy")[1].onclick = () => {
  document.getElementById("password").select();
  document.execCommand("copy");
};

// generate new password on button click
document.querySelector("#btn-generate").onclick = () => {
  generatePass();
};

// generate new password on slider change
document.querySelector("#password-length-slider").oninput = () => {
  document.querySelector("#password-length").textContent = document.querySelector(
    "#password-length-number"
  ).value = document.querySelector("#password-length-slider").value;
  sliderBg();
  generatePass();
};

const mySlider = document.getElementById("password-length-slider");

async function sliderBg() {
  valPercent = (mySlider.value / mySlider.max) * 100;
  if (document.body.classList.contains("dark-mode")) {
    mySlider.style.background = `linear-gradient(to right, var(--primary-color) ${valPercent}%, var(--dark-primary) ${valPercent}%)`;
  } else {
    mySlider.style.background = `linear-gradient(to right, var(--primary-color) ${valPercent}%, var(--off-white) ${valPercent}%)`;
  }
}

sliderBg();
