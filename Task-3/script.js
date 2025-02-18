const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

const quizData = [
    { question: "What is 2 + 2?", options: ["3" ,"4", "5"], answer: "4" },
    { question: "What is the capital of France?", options: ["Berlin", "Paris", "Madrid"], answer: "Paris" },
    { question: "Which is the best fandom in the world?", options: ["BTS","blackpink","straykids"], answer: "BTS"}
];

let currentQuizIndex = 0;

function loadQuiz() {
    const currentQuiz = quizData[currentQuizIndex];
    questionElement.textContent = currentQuiz.question;
    optionsElement.innerHTML = "";
    currentQuiz.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsElement.appendChild(btn);
    });
}

function checkAnswer(answer) {
    if (answer === quizData[currentQuizIndex].answer) {
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }
    currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
    loadQuiz();
}

nextButton.addEventListener("click", loadQuiz);
loadQuiz();

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

const Img = document.getElementById("img");
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    Img.src = images[currentIndex];
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    Img.src = images[currentIndex];
});

document.getElementById("fetch-weather").addEventListener("click", async () => { 
    const options = {
        method: 'GET',
        headers: { accept: 'application/json' }
    };

    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m', options)
        .then(response => response.json())
        .then(response => {
            document.getElementById("weather-output").innerText = JSON.stringify(response, null, 2);
        })
        .catch(err => console.error(err));
});