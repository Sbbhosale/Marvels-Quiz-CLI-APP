var readlineSync = require("readline-sync");
var chalk = require("chalk");

//score variable
var score = 0


//players score store
var scorestore  = 
[
  {name : "Vikas", score : 5},
  {name : "vaibhav", score : 4},
  {name : "shubham", score : 3}
]



//Welcome message
console.log(chalk.bold("Hello Friend.."))
var userName = readlineSync.question(chalk.green.italic("What's your Name ??? "));
var welcomeMessage = chalk.cyan.bold("Welcome " + userName + "!!!");

console.log(welcomeMessage);
console.log('\n')


 // Questions

var questionOne = {
  question : chalk.red.bold("1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe ?") +chalk.blue.bold("\n(A) 2005\n(B) 2008\n(C) 2010\n(D) 2012\n"),
  answer : "b"
}
var questionTwo = {
  question : chalk.red.bold("2. What is the name of Thor’s hammer ?") + chalk.blue.bold("\n(A) Vanir\n(B) Mjolnir\n(C) Aesir\n(D) Norn\n"),
  answer :"b"
}
var questionThree = {
  question : chalk.red.bold("3. What is Captain America’s shield made of ?") + chalk.blue.bold("\n(A) Adamantium\n(B) Vibranium\n(C) Promethium\n(D) Carbonium\n"),
  answer : "b"
}
var questionFour = {
  question : chalk.red.bold("4. What is the real name of the Black Panther ?")+ chalk.blue.bold("\n(A) T'Challa\n(B) M'Baku\n(C) N'Jadaka\n(D) N'Jobu\n"),
  answer : "a"
}
var questionFive = {
  question : chalk.red.bold("5. Who is Black Panther’s sister ?") + chalk.blue.bold("\n(A) Shuri\n(B) Nakia\n(C) Ramonda\n(D) Okoye\n"),
  answer : "a"
}
var questionSix = {
  question : chalk.red.bold("6. What type of doctor is Stephen Strange ?") + chalk.blue.bold("\n(A) Plastic Surgeon\n(B) Trauma Surgeon\n(C) Neurosurgeon\n(D) Cardiothoracic Surgeon\n"),
  answer : "c"
} 
var questionSeven = {
  question : chalk.red.bold("7. How many Infinity Stones are there ?") + chalk.blue.red("\n(A) 7\n(B) 6\n(C) 5\n(D) 8\n"),
  answer : "b"
}
var questionEight = {
  question : chalk.red.bold("8.  What song does Baby Groot dance to at the end of the first Guardian of the Galaxy ?") + chalk.blue.bold("\n(A) ‘Cherry Bomb’ – The Runaways\n(B) ‘Ain’t No Mountain High Enough’ – Marvin Gaye & Tammi Terrell\n(C) ‘I Want You Back’ – The Jackson 5\n(D) ‘Hooked On A Feeling’ – Voidoid\n"),
  answer : "c"

}
var questionNine = {
  question : chalk.red.bold("9. What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming ?") + chalk.blue.bold("\n(A) Washington Monument\n(B) Statue of Liberty\n(C) Mount Rushmore\n(D) Golden Gate Bridge\n"),
  answer : "a"

}
var questionTen = {
  question : chalk.red.bold("10. Which of the infinity stones is hidden on Vormir ?") + chalk.blue.bold("\n(A) Soul Stone\n(B) Space Stone\n(C) Power Stone\n(D) Time Stone\n"),
  answer : "a"
}
var questionEleven = {
  question : chalk.red.bold("11. Before becoming Vision, what is the name of Iron Man’s A.I. butler ?") + chalk.blue.bold("\n(A) H.O.M.E.R. \n(B) J.A.R.V.I.S.\n(C) A.L.F.R.E.D.\n(D) M.A.R.V.I.N.\n"),
  answer : "b"
}



var enterGame = readlineSync.question(chalk.bold("ARE YOU FAN OF")+ chalk.red.white.bgRed.bold(" MARVEL") +(" ??") +chalk.red.bold(" YES/NO\n"))
// //----------outer loop---------------//

