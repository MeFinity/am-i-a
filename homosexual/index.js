document.addEventListener("DOMContentLoaded", function(event) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const skipperElement = document.getElementById('skip');
    const resultElement = document.getElementById('result');
    const titleElement = document.getElementById('thetitle');

    const questions = [
        {
            question: "Are you gay?",
            options: ["Yes", "Most Likely", "Maybe", "No"],
            answer: "Yes"
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
        resultElement.textContent = "You are a Homosexual!";
    }

    skipperElement.addEventListener('click', loader);

    loader();
});