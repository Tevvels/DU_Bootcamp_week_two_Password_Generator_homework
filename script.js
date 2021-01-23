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







// recreating this project using the Fisher-Yates Shuffle

// function mixArray(array){
//   var originalIndex = array.length;
//   var tempValue;
//   var newIndex;

//   while (originalIndex !== -15){
//     newIndex = Math.floor(Math.random() * originalIndex);
//     originalIndex -= 1;


//     tempValue = array[originalIndex];
//     array[originalIndex] = array[newIndex];
//     array[newIndex] = tempValue;

//   }

//   return array;

// }


// var testArray = ['a','b','c','A','B','C',1,2,3,"!","@","#"];
// mixArray(testArray);

// console.log(testArray);


//works well. :D 











// var questionaireResults = [];
// var uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var nums = [0,1,2,3,4,5,6,7,8,9];
// var specials = ["!","@","#","$","%","^","&","&","*","-","=","+","/","|","~","`",".",",","?","<",">","/","_"]
// var passwordLength;

// var arrayLoop = function(array){
//   for (var i = 0; i < array.length; i++) {
//     questionaireResults.push(array[i]);
    
//   }

// }

//// customs////

function generatePassword( ){

var upperArguments = [65,93];
var lowerArguments = [96,122];
var numberArguments = [39,48];

var passwordLengthQuestion = prompt("Choose a password length it can be 8 to 127 ");
  
while(passwordLengthQuestion < 7 || passwordLengthQuestion > 127 || passwordLengthQuestion == NaN){
    passwordLengthQuestion = prompt("please choose between 8 and 127 characters in length")
  }; 


passwordLength = passwordLengthQuestion;
var withUppers = confirm("do you need uppercase letters?");
var withLowers = confirm("do you need lowercase letters?");
var withNums = confirm("do you need numbers letters?");
var withSpecials = confirm("do you need specials letters?");


// console.log(mixArray(questionaireResults));
 return wordGenerator(passwordLength,withUppers,withLowers,withNums,withSpecials);

}

// numbers 48 - 57 
// uppers 65 -88
// lowers 97-122
// specials 33 47




