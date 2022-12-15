function rockScissorsAndPaper(user0, user1){
    if(user0 == user1){
        return console.log("Draw")
    }
    let resultado = user0 == "rock" && user1 == "scissors" ? "User0 won": user0 == "scissors" && user1 == "paper" ? "User0 won": user0 == "paper" && user1 == "rock" ? "User0 won": "User1 won";
    return console.log(resultado)
}

rockScissorsAndPaper("paper", "paper")