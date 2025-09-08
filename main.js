const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Lisbon", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false }
    ]
  },
  {
    question: "Which is the smallest prime number?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false }
    ]
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "What is the largest continent in the world?",
    answers: [
      { text: "Africa", correct: false },
      { text: "Asia", correct: true },
      { text: "Europe", correct: false },
      { text: "North America", correct: false }
    ]
  },
  {
    question: "Which is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Horse", correct: false },
      { text: "Tiger", correct: false }
    ]
  },
  {
    question: "Which instrument is used to measure temperature?",
    answers: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Hygrometer", correct: false },
      { text: "Anemometer", correct: false }
    ]
  }
];
let next = 0;
let scoore = 0;
const Question = document.getElementById("question")
const Options = document.getElementById("options")
const Next = document.getElementById("next")


Next.addEventListener('click' , () => {
    if(next === questions.length - 1) {
        return alert(`Your scoore is ${scoore}/${questions.length}`)
      }else {
        next++
        Options.innerHTML = ""
        Question.innerHTML = questions[next].question

        questions[next].answers.forEach(answer => {
        const questionDiv = document.createElement("button")
        questionDiv.classList.add("opthion")
        questionDiv.innerHTML = answer.text;
        questionDiv.id = answer.correct;
        questionDiv.addEventListener('click' , () => {
            if(questionDiv.id === "false") {
                questionDiv.style.backgroundColor = "red"
                setTimeout(() => {
                  Next.click()
                }, 1000);
            }
            if (questionDiv.id === "true") {
                questionDiv.style.backgroundColor = "aquamarine";
                if(questionDiv.disabled !== true) {
                  scoore++
                }
                questionDiv.disabled = true;
            }
        })
        Options.appendChild(questionDiv);
      })
    }
})

Question.innerHTML = questions[next].question

questions[next].answers.forEach(answer => {
    const questionDiv = document.createElement("button")
    questionDiv.classList.add("opthion")
    questionDiv.innerHTML = answer.text;
    questionDiv.id = answer.correct;
    questionDiv.addEventListener('click' , () => {
        if(questionDiv.id === "false") {
            questionDiv.style.backgroundColor = "red"
            setTimeout(() => {
                  Next.click()
                }, 1000);
        }
        if (questionDiv.id === "true") {
            questionDiv.style.backgroundColor = "aquamarine";
                if(questionDiv.disabled !== true) {
                  scoore++
                }
                questionDiv.disabled = true;
        }
    })
    Options.appendChild(questionDiv);
})