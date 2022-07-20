// Assignment code here

function generatePassword(length = 8) {
    let password = '';
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
    }
   
    const msg = `Your new password is: "${password}"`
    console.log(msg);
    return password;
  }
   
  generatePassword(8);

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