if(enterGame.toLowerCase()=="yes")
{
  var startGame = readlineSync.question(chalk.bold("LET's TEST YOUR MARVEL's KNOWLEDGE.") + chalk.red.bold(" YES/NO\n"))
  
 //   //----------Inner loop---------------//
  
  if(startGame.toLowerCase()=="yes")
  {
    console.log(chalk.blue.bold("\n_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_"))
    
    console.log(chalk.bold(chalk.underline.bold("INSTRUCTIONS ") + (":-\n")))

    console.log((" (1) Please " + chalk.bold.red("SELECT") + (" yes/no in ") + chalk.bold.red("YES/NO") + (" questions.\n") + (" (2) ") + chalk.bold.red("SELECT") + (" the option ") + chalk.red.bold("A/B/C/D") + " in multi option question.\n (3) There are Two levels & total 10 questions.\n (4) You have to score atleast 3 points for going in END GAME.\n"));

    console.log(chalk.red.bold("\n_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_"))
    console.log(chalk.blue.bold("\nLET's BEGIN THE GAME."))
    console.log(chalk.red.bold("........................\n"))    
    
    // play function
    function play(question,answer)
    {
      var userAnswer = readlineSync.question(question)
      if(userAnswer.toLowerCase()==answer)
      {
        console.log(chalk.bold.bgRed.white("\nRight"));
        score = score + 1;
        console.log("\nYour Score is : " + score);
        console.log(chalk.magenta.bold("---------------"));
      }
      else
      {
        console.log(chalk.bold.bgRed.white("\nWrong"));
        console.log(chalk.yellow.bold("\nYour Score is : " + score));
        console.log(chalk.magenta.bold("---------------"));
      }
    }


   // highestScorer function
   function highestScorer(number)
   {
     if(number !=scorestore[0].score && number > scorestore[0].score)
     {
       console.log(chalk.bold.red("YOU HAVE BEATEN THE HIGHEST SCORE.\nPlease send the Screenshot."))
      
      }
      else
      {
        console.log(chalk.bold.yellow("Well Played..!!!!"))
        
      }
    }


   // LEVEL 1
   var questions1 = [questionOne,questionTwo,questionThree,questionFour,questionFive];
   console.log(chalk.bold.yellow.bgWhite("\nLEVEL 1"));
   console.log(chalk.bold.yellow("..................."))
   console.log('\n')
   
   for(var i = 0; i <questions1.length; i++)
   {
     var currentQuestion = questions1[i];
     play(currentQuestion.question,currentQuestion.answer);
    }


   // LEVEL 2

   var questions2 = [questionNine,questionSix,questionSeven,questionEight,questionTen,questionEleven];
   
   
   if(score >= 3)
   {
     console.log(chalk.bold.yellow.bgWhite("\nCONGRATS YOU COMPLETED LEVEL 1."))
     
     console.log(chalk.bold.yellow("-------------") + chalk.red.bold("X") + chalk.yellow.bold("--------------")+ chalk.red.bold("X") + chalk.yellow.bold("-------------"));

     console.log(chalk.yellow.bgWhite.bold("\nLEVEL 2"));
     
     console.log((chalk.bold.red.bgBlue("\nLET's BEGIN THE END GAME")))
     
     console.log(chalk.yellow.bold("..................."))
     
     console.log("\n")
     
     for( var i = 0; i < questions2.length;i++)
     {
       var currentQuestion2 = questions2[i];
       play(currentQuestion2.question,currentQuestion2.answer)
      }
    }
    else
    {
     console.log(chalk.redBright.bold("Well played !!! "))
    }
    
    console.log(chalk.redBright.bold("CONGRATS !!!!.\tYOU HAVE COMPLETED THIS GAME."))
    console.log(chalk.redBright.bold("\n_*_*_*_*_*_*_*_*_*_*_") +chalk.blueBright.bold("*_*_*_*_*_*_*_*_*_*_*_*") + chalk.redBright.bold("_*_*_*_*_*_*_*_*_*_*_*_*_*_"))
    console.log("\n")
    
    scorestore.push({name : userName ,score : score});
    
    console.log("Your Total Score is : " + score);
    
    console.log(chalk.bold.magenta("-----------------------"))
    
    console.log("\n")
    
    console.log(chalk.bold.yellowBright("Scoreboard of players : "))
    
    console.log(scorestore)
    //Calling Highest Scorer Function
    highestScorer(score)
    
    console.log(chalk.bold.blue("Thanks for playing The Game\nHope You Loved it."));    
  }
  else
  {
    console.log(chalk.bold.yellowBright("OK.\nHAVE A GOOD DAY."))
  }