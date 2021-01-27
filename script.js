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

// The password generator

function generatePassword( ){

// First question asking the length of the password. The password must be within 8 to 128 characters.
var passwordLengthQuestion = prompt("Choose a password length it can be 8 to 128 ");
    
  // a while loop to force the user to answer this question and with the correct values.
while(passwordLengthQuestion < 7 || passwordLengthQuestion > 128 || passwordLengthQuestion == NaN){
    passwordLengthQuestion = prompt("please choose between 8 and 128 characters in length")
  }; 

  // returning the result and adding it the the passwordLength variable.
 passwordLength = passwordLengthQuestion;

// the next set of variables are confirms to ask the what criteria the password needs


var withUppers = confirm("do you need uppercase letters?");  // uppercases
var withLowers = confirm("do you need lowercase letters?"); // lowercases
var withNums = confirm("do you need numbers letters?"); // numbers
var withSpecials = confirm("do you need specials letters?"); //special characters or symbols


// we then return all 5 of those results into another array to use in the wordGenerator function 
 return wordGenerator(passwordLength,withUppers,withLowers,withNums,withSpecials);

}

// numbers numbersArguments[0] - numbersArguments[1] 
// uppers uppersArguments[0] -uppersArguments[1]
// lowers lowersArguments[0]-lowersArguments[1]
// specials specialCharsArguments[0] specialCharsArguments[1]



