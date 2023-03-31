const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const closedBiscuit = document.querySelector(".screen1 img")
const otherBiscuitButton = document.querySelector(".screen2 button")
let message = document.querySelector(".screen2 p")
let randomNumber = Math.round(Math.random() * 11)
let luckyPhrases = []

luckyPhrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Siga os bons e aprenda com eles.",
  "O bom-senso vale mais do que muito conhecimento.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "Amizade e Amor são coisas que se unem num piscar de olhos.",
  "Todas as coisas são difíceis antes de se tornarem fáceis.",
]

closedBiscuit.addEventListener("click", showScreen2)
document.addEventListener("keypress", keyEnter)
otherBiscuitButton.addEventListener("click", backToScreen1)

function showScreen2() {
  changeScreen()
  message.innerText = luckyPhrases[randomNumber]
}

function backToScreen1(e) {
  e.preventDefault()

  changeScreen()

  randomNumber = Math.round(Math.random() * 11)
}

function changeScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function keyEnter(e) {
  if (e.key == "Enter" && screen2.classList.contains("hide")) {
    showScreen2()
  }
}
