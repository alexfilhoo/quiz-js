const quizData  = [
    {
        question: 'Qual é o atalho para o projeto base HTML?',
        a: '!+Tab',
        b: 'i+Tab',
        c: 'Crtl+!',
        d: 'Crtl+i',
        correct: 'a'
    }, {
        question: 'Qual é a extensão do arquivo Markdown',
        a: '.js',
        b: '.mw',
        c: '.md',
        d: '.mn',
        correct: 'c'
    }, {
        question: 'Qual comando é usado para iniciar uma pasta .git no Git Bash?',
        a: 'git commit',
        b: 'git add',
        c: 'git remote',
        d: 'git init',
        correct: 'd'
    }, {
        question: 'Que dia do ano é comemorado o Human Rights Day na África do Sul',
        a: '7 de setembro',
        b: '13 de maio',
        c: '10 de dezembro',
        d: '17 de novembro',
        correct: 'c'
    }, {
        question: 'Como se chama a estrutura que reuni as peças do computador',
        a: 'CPU',
        b: 'Gabinete',
        c: 'GPU',
        d: 'Caixa',
        correct: 'b'
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz (); 

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => { 
    
    const answer = getSelected();
    
    console.log(answer);
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz ();
         } else {
            quiz.innerHTML = `<h2>Você respondeu corretamente a ${score}/${quizData.length} questões.</h2> <button onclick="location.reload()">Recarregar</button>`;
         }
    }
});
