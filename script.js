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

    while(questionTwoValue < 7 || questionTwoValue > 128){


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
    if(questionThreeValue === "No" || questionThreeValue === "no"){
      return questionTwoValue;



    } else {
      return questionTwoValue + " and " + questionThreeValue;
    }
  }
}

wordGenerator = function(a){
// var new_word =[];
var newer_word = [];
 for(var i = 0; i < a;i++){
   
    // new_word.push(questionOne.charCodeAt(i));
    newer_word.push(String.fromCharCode((Math.random() * 128) + 7));
   
    
 }
var char_location = newer_word.join('');
 console.log( char_location);

}

wordGenerator(15)