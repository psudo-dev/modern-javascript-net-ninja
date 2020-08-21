const correctAnswers = ["A", "B", "A", "B"]
const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")
const resultSpan = result.querySelector("span")


form.addEventListener("submit", e => {
    e.preventDefault()
    let score = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    // check answers
    userAnswers.forEach((answer, index) => {
        if (correctAnswers[index] === answer) {
            score += 25
        }
    })
    result.classList.remove("d-none")
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    let output = 0
    const timer = setInterval(() => {
        resultSpan.textContent = `${output}%`
        if (output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 10);
})

const question = "5. What's your name?"
const qn = "q5"
const vA = "A"
const vB = "B"
const altA = "Who's your daddy?"
const altB = "Say my name!"
const newDiv = document.createElement("div")
newDiv.innerHTML = `<div class="my-5">
<p class="lead font-weight-normal">${question}</p>
<div class="form-check my-2 text-white-50">
    <input type="radio" name="${qn}" id="" value="${vA}" checked>
    <label for="" class="form-check-label">${altA}</label>
</div>
<div class="form-check my-2 text-white-50">
    <input type="radio" name="${qn}" id="" value="${vB}">
    <label for="" class="form-check-label">${altB}</label>
</div>
</div>`
const submitButton = document.querySelector(".submit-button")
form.insertBefore(newDiv, submitButton)

const quiz = {
    question: "",
    alternatives: {},
    position: index + 1,
    correct: []
}

`${q}${position}`
`${quiz.alternatives.A}`
`${quiz.alternatives.B}`
`${quiz.alternatives.C}`
`${quiz.alternatives.D}`
`${quiz.alternatives.E}`