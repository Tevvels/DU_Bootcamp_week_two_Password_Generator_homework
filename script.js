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


function generatePassword( ){


  var questionOne = prompt("need a new password?");
  
  
  if(questionOne !== "yes" && questionOne !== "Yes"){
  
   var new_word =[];
   var newer_word = [];
    for(var i = 0; i < questionOne.length;i++){
      
       new_word.push(questionOne.charCodeAt(i));
       newer_word.push(String.fromCharCode(new_word[i] + 2))
      
       
    }
  var char_location = newer_word.join('');
    return char_location;
  
  } else {
  
  
    return "Okay new password, Got it!?";  
   
 
  }


}






