function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber){
        case 0: return 'Rock';
        break;
        case 1: return 'Paper';
        break;
        case 2: return 'Scissors';
        break;

        default: return 'No selection made'

    }
    }

    function playGround(playerSelection, computerSelection){
        let playerSelect = playerSelection.toLowerCase();
        let computerSelect = computerSelection.toLowerCase();

        console.log(`You chose ${playerSelect}`);
        console.log(`Computer select ${computerSelect}`);

        //return true if user wins/ties with computer and false if user loses
        if(playerSelect == computerSelect){
            console.log("DRAW!");
            return true;
        }
        else if(playerSelect == 'rock' && computerSelect == 'paper'){
            console.log("You Lose! Paper beats Rock");
            return false;
        }
        else if(playerSelect == 'rock' && computerSelect == 'scissors'){
            console.log("You Win! Paper beats Rock");
            return true;
        }
        else if(playerSelect == 'paper' && computerSelect == 'rock'){
            console.log("You Win! Paper beats Rock");
            return true;
        }
        else if(playerSelect == 'paper' && computerSelect== 'scissors'){
            console.log("You Lose! Scissors beats Paper");
            return false;
        }
        else if (playerSelect == 'scissors' && computerSelect == 'rock') {
            console.log("You Lose! Rock beats Scissors");
            return false;
        }
        else if (playerSelect == 'scissors' && computerSelect == 'paper') {
            console.log("You Win! Scissors beats Paper");
            return true;
        }
    }
            
        function game() {
            let userPoints = 0;
            let computerPoints = 0;
            for (let i = 0; i < 5; i++) {
                const computerSelection = computerPlay();
                let playerSelection = prompt("Rock,Paper or Scissors?");

                if(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors'){
                    alert("Unknown value. Please choose between rock paper and scissors.");

                    playerSelection = prompt("Rock,paper or scissors?");
                }

                if(playGround(playerSelection, computerSelection)){
                    userPoints++;
                    console.log(`Score: Your score = ${userPoints} / Computer's score = ${computerPoints}`);
                }
                else{
                    console.log(`Score: ${userPoints} / ${computerPoints}`);
                    computerPoints++;
                }
                }
            }
        
    
    
    

