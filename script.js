'use strict';

//Assigning the length of the password
function generatePassword() {
  var passLength = prompt('Choose the length of your password. It must be at least 8  characters and no more than 128 characters long.');
  // console.log(passLength);

  if (passLength < 8 || passLength > 128 ) {
    alert ( 'Attn: It must be at least 8  characters and nomore than 128 characters long.')
    return ;
  }
  
  //Asigning the type of characters
  var lowerCase = confirm (' Do you want to include lower case characters in your password?');
  var upperCase = confirm (' Do you want to include Upper case characters in your password?');
  var numeric = confirm (' Do you want to include numeric characters in your password?');
  var specialChar = confirm (' Do you want to include special characters in your password?');

}



  
// Assignment Code
  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

