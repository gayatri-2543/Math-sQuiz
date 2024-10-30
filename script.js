const problemElement = document.getElementById('problem');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-game');

let currentProblem = {};
let score = 0;
let timeRemaining = 60;
let timer;

function generateProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentProblem = {
        question: `${num1} + ${num2}`,
        answer: num1 + num2
    };
    problemElement.textContent = currentProblem.question;
}

function startGame() {
    score = 0;
    timeRemaining = 60;
    scoreElement.textContent = score;
    timerElement.textContent = timeRemaining;
    generateProblem();
    startButton.disabled = true;
    answerInput.disabled = false;
    submitButton.disabled = false;
    resultElement.textContent = '';

    timer = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === currentProblem.answer) {
        score++;
        scoreElement.textContent = score;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }

    answerInput.value = '';
    generateProblem();
}

function endGame() {
    resultElement.textContent = `Game over! Your score is ${score}`;
    startButton.disabled = false;
    answerInput.disabled = true;
    submitButton.disabled = true;
}

startButton.addEventListener('click', startGame);
submitButton.addEventListener('click', checkAnswer);