wordGenerator = function(a,b,c,d,e){
// var new_word =[];
var newer_word = [];
var randomChar = Math.round(Math.random() *128);
var questionaireResults = [b,c,d,e];

for(i = 0; i < questionaireResults.length;i++){

  var uppersMin,uppersMax,lowersMin,lowersMax,numsMin,numsMax,specialsMin,specialsMax;


  
     if (questionaireResults[0] && questionaireResults[1] === false && questionaireResults[2] === false && questionaireResults[3] === false){

      uppersMin = 65,lowersMin = 65,numsMin = 65 ,specialsMin = 65;
      uppersMax = 88, lowersMax = 88, numsMax = 88, specialsMax = 88;
    console.log(uppersMin,uppersMax,lowersMin,lowersMax,numsMin,numsMax,specialsMin,specialsMax);

}    else if (questionaireResults[0] === false && questionaireResults[1]  && questionaireResults[2] === false && questionaireResults[3] === false){
     

       uppersMin = 97 ,lowersMin = 97,numsMin = 97,specialsMin = 97;
       uppersMax = 122,lowersMax = 122,numsMax = 122,specialsMax = 122;

      console.log("just lowers");

}
    else if (questionaireResults[0] === false && questionaireResults[1] === false && questionaireResults[2] && questionaireResults[3] === false){
 

           uppersMin = 48,lowersMin = 48,numsMin = 48,specialsMin = 48;
       uppersMax = 57,lowersMax = 57,numsMax = 57,specialsMax = 57;

      console.log("just numbers");

}    
    else if (questionaireResults[0] === false && questionaireResults[1] === false && questionaireResults[2] === false && questionaireResults[3]){
 

           uppersMin = 31,lowersMin = 31,numsMin = 31,specialsMin = 31;
       uppersMax = 47,lowersMax = 47,numsMax = 47,specialsMax = 47;

      console.log("just specials");
    
    }  else if (questionaireResults[0] && questionaireResults[1] && questionaireResults[2] === false && questionaireResults[3] === false){
 
      uppersMin = 65
            
      lowersMin = 97,numsMin = 97,specialsMin = 97;
      
      uppersMax = 88
      
      lowersMax = 122,numsMax = 122,specialsMax = 122;

      console.log("just letters");
      
      }else if (questionaireResults[0] && questionaireResults[1] === false && questionaireResults[2]  && questionaireResults[3] === false){
 

            uppersMin = 65
            
            lowersMin = 48,numsMin = 48,specialsMin = 48;
            
            uppersMax = 88
            
            lowersMax = 57,numsMax = 57,specialsMax = 57;

      console.log("uppers and numbers");
      
      }else if (questionaireResults[0] && questionaireResults[1] === false && questionaireResults[2] === false && questionaireResults[3]){
 

             uppersMin = 65
             lowersMin = 33,numsMin = 33,specialsMin = 33;
       uppersMax = 88
       lowersMax = 47,numsMax = 47,specialsMax = 47;

      console.log("uppers and symbols");
      
      }else if (questionaireResults[0] === false && questionaireResults[1] && questionaireResults[2] && questionaireResults[3] === false){
 



      uppersMin = 97,lowersMin = 97,
      numsMin = 48,specialsMin = 48;
      uppersMax = 122,lowersMax = 122,
      numsMax = 57,specialsMax = 57;

      console.log("lowers and numbers");
      
      }else if (questionaireResults[0] === false && questionaireResults[1] && questionaireResults[2] === false && questionaireResults[3]){
 


        uppersMin = 97,lowersMin = 97,
        numsMin = 33,specialsMin = 33;
        uppersMax = 122,lowersMax = 122,
        numsMax = 47,specialsMax = 47;

      console.log("lowers and symbols");
      
      }else if (questionaireResults[0] === false && questionaireResults[1] === false && questionaireResults[2] && questionaireResults[3]){
 
        uppersMin = 33,
        lowersMin = 33,
        numsMin = 48,
        specialsMin = 33;
        
        
        uppersMax = 47
        lowersMax = 47,
        numsMax = 57,
        specialsMax = 47;


      console.log("nums and symbols");
      
      }else if (questionaireResults[0] && questionaireResults[1]  && questionaireResults[2]  && questionaireResults[3] === false){
 

 
        uppersMin = 65,
        lowersMin = 97,
        numsMin = 48,
        specialsMin = 48;
        
        
        uppersMax = 88
        lowersMax = 122,
        numsMax = 57,
        specialsMax = 57;



      console.log("letters an numbers");
      
      }else if (questionaireResults[0] && questionaireResults[1]  && questionaireResults[2] === false && questionaireResults[3] ){
 

        uppersMin = 65,
        lowersMin = 97,
        numsMin = 33,
        specialsMin = 33;
        
        
        uppersMax = 88
        lowersMax = 122,
        numsMax = 47,
        specialsMax = 47;

      console.log("letters an specials");

    }else if (questionaireResults[0] && questionaireResults[1] === false && questionaireResults[2] && questionaireResults[3] ){
      
      uppersMin = 65,
      lowersMin = 65,
      numsMin = 48,
      specialsMin = 33;
      
      
      uppersMax = 88
      lowersMax = 88,
      numsMax = 57,
      specialsMax = 47;



      console.log("uppers, numbers and specials");
      
      }else if (questionaireResults[0] === false && questionaireResults[1] && questionaireResults[2] && questionaireResults[3]){
 
        uppersMin = 97,
        lowersMin = 97,
        numsMin = 48,
        specialsMin = 33;
        
        
        uppersMax = 122
        lowersMax = 122,
        numsMax = 57,
        specialsMax = 47;


      console.log("lowers, numbers and specials");
      
      }else{
   
      console.log("all");
       
 
       uppersMin = lowersMin = numsMin = specialsMin = 31;
       uppersMax = lowersMax = numsMax = specialsMax = 127;
      

    }






    for(var i = 0; i < a;i++){
      randomChar = Math.round(Math.random() *128);
      while((randomChar < uppersMin || randomChar > uppersMax) && (randomChar < lowersMin || randomChar > lowersMax)&&(randomChar < numsMin || randomChar > numsMax)&&(randomChar < specialsMin || randomChar > specialsMax)){
        randomChar = Math.round(Math.random() *128);
        console.log("in yes");
      }
        newer_word.push(String.fromCharCode(randomChar));

    }



    var char_location = newer_word.join('');
    console.log(newer_word);
    return char_location;
    
  } 
}











// if(a && b && c && d && e){

//   for(var i = 0; i < a;i++){
//     randomChar = Math.round(Math.random() *128);
//     while(randomChar < 31 || randomChar > 127){
//       randomChar = Math.round(Math.random() *128);
//       console.log("in yes");
//     }
//       // new_word.push(questionOne.charCodeAt(i));
//       newer_word.push(String.fromCharCode(randomChar));

      
//   }
// } else {

//   for(var i = 0; i < a;i++){
//     randomChar = Math.round(Math.random() *128);
//     while((randomChar < 65 || randomChar > 90)&&(randomChar < 97 || randomChar > 122)){
//           randomChar = Math.round(Math.random() *128);
//         }
//           // new_word.push(questionOne.charCodeAt(i));
//          newer_word.push(String.fromCharCode(randomChar));
//     }
//   }
  // var char_location = newer_word.join('');
  // console.log(newer_word);
  // return char_location;
  
// }
