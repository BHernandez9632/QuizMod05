const quizData = [
  {
    question: "What Module are we one right now?",
    a: "Module 5",
    b: "Module 2",
    c: "Module 1",
    d: "Module 6",
    correct: "a",
  },

  {
    question: "What was the focus of module 3 Discussion?",
    a: "JavaScript Improvements",
    b: "Thinking like a software engineer",
    c: "Comparing application frameworks",
    d: "Using Postman",
    correct: "c",
  },

  {
    question: "What is react considered?",
    a: "API",
    b: "Framework",
    c: "UI",
    d: "HTTPS",
    correct: "b",
  },

  {
    question: "What is the most commonly used programming language to build web pages?",
    a: "C#",
    b: "Python",
    c: "PHP",
    d: "JavaScript",
    correct: "d",
  },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach (answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    }
    else {
      quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correct </h2>

      <button onclick="location.reload()">Reload</button>
      `
    }
  }
})
