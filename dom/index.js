const content = document.querySelectorAll("p")
content.forEach(p => {
    if (p.textContent.includes("error")) {
        p.classList.add("error")
    } else if (p.textContent.includes("success")) {
        p.classList.add("success")
    }
})

const button = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")
const close = document.querySelector(".popup-close")

button.addEventListener("click", () => {
    popup.style.display = "block"
})

close.addEventListener("click", () => {
    popup.style.display = "none"
})

popup.addEventListener("click", () => {
    popup.style.display = "none"
})