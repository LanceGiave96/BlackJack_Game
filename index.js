
let fisrtCard = 10
let secondCard = 11
let sum = fisrtCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame()
{

    if(sum <= 20)
    {
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21)
    {
        hasBlackJack = true
        message = "You got BlackJack!"
    }
    else
    {
        message = "You are out of the game!"
        isAlive = false
    }

    let sumEl = document.querySelector("#sum-el")  
    sumEl.textContent = "Sum: " + sum

    let messageEl = document.getElementById("message-el")
    messageEl.textContent = message

}
