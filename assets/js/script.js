// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
var specialCharacters ="~`!@#$%^&*()-_+={}[]|:;'<>,.?";
var numbers ="1234567890";
//var length="";


function generatePassword(length = 8) {
  let password = '';
  let passwordLength = length;
 
  let array = [];
  for (let i=0; i<length; i++){
    array.push(Math.floor(Math.random() * lowerCase.length)); // Random index values corresponding to the character set are pushed to array
  }
 
  for (let i = 0; i < passwordLength; i++) {
    password += lowerCase[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
  }
 
  return password;
}
 
generatePassword(); 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
