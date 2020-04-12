//Input variables
var passLen;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;

//Password variable values

// Numbers
const number = "0123456789";
//Uppercase
const alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//Lowercase
const alphaLow = "abcdefghijklmnopqrstuvwxyz";
// Special characters 
const character = "!#$%&)*+-./\:<=>?@[]^,{|}~";

// Assignment Code
var generateEl = document.querySelector("#generate");

//Function to generate password
generateEl.addEventListener("click", function generatePassword() {
  var choices = '';
  // Asks for user input
  passLen = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // If statement for password length
  if (!passLen || (passLen < 8 || passLen > 128)) {
    passLen = parseInt(prompt("You must choose between 8 and 128"));
  }
  else {
    // Confirms for content
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };
  // If statements for content
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {

    choices = alert("You must choose a criteria!");
  }
  if (confirmCharacter) {

    choices += character;
  }
  if (confirmNumber) {
    choices += number;
  }
  if (confirmLowercase) {
    choices += alphaLow;
  }
  if (confirmUppercase) {
    choices += alphaUp;
  }
  //Placeholder
  var password = '';

  // Random selection for all variables 
  for (var i = 0; i < passLen; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password += pickChoices;
  }
  inputTextbox(password);
});

// This puts the password value into the textarea
function inputTextbox(password) {
  document.getElementById("password").textContent = password;

}


