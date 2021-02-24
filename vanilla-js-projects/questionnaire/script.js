const quizData = [
    {
        question: "Who is the prime minister of India",
        a: "virat",
        b: "modi",
        c: "rahul",
        d: "ambani",
        correct: "b"
    }, 
    {
        question: "Who is the CEO of spacex",
        a: "bill",
        b: "jeff",
        c: "sundar",
        d: "elon",
        correct: "d"
    },
    {
        question: "Who is the CEO of google",
        a: "sundar",
        b: "jeff",
        c: "bill",
        d: "elon",
        correct: "a"
    },
    {
        question: "Who is the best batsman right now",
        a: "virat",
        b: "rohit",
        c: "rahul",
        d: "baber",
        correct: "a"
    }
];

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz')
const option1El = document.getElementById('a_text');
const option2El = document.getElementById('b_text');
const option3El = document.getElementById('c_text');
const option4El = document.getElementById('d_text');
const submitbtn = document.getElementById('sub');
const answerEls = document.querySelectorAll('.answer');


let loadQuizCounter = 0;
let score = 0;
    

loadQuiz();


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[loadQuizCounter];
    
    questionEl.innerText = currentQuizData.question;

    option1El.innerText = currentQuizData.a;
    option2El.innerText = currentQuizData.b;
    option3El.innerText = currentQuizData.c;
    option4El.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answersEl) => {
        if(answersEl.checked) {
            answer = answersEl.id;
        }
    });
    
    return answer;
}




function deselectAnswers() {
    answerEls.forEach((answersEl) => {
        answersEl.checked = false;
    });
}




submitbtn.addEventListener('click', () => {

    
    const answer = getSelected();

    if(answer){ 
        if(answer === quizData[loadQuizCounter].correct) {
            score++;
        }

        loadQuizCounter++;
        
        if(loadQuizCounter < quizData.length){
            loadQuiz();
        }
        

        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onClick="location.reload()">Reload</button>`
        }
    }
    

    
});
