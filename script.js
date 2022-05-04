// this function randomply outputs rock paper or scissors
function computerPlay() {
    let options = ["rock", "paper", "scissors"]; //declaring an array with the options

    let rand_num = Math.floor(Math.random() * 3); //this generates an integer bw 0(inclussive) and 2(inclussive). "Math.random * 3" genrates a float bw 0(inclussive) and 3(exclussive) and Math.floor() rounds it to the lowest integer
    return options[rand_num];
}

//this function asks the user for their choice and returns the choice. asks the user untill their choice is correct. also this function lowercases their choice
function userChoice() {

    let user_input;

    //using do while loop, if the user does not enter one of the three choices, this loop will alert the user and then ask for an input again untill the choice is correct. 
    do {
        user_input = prompt("Enter your selection (rock, paper, scissors)");
        user_input = user_input.toLowerCase(); //converts user string to lowercase to maintain consistency

        if (user_input != "rock" && user_input != "paper" && user_input != "scissors") //if user entered wrong choice
        {
            alert("Please enter correct choice!");
            user_input = 0;
        }
        else {
            return user_input;
        }
    }
    while(user_input == 0);
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

computerSelection = computerPlay();
userSelection = userChoice();

console.log(computerSelection)
console.log(userSelection)
console.log(playRound(computerSelection, userSelection))
