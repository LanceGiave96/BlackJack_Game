let player = 
{
    name: "Enrico",
    chips: 150,
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.querySelector("#sum-el") 
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": €" + player.chips
let chips = player.chips

function getRandomCard()
{   
    let randomNumber = Math.floor(Math.random() * 13) + 1
    
    if(randomNumber > 10)
        return 10
    else if(randomNumber === 1)
        return 11
    else
        return randomNumber

}

function startGame()
{   
    if(chips >= 10)
    {
        
        chips-= 10
        playerEl.textContent = player.name + ": €" + chips

        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard,secondCard]
        sum = firstCard + secondCard

        renderGame()

    }

}

function renderGame()
{

    cardEl.textContent = "Cards: "
    for(let count=0; count < cards.length; count++)
    {
        cardEl.textContent += cards[count] + " "
    }

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

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message

}

function newCard()
{
    if(isAlive === true && hasBlackJack === false)
    {

        let card = getRandomCard()
        sum += card

        cards.push(card)
        renderGame()
        
    }

}
