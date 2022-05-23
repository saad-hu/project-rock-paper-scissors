// this function randomly returns rock paper or scissors. The return value will be computer's move/choice in a round
function computerPlay() {
    let options = ["rock", "paper", "scissors"]; //declaring an array with the options

    let rand_num = Math.floor(Math.random() * 3); //this generates an integer bw 0(inclussive) and 2(inclussive). "Math.random * 3" genrates a float bw 0(inclussive) and 3(exclussive) and Math.floor() rounds it to the lowest integer
    return options[rand_num];
}

//this function plays ONE round, and RETURNS(not print) the winner of the round. returns tie if computer and user choice are same
function playRound(computerChoice, userChoice) {

    if(computerChoice == userChoice)
    {
        return "tie";
    }

    else if (computerChoice == "rock")
    {
        if (userChoice == "scissors")
        {
            return "computer";
        }
        else {
            return "user";
        }
    }
    else if (computerChoice == "paper")
    {
        if (userChoice == "rock") {
            return "computer";
        }
        else
        {
            return "user";
        }
    }
    else if (computerChoice == "scissors")
    {
        if(userChoice == "paper")
        {
            return "computer";
        }
        else 
        {
            return "user";
        }
    }
}


let userSelection; 
let computerSelection;
let roundCount = 1;
let userWins = 0;
let computerWins = 0;

const icons = document.querySelectorAll('.icon-box');  //creates a node list of all the (3) icon-box 

//adding an eventListener to each icon-box (user selection box)
icons.forEach((icon) => {
    icon.addEventListener('click', () => {

        userSelection = icon.getAttribute('id');   //the id of each icon-box is the name of the selection (rock, paper, or scissors). So we can check what the user has selected by checking the id of the icon-box
        computerSelection = computerPlay();

        let roundWinner = playRound(computerSelection, userSelection);

        //reference to card images nodes
        const userCardImg = document.querySelector('#user-card img');
        const computerCardImg = document.querySelector('#computer-card img');

        //changing card images for each round
        userCardImg.src = "./images/"+userSelection+"-icon-96x96.png";
        computerCardImg.src = "./images/"+computerSelection+"-icon-96x96.png";

        //refernce to the result's section round result paragraph
        const roundResult = document.querySelector('#round-result');

        //reference to score (span) nodes
        const userCardScore = document.querySelector('#user-score');
        const computerCardScore = document.querySelector('#computer-score');

        //these if else statements give points and display the results of each round
        if(roundWinner == "tie")
        {
            roundResult.textContent = `It's a tie! No points awarded.`;
        }
        else if(roundWinner == "computer")
        {   
            roundResult.textContent =  `You Lose! ${computerSelection} beats ${userSelection}`;
            computerWins++;
            computerCardScore.textContent = computerWins;
        }
        else
        {
            roundResult.textContent = `You Won! ${userSelection} beats ${computerSelection}`;
            userWins++;
            userCardScore.textContent = userWins;
        }


    })
})









//this function simulates a 5 round game and keeps track of who as won each round. if a round is tie, no point is awarded to each player. 
// function game() 
// {
//     let computerSelection, userSelection, roundWinner, computerWins = 0, userWins = 0, roundCount = 1;
//     while( (computerWins != 5) && (userWins != 5)) //5 round game 
//     {   
//         computerSelection = computerPlay(); //stores computer choice. changes for each round
//         userSelection = userChoice(); //stores user choice. changes for each round
//         console.log(`Computer: ${computerSelection}`);
//         console.log(`You: ${userSelection}`);
//         roundWinner = playRound(computerSelection, userSelection); //stores the winner of the current round

//         //these if else statements give points and display the results of each round
//         if(roundWinner == "tie")
//         {
//             console.log(`Round ${roundCount}: It's a tie! No point awarded.`);
//             roundCount++;
//         }
//         else if(roundWinner == "computer")
//         {
//             computerWins++;
//             console.log(`Round ${roundCount}: You Lose! ${computerSelection} beats ${userSelection}`);
//             roundCount++;
//         }
//         else
//         {
//             userWins++;
//             console.log(`Round ${roundCount}: You Won! ${userSelection} beats ${computerSelection}`);
//             roundCount++;
//         }
//     }

//     //displays the final score of the whole game
//     console.log(`Computer Score: ${computerWins}`); 
//     console.log(`Your Score: ${userWins}`);

//     if(computerWins > userWins)
//     {
//         console.log(`Game Result: You lost the game!`);
//     }
//     else
//     {
//         console.log(`Game Result: You won the game!`);
//     }
// }

// game();