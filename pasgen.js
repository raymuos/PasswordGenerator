const passwordDisplay = document.getElementById("passwordDisplay");
const lowercaseCheck = document.getElementById("lowercaseCheck");
const uppercaseCheck = document.getElementById("uppercaseCheck");
const numberCheck = document.getElementById("numberCheck");
const symbolCheck = document.getElementById("symbolCheck");
const generateBtn = document.getElementById("generateBtn");
const passwordLengthInput = document.getElementById("passwordLengthInput");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "01234567890123456789";
const symbols = "!@#$%&?=-!@#$%&?=-";


generateBtn.onclick = function(){
    let allowedChars = "";
    let password = "";
    let passwordLength = Number(passwordLengthInput.value);

    allowedChars += lowercaseCheck.checked ? lowercase : "";
    allowedChars += uppercaseCheck.checked ? uppercase : "";
    allowedChars += numberCheck.checked ? numbers : "";
    allowedChars += symbolCheck.checked ? symbols : "";

    for (let i = 0; i < passwordLength; i++){
        index = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[index];
    }

    passwordDisplay.textContent = `${password}`;
}
