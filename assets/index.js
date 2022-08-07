// password generator

/* 
// mode Toggler old version using display none and display block with two different images
function modeToggler() {
    let lightMode = document.getElementById('lightMode');
    let darkMode = document.getElementById('darkMode');
    let body = document.querySelector('body');
    let inputField = document.getElementById('password');
    if (lightMode.style.display === 'none') {
        darkMode.style.display = 'none';
        lightMode.style.display = 'block';
        body.style.border = '1px solid #dbdbdb';
        inputField.style.border = '1px solid #ccc';
        body.style.backgroundColor = "#FFFFFF";
        body.style.color = "#000000";
    } else {
        lightMode.style.display = 'none';
        darkMode.style.display = 'block';
        body.style.border = '1px solid #363636';
        inputField.style.background = 'transparent';
        inputField.style.border = '1px solid #363636'
        body.style.backgroundColor = "#1a1a1a";
        body.style.color = "#FFFFFF";
    }
}
*/

document.querySelector('body').onresize = function () {
    mediaQuery();
};

// resolving error when page loads
let body = document.querySelector('body');
body.style.backgroundColor = "#FFFFFF";
body.style.border = '1px solid #ebebeb';

// border of body on resize will removed or added depending on screen size
mediaQuery();
var mode = 0;
function mediaQuery() {
    var x = window.matchMedia("(max-width: 576px)");
    if (x.matches) {
        body.style.border = 'none';
    } else {
        if (mode === 0) {
            body.style.border = '1px solid #ebebeb';
        } else if (mode === 1) {
            body.style.border = '1px solid #3c4043';
        }
    }
}

// mode Toggler using filter
function modeToggler() {
    let lightMode = document.getElementById('lightMode');
    let body = document.querySelector('body');
    let inputField = document.getElementById('password');
    let inputLength = document.getElementsByClassName('form-control')[0];
    let btnCopy = document.getElementById('btnCopy');
    let btnRefresh = document.getElementById('btnRefresh');
    if (lightMode.style.filter === 'invert(100%)') {
        lightMode.style.filter = 'invert(0%)';
        inputField.style.border = '1px solid #ebebeb';
        inputField.style.background = 'transparent';
        inputLength.style.background = 'transparent';
        inputLength.style.border = '1px solid #ebebeb';
        inputField.style.color = '#565f68';
        inputLength.style.color = '#565f68';
        body.style.backgroundColor = "#FFFFFF";
        btnCopy.style.backgroundColor = "#ebebeb";
        btnRefresh.style.backgroundColor = "#ebebeb";
        // inputRange.style.opacity = "1";
        body.style.color = "#565f68";
        // border of body will removed or added depending on screen size
        var x = window.matchMedia("(max-width: 576px)");
        if (x.matches) {
            body.style.border = 'none';
        } else {
            body.style.border = '1px solid #ebebeb';
        }
        // declaring the state of mode
        mode = 0;
    } else {
        lightMode.style.filter = 'invert(100%)';
        inputField.style.background = '#303134';
        inputField.style.border = 'none';
        inputField.style.color = '#e8eaed';
        inputLength.style.background = '#303134';
        inputLength.style.border = 'none';
        inputLength.style.color = '#e8eaed';
        body.style.backgroundColor = "#202124";
        // inputRange.style.opacity = "0.5";
        btnCopy.style.backgroundColor = "#363636";
        btnRefresh.style.backgroundColor = "#363636";
        body.style.color = "#e8eaed";
        // border of body will removed or added depending on screen size
        var x = window.matchMedia("(max-width: 576px)");
        if (x.matches) {
            body.style.border = 'none';
        } else {
            body.style.border = '1px solid #3c4043';
        }
        // declaring the state of mode
        mode = 1;
    }
}

// random sample from array
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
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
let lowerAlpha = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
let upperAlpha = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
let symbols = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`, `_`, `+`, `=`, `{`, `}`, `[`, `]`, `|`, `:`, `;`, `"`, `'`, `<`, `>`, `.`, `?`, `/`, `~`, ``];

// check if checkboxes are checked
function check() {
    let upperBox = document.getElementById("upperBox");
    let lowerBox = document.getElementById("lowerBox");
    let numberBox = document.getElementById("numberBox");
    let symbolBox = document.getElementById("symbolBox");
    if (upperBox.checked && lowerBox.checked && numberBox.checked && symbolBox.checked) {
        let raw = upperAlpha.concat(lowerAlpha).concat(number).concat(symbols);
        return raw;
    } else if (upperBox.checked && lowerBox.checked && numberBox.checked) {
        let raw = upperAlpha.concat(lowerAlpha).concat(number);
        return raw;
    } else if (upperBox.checked && lowerBox.checked && symbolBox.checked) {
        let raw = upperAlpha.concat(lowerAlpha).concat(symbols);
        return raw;
    } else if (upperBox.checked && numberBox.checked && symbolBox.checked) {
        let raw = upperAlpha.concat(number).concat(symbols);
        return raw;
    } else if (lowerBox.checked && numberBox.checked && symbolBox.checked) {
        let raw = lowerAlpha.concat(number).concat(symbols);
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
    let length = Number.parseInt(document.getElementById("inputRange").value);
    let raw = check();
    // console.log(raw);
    var password = getRandomSubarray(raw, length).toString().replace(/,/g, '');
    document.getElementById("password").value = password;
}

const slider = document.getElementById("inputRange");
const input = document.getElementsByClassName("form-control")[0];
const value = document.getElementById("passLenLabel");
// input length of password by using range slider
value.textContent = slider.value;

// change value of label on click of range slider
slider.onclick = function () {
    value.textContent = this.value;
    input.value = this.value;
    generatePass();
}

// change value of label on changing range slider
slider.onchange = function () {
    value.textContent = this.value;
    input.value = this.value;
    generatePass();
}

// to equalize the value of form-control and input-range
input.oninput = function () {
    slider.value = this.value;
    generatePass();
}

// generate password after changing range slider
generatePass();

// preventing page reload on clicking button in form
let form = document.getElementById("passLengthSub");
function handleForm(event) {
    event.preventDefault();
    generatePass();
}
form.addEventListener('submit', handleForm);

// copy password to clipboard
function clipboard(value) {
    let pass = document.getElementById(value);
    pass.select();
    document.execCommand("copy");
}