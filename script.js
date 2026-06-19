let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const resultText_p = document.getElementById("result-text");
const actionMessage_p = document.getElementById("action-message");

const choices = document.querySelectorAll(".choice");

// Map abbreviations to full words
const convertToWord = (letter) => {
    if (letter === "r") return "Rock ✊";
    if (letter === "p") return "Paper ✋";
    return "Scissors ✌️";
}

// Get a random choice from the computer
const getComputerChoice = () => {
    const moves = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return moves[randomNumber];
}

const win = (userChoice, compChoice) => {
    userScore++;
    userScore_span.innerText = userScore;
    actionMessage_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}.`;
    resultText_p.innerHTML = "You win! 🔥";
    resultText_p.className = "win";
}

const lose = (userChoice, compChoice) => {
    compScore++;
    compScore_span.innerText = compScore;
    actionMessage_p.innerHTML = `${convertToWord(compChoice)} beats ${convertToWord(userChoice)}.`;
    resultText_p.innerHTML = "You lose... 😢";
    resultText_p.className = "lose";
}

const draw = (userChoice, compChoice) => {
    actionMessage_p.innerHTML = `Both chose ${convertToWord(userChoice)}.`;
    resultText_p.innerHTML = "It's a draw! 🤝";
    resultText_p.className = "draw";
}

const game = (userChoice) => {
    const compChoice = getComputerChoice();
    
    // Combine choices into a 2-letter string to check outcomes easily
    switch (userChoice + compChoice) {
        // User Wins
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        // User Loses
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        // Draws
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

// Add event listeners to the buttons
choices.forEach(choice => {
    choice.addEventListener('click', () => game(choice.id));
});