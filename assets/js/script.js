//Get user input for how long their password should be and convert the string to a numnber
  var lengthText = window.prompt('How many characters does your password need to be (8-128)?', "10");
  var lengthInt = Number(lengthText);
  
//Validate that the user has input a number and it is within range
  function validateLengthInt () {
    while (lengthInt <= 7 || lengthInt >=129)
      {
      lengthText = window.prompt('Invalid Response: How many characters does your password need to be (8-128)?');
      // use retu]rn to call it again and stop the rest of this function from running
      lengthInt = Number(lengthText);
      }
    }
  
//Call validateLengthInt function
validateLengthInt()

//Define arrays for different combinations of characters for passwords based on user input
lowerCaseArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
upperCaseArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
numberArray=["1","2","3","4","5","6","7","8","9","0"]
characterArray=["!","@","#","$","%"]

//create function for generation of password
function generatePassword(length=lengthInt) {
//create different scenarios based on what user can select, including multiple options chosen using if, elseif, else statement
  if ((document.getElementById('UpperCase').checked) && (document.getElementById('Number').checked) && (document.getElementById('Character').checked) && document.getElementById('LowerCase').checked){
    let password = '';
    let chars = [].concat(lowerCaseArray,upperCaseArray,numberArray,characterArray)
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
    // Random index values corresponding to the character set are pushed to array
      array.push(Math.floor(Math.random() * chars.length)); 
    }
    //let the function iterate through random characters in the array
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; 
    }

    return password;}

    else if ((document.getElementById('LowerCase').checked) && (document.getElementById('UpperCase').checked)&&(document.getElementById('Character').checked)){
      let password = '';
      let chars = [].concat(lowerCaseArray,upperCaseArray,characterArray)
      let passwordLength = length;
     
      let array = [];
      for (let i=0; i<length; i++){
        array.push(Math.floor(Math.random() * chars.length)); 
      }
     
      for (let i = 0; i < passwordLength; i++) {
        password += chars[array[i]];
      }
  
      return password;}

    else if ((document.getElementById('LowerCase').checked) && (document.getElementById('Number').checked)&&(document.getElementById('Character').checked)){
      let password = '';
      let chars = [].concat(lowerCaseArray,numberArray,characterArray)
      let passwordLength = length;
     
      let array = [];
      for (let i=0; i<length; i++){
        array.push(Math.floor(Math.random() * chars.length)); 
      }
     
      for (let i = 0; i < passwordLength; i++) {
        password += chars[array[i]];
      }
  
      return password;}
  
    else if ((document.getElementById('UpperCase').checked) && (document.getElementById('LowerCase').checked) && (document.getElementById('Number').checked)){
      let password = '';
      let chars = [].concat(upperCaseArray,lowerCaseArray,numberArray)
      let passwordLength = length;
       
      let array = [];
      for (let i=0; i<length; i++){
        array.push(Math.floor(Math.random() * chars.length)); 
        }
       
      for (let i = 0; i < passwordLength; i++) {
          password += chars[array[i]];
        }
  
        return password;}

        else if ((document.getElementById('UpperCase').checked) && (document.getElementById('Character').checked) && (document.getElementById('Number').checked)){
          let password = '';
          let chars = [].concat(upperCaseArray,characterArray,numberArray)
          let passwordLength = length;
           
          let array = [];
          for (let i=0; i<length; i++){
            array.push(Math.floor(Math.random() * chars.length)); 
            }
           
          for (let i = 0; i < passwordLength; i++) {
              password += chars[array[i]];
            }
      
            return password;}
  
    else if ((document.getElementById('LowerCase').checked) && (document.getElementById('UpperCase').checked)){
      let password = '';
      let chars = [].concat(lowerCaseArray,upperCaseArray)
      let passwordLength = length;
  
      let array = [];
      for (let i=0; i<length; i++){
          array.push(Math.floor(Math.random() * chars.length)); 
          }
         
      for (let i = 0; i < passwordLength; i++) {
          password += chars[array[i]]; 
          }
  
      return password;}
  else if ((document.getElementById('UpperCase').checked) && (document.getElementById('Number').checked)){
    let password = '';
    let chars = [].concat(upperCaseArray,numberArray)
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); 
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]];
    }

    return password;}

  else if ((document.getElementById('UpperCase').checked) && (document.getElementById('Character').checked)){
    let password = '';
    let chars = [].concat(upperCaseArray,characterArray)
    let passwordLength = length;
     
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); 
      }
     
    for (let i = 0; i < passwordLength; i++) {
        password += chars[array[i]];
      }

      return password;}

  else if ((document.getElementById('Number').checked) && (document.getElementById('Character').checked)){
    let password = '';
    let chars = [].concat(numberArray,characterArray)
    let passwordLength = length;

    let array = [];
    for (let i=0; i<length; i++){
        array.push(Math.floor(Math.random() * chars.length)); 
        }
       
    for (let i = 0; i < passwordLength; i++) {
        password += chars[array[i]]; 
        }

    return password;}

    else if ((document.getElementById('LowerCase').checked) && (document.getElementById('Character').checked)){
      let password = '';
      let chars = [].concat(lowerCaseArray,characterArray)
      let passwordLength = length;
  
      let array = [];
      for (let i=0; i<length; i++){
          array.push(Math.floor(Math.random() * chars.length)); 
          }
         
      for (let i = 0; i < passwordLength; i++) {
          password += chars[array[i]]; 
          }
  
      return password;}
  
    else if ((document.getElementById('LowerCase').checked) && (document.getElementById('Number').checked)){
      let password = '';
      let chars = [].concat(lowerCaseArray,numberArray)
      let passwordLength = length;
    
      let array = [];
      for (let i=0; i<length; i++){
          array.push(Math.floor(Math.random() * chars.length)); 
          }
           
      for (let i = 0; i < passwordLength; i++) {
          password += chars[array[i]]; 
          }
    
        return password;}
  else if (document.getElementById('LowerCase').checked){
    let password = '';
    let chars = [].concat(lowerCaseArray)
    let passwordLength = length;
     
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); 
      }
     
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; 
      }
  
    return password;}  

  else if (document.getElementById('Number').checked){
    let password = '';
    let chars = [].concat(numberArray)
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); 
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; 
    }

    return password;}
   
  else if (document.getElementById('Character').checked){
    let password = '';
    let chars = [].concat(characterArray)
    let passwordLength = length;
     
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); 
      }
     
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; 
      }
      
      return password;}

  else if (document.getElementById('UpperCase').checked){
    let password = '';
    let chars = [].concat(upperCaseArray)
    let passwordLength = length;
       
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); 
        }
       
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; 
        }
       
    return password;}

  // If nothing selected - defaults to all characters
  else {
    let password = '';
    let chars = [].concat(lowerCaseArray,upperCaseArray,numberArray,characterArray)
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); 
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; 
    }

    return password;
  }
  }
  
//Call generatePassword function 
generatePassword();

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input using new function
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


