document.addEventListener("DOMContentLoaded", function(event) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const skipperElement = document.getElementById('skip');
    const resultElement = document.getElementById('result');
    const titleElement = document.getElementById('thetitle');

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Jupiter", "Venus", "Earth"],
            answer: "Mars"
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
            answer: "Blue Whale"
        }
    ];

    function loader() {
        const currentQuestion = questions.shift();
        if (currentQuestion) {
            questionElement.textContent = currentQuestion.question;
            optionsElement.innerHTML = '';

            for (const option of currentQuestion.options) {
                const li = document.createElement('li');
                li.textContent = option;
                li.addEventListener('click', () => checker(option));
                optionsElement.appendChild(li);
            }
        } else {
            show();
        }
    }

    function checker(selectedOption) {
        loader();
    }

    function show() {
        titleElement.style.display = 'none';
        questionElement.style.display = 'none';
        optionsElement.style.display = 'none';
        skipperElement.style.display = 'none';
        resultElement.textContent = "You are a Femboy!";
    }

    skipperElement.addEventListener('click', loader);

    loader();
});