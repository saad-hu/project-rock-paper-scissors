// this function randomly returns rock paper or scissors. The return value will be computer's move/choice in a round
function computerPlay() {
    let options = ["rock", "paper", "scissors"]; //declaring an array with the options

    let rand_num = Math.floor(Math.random() * 3); //this generates an integer bw 0(inclussive) and 2(inclussive). "Math.random * 3" genrates a float bw 0(inclussive) and 3(exclussive) and Math.floor() rounds it to the lowest integer
    return options[rand_num];
}


//these two variables are the counter for number of wins. These are gobal because these variables will be used in the checkWinner() function as well
let userWins = 0;
let computerWins = 0;


//reference to card images nodes. These are global because these references are used by both playRound() and checkWinner() function 
const userCardImg = document.querySelector('#user-card img');
const computerCardImg = document.querySelector('#computer-card img');


//used to add addEventListener to each icon box and in function playAgain 
const icons = document.querySelectorAll('.icon-box');  //creates a node list of all the (3) icon-box


//this function plays ONE round, and RETURNS(not print) the winner of the round. returns tie if computer and user choice are same
function playRound(computerChoice, userChoice) {

    let roundWinner;

    //these set of if else statements are the logic of rock paper scissors I have implemented. The important note is that the winner (user, computer or tie) is stored in the variable roundWinner as a string
    if(computerChoice == userChoice)
    {
        roundWinner = "tie";
    }
    else if (computerChoice == "rock")
    {
        if (userChoice == "scissors")
        {
            roundWinner = "computer";
        }
        else {
            roundWinner = "user";
        }
    }
    else if (computerChoice == "paper")
    {
        if (userChoice == "rock") {
            roundWinner = "computer";
        }
        else
        {
            roundWinner = "user";
        }
    }
    else if (computerChoice == "scissors")
    {
        if(userChoice == "paper")
        {
            roundWinner = "computer";
        }
        else 
        {
            roundWinner = "user";
        }
    }

    //now the round winner is decided, we will change the images in the user and computer card according to selection, display round result, and update and show scores


    //changing card images for each round
    userCardImg.src = "./images/"+userChoice+"-icon-96x96.png";
    computerCardImg.src = "./images/"+computerChoice+"-icon-96x96.png";


    //refernce to the result section's round result paragraph
    const roundResult = document.querySelector('#round-result');

    //reference to score (span) nodes
    const userCardScore = document.querySelector('#user-score');
    const computerCardScore = document.querySelector('#computer-score');


    //these if else statements store then display points and display the results of each round
    if(roundWinner == "tie")
    {
        roundResult.textContent = `It's a tie! No points awarded.`;
    }
    else if(roundWinner == "computer")
    {   
        roundResult.textContent =  `You Lose! ${computerChoice
        } beats ${userChoice}`;
        computerWins++; //updates score
        computerCardScore.textContent = computerWins;
    }
    else
    {
        roundResult.textContent = `You Won! ${userChoice} beats ${computerChoice}`;
        userWins++; //updates score
        userCardScore.textContent = userWins;
    }

    return roundWinner;
}


function checkWinner()
{   
    //first I will be creating (not adding to DOM) elements for final result and game over image to display in the result section
    const finalResult = document.createElement('p');
    finalResult.classList.add('final-result');

    const finalImage = document.createElement('img');
    finalImage.classList.add('game-over-image');

    //reference to the results div section so that I can add the above two elements to it
    const resultsSection = document.querySelector('#results');

    if(userWins == 3)
    {   
        finalImage.src = "./images/game-over-128x128.png";
        finalResult.textContent = "You've Won the Game! Congratulation!";

        userCardImg.src = "./images/winner-128x128.png";
        computerCardImg.src = "./images/loser-128x128.png";

        resultsSection.prepend(finalImage);
        resultsSection.prepend(finalResult);
    }

    else if(computerWins == 3)
    {   
        finalImage.src = "./images/game-over-128x128.png";
        finalResult.textContent = "You've Lost the Game!";

        computerCardImg.src = "./images/winner-128x128.png";
        userCardImg.src = "./images/loser-128x128.png";

        resultsSection.prepend(finalImage);
        resultsSection.prepend(finalResult);
    }
}


//this function displays a play again button in place of the icons, and if cliked reloads the page, hence resets the game
function playAgain()
{   
    //creating (not appending) play again button. It's styling is done in the stylesheet
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('play-again-button');
    playAgainButton.textContent = "Play Again?";

    //hiding the icons so that I can display the reload button only in their place
    icons.forEach((icon) => {
        icon.style.display = "none";
    })
    

    const allIcons = document.querySelector('.all-icons');
    allIcons.appendChild(playAgainButton);

    //when the play again button is clicked, this reloads the page, hence resets the game
    playAgainButton.addEventListener('click', () => location.reload());
}


//adding an eventListener to each icon-box (user selection box)
icons.forEach((icon) => {
    icon.addEventListener('click', () => {

        if ((userWins < 3) && (computerWins < 3)) //when the game has won, this condition prevents more rounds to be played when the icons are clicked 
        {
            let userSelection = icon.getAttribute('id');   //the id of each icon-box is the name of the selection (rock, paper, or scissors). So we can check what the user has selected by checking the id of the icon-box
            let computerSelection = computerPlay();
    
            let winnerOfRound = playRound(computerSelection, userSelection);
            
            checkWinner(winnerOfRound);
        }

        else
        {
            playAgain();
        }
    })
})