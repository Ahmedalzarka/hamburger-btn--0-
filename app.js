let btn = document.getElementById("btn")
let sidePanel = document.getElementById("side-panel")

btn.addEventListener("click", () => {
    sidePanel.classList.toggle("active")
    btn.classList.toggle("active")
})