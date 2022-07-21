// Assignment code here
  var lengthText = window.prompt('How many characters does your password need to be (8-120)?');
  var lengthInt = Number(lengthText);
  

  function validateLengthInt () {
    while (lengthInt <= 8 || lengthInt >=120 || lengthInt == ""|| lengthInt === null)
      {
      lengthText = window.prompt('Invalid Response: How many characters does your password need to be (8-120)?');
      // use retu]rn to call it again and stop the rest of this function from running
      lengthInt = Number(lengthText);
      }}
  

validateLengthInt()

lowerCaseArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
upperCaseArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
numberArray=["1","2","3","4","5","6","7","8","9","0"]
characterArray=["!","@","#","$","%"]

function generatePassword(length=lengthInt) {
  
  if ((document.getElementById('UpperCase').checked) && (document.getElementById('Number').checked) && (document.getElementById('Character').checked)){
    let password = '';
    let chars = [].concat(lowerCaseArray,upperCaseArray,numberArray,characterArray)
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
    }
    return password;}
   
else if ((document.getElementById('UpperCase').checked) && (document.getElementById('Number').checked)){
    let password = '';
    let chars = [].concat(lowerCaseArray,upperCaseArray,numberArray)
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
    }
   

    return password;}
    else if ((document.getElementById('UpperCase').checked) && (document.getElementById('Character').checked)){
      let password = '';
      let chars = [].concat(lowerCaseArray,upperCaseArray,characterArray)
      let passwordLength = length;
     
      let array = [];
      for (let i=0; i<length; i++){
        array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
      }
     
      for (let i = 0; i < passwordLength; i++) {
        password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
      }
      return password;}
      else if ((document.getElementById('Number').checked) && (document.getElementById('Character').checked)){
        let password = '';
        let chars = [].concat(lowerCaseArray,numberArray,characterArray)
        let passwordLength = length;
       
        let array = [];
        for (let i=0; i<length; i++){
          array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
        }
       
        for (let i = 0; i < passwordLength; i++) {
          password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
        }return password;}
  else if (document.getElementById('Number').checked){
    let password = '';
    let chars = [].concat(lowerCaseArray,numberArray)
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
    }return password;}
   

    else if (document.getElementById('Character').checked){
      let password = '';
      let chars = [].concat(lowerCaseArray,characterArray)
      let passwordLength = length;
     
      let array = [];
      for (let i=0; i<length; i++){
        array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
      }
     
      for (let i = 0; i < passwordLength; i++) {
        password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
      }
      return password;
     
      }
      else if (document.getElementById('UpperCase').checked){
        let password = '';
        let chars = [].concat(lowerCaseArray,upperCaseArray)
        let passwordLength = length;
       
        let array = [];
        for (let i=0; i<length; i++){
          array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
        }
       
        for (let i = 0; i < passwordLength; i++) {
          password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
        }
       
        return password;}
  else {
    let password = '';
    let chars = [].concat(lowerCaseArray,upperCaseArray,numberArray,characterArray)
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
    }
    return password;
  }

  }
  
   
  generatePassword();

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


