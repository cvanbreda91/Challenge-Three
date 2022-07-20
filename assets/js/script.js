// Assignment code here
function generatePassword(length=20) {
  
  if ((document.getElementById('UpperCase').checked) && (document.getElementById('Number').checked) && (document.getElementById('Character').checked)){
    let password = '';
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
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
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz";
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
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^^&*()abcdefghijklmnopqrstuvwxyz";
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
        let chars = "1234567890!@#$%^^&*()abcdefghijklmnopqrstuvwxyz";
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
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
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
      let chars = "!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
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
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
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
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
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


