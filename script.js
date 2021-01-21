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


//// customs////

function generatePassword( ){


  var questionOne = prompt("need a new password?");
  
  
  if(questionOne !== "yes" && questionOne !== "Yes"){
    
    return "No new password needed!";
  
  } else {
  
  
    var questionTwo = function(a){ 
      questionTwoValue = prompt(a);
     }
    var questionTwoValue = 0;  
  
       questionTwo("Okay then, How long is this password?");

    while(questionTwoValue < 7 || questionTwoValue > 128 || questionTwoValue === NaN){


      questionTwo("Error. Please choose betweem 8 and 128 characters long");
      
    }

    var questionThree = function(b){
      questionThreeValue = prompt(b)
    }
    var questionThreeValue = '';
    questionThree("Do you need special characters?");

    while(questionThreeValue !== "yes" && questionThreeValue !== "Yes" && questionThreeValue !== "no" && questionThreeValue !== "No"){
      questionThree("Please be serious, Do you need special characters?");
    }
    return wordGenerator(parseInt(questionTwoValue),questionThreeValue);

  }
}

wordGenerator = function(a,b){
// var new_word =[];
var newer_word = [];
var randomChar = Math.round(Math.random() *128);
if(b === "yes" || b === "Yes"){

  for(var i = 0; i < a;i++){
    randomChar = Math.round(Math.random() *128);
    while(randomChar < 31 || randomChar > 127){
      randomChar = Math.round(Math.random() *128);
    }
      // new_word.push(questionOne.charCodeAt(i));
      newer_word.push(String.fromCharCode(randomChar));
    
      
  }
} else {

  for(var i = 0; i < a;i++){
    randomChar = Math.round(Math.random() *128);
    while((randomChar < 65 || randomChar > 90)&&(randomChar < 97 || randomChar > 122)){
      randomChar = Math.round(Math.random() *128);
    }
      // new_word.push(questionOne.charCodeAt(i));
      newer_word.push(String.fromCharCode(randomChar));
     
  }
}
var char_location = newer_word.join('');
console.log(newer_word)
return char_location;

}

