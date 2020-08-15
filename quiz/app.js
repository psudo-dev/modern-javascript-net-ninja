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
