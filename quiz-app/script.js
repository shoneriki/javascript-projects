// object in javascript, array of quizzes included with question, choices, answers
// checkboxes with text on it
// store answer as id
// check if id is correct

const quizData = [
  {
    question: 'How old is Sho as of December 2020',
    a: '28',
    b: '30',
    c: '32',
    d: '35',
    correct: 'c',
  }, {
    question: 'What is the most used programming language in 2020',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'c',
  }, {
    question: 'Who was the President of the US in 2020',
    a: 'George Soros',
    b: 'Donald Trump',
    c: 'Joe Biden',
    d: 'Michelle Obama',
    correct: 'b',
  }, {
    question: 'What does HTML stand for',
    a: 'Hypertext Markup Language',
    b: 'Helicopter Text Making Language',
    c: 'Helicopters Terminals Motorboats Lamborginis',
    d: 'Hackin Text Markup Language',
    correct: 'a',
  }, {
    question:'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  }

];

// TODO: Show results, no submit unless answer is chosen
// store answer
// need to deselect option after submitting previous answer

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
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

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected () {

  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  console.log(answer);

    if (answer) {
      if(answer === quizData[currentQuiz].correct) {
        score++;
      }

      currentQuiz++;
      if(currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2> <button onclick="location.reload()"> Reload </button>`
      }
    }
});
