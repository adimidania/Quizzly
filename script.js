// Prepare quiz (questions, answers and correct answer)
const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyperlinks Tool Markup Language",
        b: "Hyper Text Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "Home Tool Markup Language",
        correct: "b"
    },
    {
        question: "What's the correct HTML element for the largest heading?",
        a: "head",
        b: "heading",
        c: "h1",
        d: "h6",
        correct: "c"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "break",
        b: "lb",
        c: "linebreak",
        d: "br",
        correct: "d"
    },
    {
        question: "Which is used to read an HTML page and render it?",
        a: "Web server",
        b: "Web network",
        c: "Web browser",
        d: "Web matrix",
        correct: "c"
    }
]

// Show first question from the quiz when first loading the page
const questionElement = document.getElementById('question');
const answerElements = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const Submitbtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');
let currentQuestionIndex = 0
let score = 0;

function loadQuiz() {
    deselectAnswers()
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    a_text.innerHTML = currentQuestion.a;
    b_text.innerHTML = currentQuestion.b;
    c_text.innerHTML = currentQuestion.c;
    d_text.innerHTML = currentQuestion.d;
}

loadQuiz()

function getSelected() {
    let answer;
    for(let i= 0; i<answerElements.length; i++) {
        if(answerElements[i].checked){
            answer = answerElements[i].id;
        }
    }

    console.log(answer);
    return answer;
}

function deselectAnswers() {
    for(let i= 0; i<answerElements.length; i++) {
        answerElements[i].checked = false;
    }
}

Submitbtn.addEventListener("click", () => { 
    const answer = getSelected();
    if (answer) {
        if (answer == quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        
        if(currentQuestionIndex < quizData.length) {
            loadQuiz();
            if (currentQuestionIndex == quizData.length - 1){
                Submitbtn.innerHTML = "Submit";
            }
        }
        else {
            quiz.innerHTML = `
            <h2>Quiz Finished!</h2>
            <p style="padding:20px;">You got ${score} out of ${quizData.length} correct answers</p>
            <button onclick="location.reload()">Reload Quiz</button>
            `
        }
    }
    else {
        console.log("No answer selected!")
    }
})
// Show first question from the quiz when first loading the page
    // 1 . Grab all related html elements (question text, radio buttons, answer texts, submit btn, quiz container)
    // 2. track which question we are at and change content accordingly (loadQuiz)
// When submitting, grab the selected answer, add to score if correct, increment current quiz and uncheck all radio buttons.
// Check if end of quiz, if true show score, if not true load next quiz
// reload page when finished