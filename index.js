function rockPaperScissors(computerChoice,humanChoice) {
  if (computerChoice == humanChoice) {
    return "It was a draw"
  } else if (humanChoice === 1 &&  computerChoice === 2) {
    return "You have lost";
  }
  else if (humanChoice === 2 && computerChoice === 3){
    return "You have lost"
  }

  else if (humanChoice === 3 && computerChoice === 1){
    return "You have lost"
  }

  else{
    return `YOU HAVE WON BY ${computerChoice}`
  }

}

let userInput = window.prompt("Rock/Paper/Scissors?")
userInput = userInput.toLowerCase();

switch (userInput) {
  case "rock":
    userInput = 1;
    break;
  case "paper":
    userInput = 2;
    break;
  case "scissors":
    userInput = 3;
    break;
  default:
    console.log("that is not a valid answer")
}


let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(rockPaperScissors(randomNumber,userInput))
console.log(randomNumber,userInput);