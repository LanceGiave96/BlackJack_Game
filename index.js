//Initialize variables
import bunch from "./bunch.js"
const deck = bunch.Deck
let actual_bunch = []
localStorage.setItem("deck",JSON.stringify(deck))
let firstLoad = true
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.querySelector("#sum-el") 
let messageEl = document.getElementById("message-el")
let button_Start = document.getElementById("btn-start")
let button_New_Card = document.getElementById("btn-new-card")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let cards_Section = document.getElementById("cards-Section")
cards_Section.innerHTML = '<div id="cards-Section"></div>'
let inner_Cards_Section = ""

//Function to start/restart game
button_Start.addEventListener("click",function(){   
        cards_Section.innerHTML = '<div id="cards-Section"></div>'
        inner_Cards_Section = ""
        isAlive = true
        hasBlackJack = false
        sum = 0
        let firstCard = getRandomCard()
        sum = firstCard
        
        //Start with one card
        cards = []
        cards.push(firstCard)

        //Start with two cards
        let secondCard = getRandomCard()
        sum += secondCard
        cards = [firstCard,secondCard]

        firstLoad = false
        renderGame()
    }
)

//Funciton to decide if the player is still alive
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

    if(!isAlive || hasBlackJack)
    {
        button_New_Card.style.display = "none"
        //button_Start.style.display = "block"
    }
    else
    {
        button_New_Card.style.display = "block"
        //button_Start.style.display = "none"
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message

}

//Get a new card and assign variables
button_New_Card.addEventListener("click",function(){
        if(isAlive === true && hasBlackJack === false)
        {

            let card = getRandomCard()
            sum += card

            cards.push(card)
            renderGame()
            
        }

    }
)
//Function called to throw a random card
function getRandomCard()
{   

    //Reload bunch when empty
    if(actual_bunch.length === 0)
    {
         //Alert of Deck shuffled (not in the first load)
        if(!firstLoad)
        {
            alert("Deck shuffled!")
        }

        actual_bunch = JSON.parse(localStorage.getItem("deck"))
    }
    button_Start.textContent = "NEW GAME"

    //Casual card from bunch
    let randomNumber = Math.floor(Math.random() * actual_bunch.length)
    
    //Path of card
    let image_Path = "Cards-image/" + actual_bunch[randomNumber].path

    //Saving value
    let value_card = actual_bunch[randomNumber].value
    if(value_card === 1 && 11 + sum <= 21)
        value_card = 11
    console.log("Number: " + randomNumber + " path: " + image_Path + " value: " + value_card + " sum: " + sum)

    //Remove card from bunch
    actual_bunch.splice(randomNumber,1)
   
    //Load card in the page
    inner_Cards_Section += '<img src="' + image_Path + '" class="card_Image">'
    cards_Section.innerHTML = inner_Cards_Section

    return value_card

}