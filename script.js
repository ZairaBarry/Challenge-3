'use strict';

//Assign the length of the password
function generatePassword() {
  var passLength = prompt('Choose the length of your password. It must be at least 8  characters and no more than 128 characters long.')
  console.log(passLength);

if (passLength < 8 || passLength > 128 ) {
     alert ( 'Attn: It must be at least 8  characters and no more than 128 characters long.')
     return ;
  }}
  
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