// this function collects the previously gathered information and returns a password
wordGenerator = function(a,b,c,d,e){

  // Set of variable arrays containing the min and max values.
// To be able to create of numbers to find a specifics using the charcodes.

var uppersArguments = [65,91];  //uppercase letters
var lowersArguments = [97,122]; //lowercase letters
var numbersArguments = [48,56]; // numbers ranging from 0 through 9
var specialCharsArguments = [33,47]; //special characters or symbols

var randomWord = []; // the array that will hold all the of the new characters
var randomChar = Math.floor(Math.random() *128); // the math.Random function
var criteriaResults = [b,c,d,e]; // the results of the criteria questions


// a for loop that will run through the criteriaResults and return a specific result
for(i = 0; i < criteriaResults.length;i++){

  // the variables holding the argument values for the while loop

  var uppersMin,uppersMax,lowersMin,lowersMax,numsMin,numsMax,specialsMin,specialsMax;


    // the if loop that runs through 15 different possible out comes  
          //uppers                //lowers                              //numbers                 //specials
     if (criteriaResults[0] && criteriaResults[1] === false && criteriaResults[2] === false && criteriaResults[3] === false){

      //just uppers

      
      uppersMin = lowersMin = numsMin = specialsMin = uppersArguments[0];
      uppersMax = lowersMax = numsMax = specialsMax = uppersArguments[1];
      

}    else if (criteriaResults[0] === false && criteriaResults[1]  && criteriaResults[2] === false && criteriaResults[3] === false){

      //just lowers
  

       uppersMin = lowersMin = numsMin = specialsMin = lowersArguments[0];
       uppersMax = lowersMax = numsMax = specialsMax = lowersArguments[1];

}
    else if (criteriaResults[0] === false && criteriaResults[1] === false && criteriaResults[2] && criteriaResults[3] === false){
 
      //just numbers


      uppersMin = lowersMin = numsMin = specialsMin = numbersArguments[0];
      uppersMax = lowersMax = numsMax = specialsMax = numbersArguments[1];

}    
    else if (criteriaResults[0] === false && criteriaResults[1] === false && criteriaResults[2] === false && criteriaResults[3]){

      //just specials


      uppersMin = lowersMin = numsMin = specialsMin = specialCharsArguments[0];
      uppersMax = lowersMax = numsMax = specialsMax = specialCharsArguments[1];

    
    }  else if (criteriaResults[0] && criteriaResults[1] && criteriaResults[2] === false && criteriaResults[3] === false){
 
      //just letters


      uppersMin = uppersArguments[0]
            
      lowersMin = numsMin = specialsMin = lowersArguments[0];
      
      uppersMax = uppersArguments[1]
      
      lowersMax = numsMax = specialsMax = lowersArguments[1];

      
      }else if (criteriaResults[0] && criteriaResults[1] === false && criteriaResults[2]  && criteriaResults[3] === false){

      //uppers and numbers
        

            uppersMin = uppersArguments[0];
            
            lowersMin = numsMin = specialsMin = numbersArguments[0];
            
            uppersMax = uppersArguments[1];
            
            lowersMax = numsMax = specialsMax = numbersArguments[1];

      
      }else if (criteriaResults[0] && criteriaResults[1] === false && criteriaResults[2] === false && criteriaResults[3]){
 
      //uppers and symbols


      uppersMin = uppersArguments[0];
      lowersMin = numsMin = specialsMin = specialCharsArguments[0];
      uppersMax = uppersArguments[1];
      lowersMax = numsMax = specialsMax = specialCharsArguments[1];

      
      }else if (criteriaResults[0] === false && criteriaResults[1] && criteriaResults[2] && criteriaResults[3] === false){
 

      //lowers and numbers


      uppersMin = lowersMin = lowersArguments[0];
      numsMin = specialsMin = numbersArguments[0];
      uppersMax = lowersMax = lowersArguments[1];
      numsMax = specialsMax = numbersArguments[1];

      
      }else if (criteriaResults[0] === false && criteriaResults[1] && criteriaResults[2] === false && criteriaResults[3]){
 
      //lowers and symbols


        uppersMin = lowersMin = lowersArguments[0];
        numsMin = specialsMin = specialCharsArguments[0];
        uppersMax = lowersMax = lowersArguments[1];
        numsMax = specialsMax = specialCharsArguments[1];

      
      }else if (criteriaResults[0] === false && criteriaResults[1] === false && criteriaResults[2] && criteriaResults[3]){
 
      //nums and symbols
    
    
        uppersMin = specialCharsArguments[0];
        lowersMin = specialCharsArguments[0];
        numsMin = numbersArguments[0];
        specialsMin = specialCharsArguments[0];
        
        
        uppersMax = specialCharsArguments[1]
        lowersMax = specialCharsArguments[1];
        numsMax = numbersArguments[1];
        specialsMax = specialCharsArguments[1];


      
      }else if (criteriaResults[0] && criteriaResults[1]  && criteriaResults[2]  && criteriaResults[3] === false){
 
      //letters an numbers

 
        uppersMin = uppersArguments[0];
        lowersMin = lowersArguments[0];
        numsMin = numbersArguments[0];
        specialsMin = numbersArguments[0];
        
        
        uppersMax = uppersArguments[1];
        lowersMax = lowersArguments[1];
        numsMax = numbersArguments[1];
        specialsMax = numbersArguments[1];



      
      }else if (criteriaResults[0] && criteriaResults[1]  && criteriaResults[2] === false && criteriaResults[3] ){
 
      //letters an specials


        uppersMin = uppersArguments[0];
        lowersMin = lowersArguments[0];
        numsMin = specialCharsArguments[0];
        specialsMin = specialCharsArguments[0];
        
        
        uppersMax = uppersArguments[1];
        lowersMax = lowersArguments[1];
        numsMax = specialCharsArguments[1];
        specialsMax = specialCharsArguments[1];


    }else if (criteriaResults[0] && criteriaResults[1] === false && criteriaResults[2] && criteriaResults[3] ){
      
      //uppers, numbers and specials
 
 
      uppersMin = uppersArguments[0];
      lowersMin = uppersArguments[0];
      numsMin = numbersArguments[0];
      specialsMin = specialCharsArguments[0];
      
      
      uppersMax = uppersArguments[1];
      lowersMax = uppersArguments[1];
      numsMax = numbersArguments[1];
      specialsMax = specialCharsArguments[1];



      
      }else if (criteriaResults[0] === false && criteriaResults[1] && criteriaResults[2] && criteriaResults[3]){
 

      //lowers, numbers and specials

        uppersMin = lowersArguments[0];
        lowersMin = lowersArguments[0];
        numsMin = numbersArguments[0];
        specialsMin = specialCharsArguments[0];
        
        
        uppersMax = lowersArguments[1];
        lowersMax = lowersArguments[1];
        numsMax = numbersArguments[1];
        specialsMax = specialCharsArguments[1];


      
      }else if (criteriaResults[0] && criteriaResults[1] && criteriaResults[2] && criteriaResults[3]){
   
      //all
       
 
       uppersMin = lowersMin = numsMin = specialsMin = specialCharsArguments[0];
       uppersMax = lowersMax = numsMax = specialsMax = lowersArguments[1];
      

    } else {
  
    // nothing was selected for criteria
    
      alert("we need an input please");

       return " : / ";
     
    }



    // this for loop calculates the results and runs a Math.random to get a random character for the password
    for(var i = 0; i < a;i++){
      // the random number stored into random Char
      randomChar = Math.floor(Math.random() *128);
      // the loop                  upper criteria                                 lower criteria                          number criteria                                     special criteria
      while((randomChar < uppersMin || randomChar > uppersMax) && (randomChar < lowersMin || randomChar > lowersMax)&&(randomChar < numsMin || randomChar > numsMax)&&(randomChar < specialsMin || randomChar > specialsMax)){
       
        // a new number incase the last random number did not meet the criteria 
        randomChar = Math.floor(Math.random() *128);

      }
      
      // we then place those random characters results into a new array 
      randomWord.push(String.fromCharCode(randomChar));

    }


    // we then join the randomword array into one value and store it into the passwordOutcome variable 
    var passwordOutcome = randomWord.join('');

    // and finally re return the result to the screen 
    return passwordOutcome;
    
  } 
}