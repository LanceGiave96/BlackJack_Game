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
let cards_Section = document.getElementById("cards-Section")
cards_Section.innerHTML = '<div id="cards-Section"></div>'
let inner_Cards_Section = ""

function getRandomCard()
{   
    let randomNumber = Math.floor(Math.random() * 13) + 1
    let image_Path = ""

    if(randomNumber<=10)
    {
        image_Path = "Cards-image/" + randomNumber + ".jpg"
    }
    else
    {
        switch(randomNumber)
        {
            
            case 11:
                image_Path = "Cards-image/Q.jpg"
                break

            case 12:
                image_Path = "Cards-image/K.jpg"
                break

            case 13:
                image_Path = "Cards-image/J.jpg"
                break

        }
    }

    inner_Cards_Section += '<img src="' + image_Path + '" class="card_Image">'
    cards_Section.innerHTML = inner_Cards_Section

    if(randomNumber > 10)
        return 10
    else if(randomNumber === 1)

        if(sum + 11 <= 21)
            return 11
        else
            return 1

    else
        return randomNumber

}

function startGame()
{   
    if(chips >= 10)
    {

        cards_Section.innerHTML = '<div id="cards-Section"></div>'
        inner_Cards_Section = ""

        chips-= 10
        playerEl.textContent = player.name + ": €" + chips
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        sum = firstCard
        let secondCard = getRandomCard()
        sum += secondCard
        cards = [firstCard,secondCard]

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
