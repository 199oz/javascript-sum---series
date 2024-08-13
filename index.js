const div = document.querySelector('div')
const result = document.createElement('p')
const playerScore = document.createElement('p')
const computerScore = document.createElement('p')
const winnerResult = document.createElement('p')
const div2 = document.createElement("div")

div.classList.add('main-content')
div2.classList.add('text-content')
winnerResult.classList.add('winner')
div.appendChild(div2)
div2.appendChild(playerScore)
div2.appendChild(computerScore)
div2.appendChild(result)
div2.appendChild(winnerResult)

let comScore = 0
let playScore = 0

function rockPaperScissors(humanChoice) {

  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (comScore == 5) {
    winnerResult.innerText = "The computer has won!💻"
  }
  else if(playScore == 5){
    winnerResult.innerText = "You have won!🌟😎🙌"
  }

  else{
    if (computerChoice == humanChoice) {
      result.innerText = "It was a draw"
      
    } else if (humanChoice === 1 &&  computerChoice === 2) {
      result.innerText = "You have lost against Paper";comScore++
    }
    else if (humanChoice === 2 && computerChoice === 3){
      result.innerText = "You have lost against Scissors";comScore++
    }
  
    else if (humanChoice === 3 && computerChoice === 1){
      result.innerText = "You have lost against Rock"; comScore++
    }
  
    else{
      result.innerText = `You have won!!`;playScore++
    }
    playerScore.innerText = `Player's Score: ${playScore}`
    computerScore.innerText = `Computer's Score: ${comScore}`
  
  }


}




const rock = document.querySelector('button.rock').addEventListener("click", () => rockPaperScissors(1))
const paper = document.querySelector('button.paper').addEventListener("click", () => rockPaperScissors(2))
const scissors = document.querySelector('button.scissors').addEventListener("click", () =>rockPaperScissors(3))
