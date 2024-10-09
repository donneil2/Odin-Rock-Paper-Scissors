console.log("Hello World!")


//get the players score

let humanScore = 0;
let computerScore = 0;
let roundNum = 0;


//get either rock paper or scissors as output
function getComputerChoice() {

    let number = Math.floor(Math.random() * 3); // gets a random number 0,1,2

    if (number == 0) {
        return("Rock")
    };
    if (number == 1) {
        return("Paper")
    };
    if (number == 2) {
        return("Scissor")
    };
    
}

console.log(getComputerChoice())



//take a human choice an return it

function getHumanChoice() {

let sign = prompt("What is your choice?")
    sign = sign.toLowerCase(); //to make case insesitive inputs


    if (sign == "rock") {
        return("Rock")
    };
    if (sign == "paper") {
        return("Paper")
    };
    if (sign == "scissor") {
        return("Scissor")
    } else {
        return("Try again!")
    };
}





//compare the returns and give an result of the game

   
function playGame() {
    function playRound(humanChoice, computerChoice) {
         humanChoice = getHumanChoice();
         computerChoice = getComputerChoice();


        if (humanChoice == computerChoice) {
            console.log("Tie, again")
        
        }
            else if (humanChoice == "Rock") {
                    if (computerChoice == "Scissor") {
                        humanScore++; //plus 1 human score
                        console.log("your score:", humanScore)
                        console.log ("You win! Rock beats scissor")
                    } else {
                        computerScore++; //plus 1 computer score
                        console.log("my score:", computerScore)
                        console.log ("You lose! paper beats rock")
                    }
                }

                else if (humanChoice == "Paper") {
                    if (computerChoice == "Rock") {
                        humanScore++; //plus 1 human score
                        console.log("your score:", humanScore)
                        console.log ("You win! Paper beats rock")
                    } else {
                        computerScore++; //plus 1 computer score
                        console.log("my score:", computerScore)
                        console.log ("You lose! scissor beats paper") 
                    }
                }

                else if (humanChoice == "Scissor") {
                    if (computerChoice == "Paper") {
                        humanScore++; //plus 1 human score
                        console.log("your score:", humanScore)
                        console.log ("You win! Scissor beats paper")
                    } else {
                        computerScore++; //plus 1 computer score
                        console.log("my score:", computerScore)
                        console.log ("You lose! Rock beats scissor")
                    }
                }
        
   

   
        roundNum ++;

        if (roundNum == 5) {
          if(humanScore < computerScore) {
            console.log("You lost the match! Try again.");
          } else if (humanScore == computerScore) {
            console.log("It's a draw!");
          } else {
            console.log("You won! Congratulations. :)");
          }
    
          console.log(`Final score: ${humanScore} - ${computerScore}`)
        }
      }
    
      playRound();
    }

    while(roundNum < 5) {
        playGame();
      }
