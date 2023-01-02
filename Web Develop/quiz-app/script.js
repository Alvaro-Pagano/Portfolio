  const quizData = [
    { 
        question: 'En que año se estreno la pelicula El origen?',
        a: '1999',
        b: '2002',
        c: '2004',
        d: '2010',
        correct: 'd'
    },  { 
        question: 'En que año nacio el bananero?',
        a: '1986',
        b: '1989',
        c: '1987',
        d: '1982',
        correct: 'd'
    },
    { 
        question: 'Quien es el Presidente de Argentina?',
        a: 'Diego Armando Maradona',
        b: 'Sergio Massa',
        c: 'Alberto Fernandez',
        d: 'Cristina Fernandez',
        correct: 'c'
    },
    { 
        question: 'Que significa HTML?',
        a: 'HyperText Markup Languague',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicoptero Terminales Motorboats Lamborginis ',
        correct: 'a'
    },  { 
        question: 'Que año se lanzo JavaScript?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'Ninguna de estas opciones',
        correct: 'b'
    },
 ]

 const quiz = document.getElementById("quiz");
 const answerEls = document.querySelectorAll(".answer");
 const questionEl = document.getElementById
 ('question');

 const a_text = document.getElementById ('a_text');
 const b_text = document.getElementById ('b_text');
 const c_text = document.getElementById ('c_text');
 const d_text = document.getElementById ('d_text');

 const submitBtn = document.getElementById
 ('submit');


 let currentQuiz = 0;
 let score = 0;

 loadQuiz ();

 function loadQuiz() {
    deselectAnswers ();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.
    question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 }

 function getSelected() {


let answer = undefined;

    answerEls.forEach((answerEls) => {
        if(answerEls.checked) {
            answer = answerEls.id;
        }
    });

    return answer;
 }

 function deselectAnswers () {
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
        });


    
 }

 submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected(); 



    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
                score++;
            }


        currentQuiz ++; 
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else { 
            quiz.innerHTML = 
            `<h2> Has respondido correctamente a
              ${score}/${quizData.length}
             preguntas

            </h2> <button
            onclick="location.reload()
            ">Reintentar</button>`;
        }

    }
});