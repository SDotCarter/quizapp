const quizData = [{
        question: "What does CPI stand for?",
        a: "Cash Price Index",
        b: "Consumer Price Intelligence",
        c: "Consumer Price Index",
        d: "Company Price Index",
        correct: "c",
    },

    {
        question: "What does GDP stand for?",
        a: "Gross Domestic Product",
        b: "Gross Domestic Pricing",
        c: "Gross Domestic Property",
        d: "Gross Domestic Production",
        correct: "a",
    },

    {
        question: "When are Non-Farm Payroll Numbers Released?",
        a: "Every Thursday",
        b: "The first Friday of every month",
        c: "Every other Friday",
        d: "The last Thursday of every month",
        correct: "b",
    },

    {
        question: "What causes inflation?",
        a: "Excessive Money Creation",
        b: "Consumers buying goods and services",
        c: "Money creation that doesn't go toward the real economy",
        d: "None of the Above",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]; // equal to the index within the quizData array
    questionEl.innerText = currentQuizData.question; // The h2 becomes the text of the question part of the array and object;
    // Example: quizData[0].question
    // OUTPUT: "Which languages run in a web browser?"

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick ="location.reload()">Reload</button>
            `
        }
    }
})

