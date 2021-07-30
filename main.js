document.addEventListener('DOMContentLoaded', function () {
    var cardArrayUnshuffled = [
        {
            name: 'ball',
            img: 'images/ball.png'
        },
        {
            name: 'balloon',
            img: 'images/balloon.png'
        },
        {
            name: 'hand',
            img: 'images/hand.png'
        },
        {
            name: 'lightning',
            img: 'images/lightning.png'
        },
        {
            name: 'pointer',
            img: 'images/pointer.png'
        },
        {
            name: 'speech',
            img: 'images/speech.png'
        },
        {
            name: 'triangle',
            img: 'images/triangle.png'
        },
        {
            name: 'star',
            img: 'images/star.png'
        },
        {
            name: 'ball',
            img: 'images/ball.png'
        },
        {
            name: 'balloon',
            img: 'images/balloon.png'
        },
        {
            name: 'hand',
            img: 'images/hand.png'
        },
        {
            name: 'lightning',
            img: 'images/lightning.png'
        },
        {
            name: 'pointer',
            img: 'images/pointer.png'
        },
        {
            name: 'speech',
            img: 'images/speech.png'
        },
        {
            name: 'triangle',
            img: 'images/triangle.png'
        },
        {
            name: 'star',
            img: 'images/star.png'
        }
    ];
    // globals
    const cardArray = shuffleArray(cardArrayUnshuffled);
    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // create the game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/card-face.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // shuffles the card array so that the board is always layed out randomly
    function shuffleArray(inputArray) {
        const outputArray = [];
        let pushedItems = [];
        let randomItemNumber
        for (let i = 0; i < inputArray.length; i++) {
            do {
                randomItemNumber = Math.floor(Math.random() * inputArray.length);
            } while (pushedItems.includes(randomItemNumber));
            outputArray.push(inputArray[randomItemNumber]);
            pushedItems.push(randomItemNumber);
        }
        return outputArray;
    }

    // checks if a flipped up card matches with another flipped up card
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            cardsWon.push(cardsChosen);
            increaseScore();
            if (cardsWon.length * 2 === cardArray.length) {
                gameOver();
            }
        } else {
            cards[optionOneId].setAttribute('src', 'images/card-face.png');
            cards[optionTwoId].setAttribute('src', 'images/card-face.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
    }

    // flips up a card
    function flipCard() {
        let cardImg = this.getAttribute('src');
        increaseTurns();
        // checks if card has already been selected
        if (cardImg != 'images/blank.png') {
            var cardId = this.getAttribute('data-id');
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }
    // ends the game and asks user to start again
    function gameOver() {
        turns = document.getElementById('turns').innerHTML;
        alert(`You beat the game in ${turns} turns!`)
        // add modal here asking user to restart
        // retrigger the game
    }
    // increase the users score
    function increaseScore() {
        score = document.getElementById('result');
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }
    // increase the users turns
    function increaseTurns() {
        turns = document.getElementById('turns');
        turns.innerHTML = parseInt(turns.innerHTML) + 1;
    }
    createBoard();
})

