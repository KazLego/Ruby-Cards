import { words } from "./words (1).js";
console.log(window.innerWidth, window.innerHeight);
let gamble = document.getElementsByClassName("gamble")[0]
let waste = document.getElementsByClassName("waste")[0]
let input = document.getElementById("input")
let secret_word = words[Math.floor(Math.random() * words.length)]
let used_letters = document.getElementsByClassName("uselet")[0]
let letters = []
let cards_Plurel = document.getElementsByClassName("cards")[0]
let undertale = document.getElementsByClassName("undertale")[0]
let title = document.getElementsByClassName("title")[0]
undertale.innerHTML = "_".repeat(secret_word.length)
gamble.onclick = function (event) {
    if(!letters.includes(input.value)){
        letters.push(input.value)
        console.log(input.value)
    }

    input.select()
    used_letters.innerHTML = letters
    if (secret_word.includes(input.value)) {
        console.log("yes")
        let ucw = ""
        let uc = 0
        for (let i = 0; i < secret_word.length; i = i + 1) {
            if (letters.includes(secret_word[i])) {
                console.log(secret_word[i])
                ucw = ucw + secret_word[i]
            } else {
                console.log("_");
                ucw = ucw + "_"
                uc = uc + 1
            }
        }
        if (uc == 0) {
            used_letters.innerHTML = "YOU WIN"
            used_letters.style.transform = "scale(10)"
            gamble.disabled = true
        }
        undertale.innerHTML = ucw
        // title.innerHTML="you win"

    }else{
        let card = document.getElementsByClassName("card")[0]
        let card2 = document.getElementsByClassName("card")
        if( card2.length == 1 ){
console.log("you lost buddy");
used_letters.innerHTML = "You lost all your money what do you do now"
gamble.disabled = true
undertale.innerHTML = secret_word

        }
        card.style.transform="translate(1000px,1000px) rotate( 1800deg)"
        card.classList.remove("card")
        setTimeout(() => {
            card.remove()  
        }, 5000);
    }
}
for (let i = 1; i < 5; i = i + 1) {
    console.log("cat" + 2 ** i)
}
// new for loop output 1000 900 800 700?
for (let i = 1000; i > 600; i = i - 100) {
    console.log(i)
}
waste.onclick = function (event) {
    letters = []
    secret_word = words[Math.floor(Math.random() * words.length)]
    undertale.innerHTML = "_".repeat(secret_word.length)
    used_letters.innerHTML = "THIS IS BASICALLY HANG MAN BUT YOU ARE GAMBLEING IF YOU LOOSE YOUR CARDS YOU LOOSE BUT IF YOU GUESS CORECTLY YOU WING WIN MONEY"
    used_letters.style.transform = "scale(1)"
    cards_Plurel.innerHTML =`
    <img  class="card card1" src="card-pixilart.png" alt="">
    <img  class="card card2" src="card-pixilart.png" alt="">
    <img  class="card card3" src="card-pixilart.png" alt="">
    <img  class="card card4" src="card-pixilart.png" alt="">
    <img  class="card card5" src="card-pixilart.png" alt="">
    `
    gamble.disabled = false
}
