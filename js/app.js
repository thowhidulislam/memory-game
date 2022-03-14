const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())

// creating card and appending to div 'grid'
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardWon = []

const createBoard = () => {
    cardArray.forEach(cardElement => {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', cardArray.indexOf(cardElement))
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    })
}
createBoard()

//using normal function for click event
function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardsChosen)
        console.log(cardWon)
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, Try again!')
    }

    resultDisplay.textContent = cardWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congratualations!! You found them all.'
    }
}