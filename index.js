let dealButton = document.getElementById("dealButton");
let rulesButton = document.getElementById("rules");
let hitButton = document.getElementById("hitButton");
let standButton = document.getElementById("standButton")

let inGame = false;
let playerCardNum;
let dealerCardNum;
let dealerCards = [];
let playerCards = [];
let dealerTotal = 0;


dealButton.addEventListener("click", function () {
    dealButton = document.getElementById("dealButton").style.visibility = "hidden";
    rulesButton = document.getElementById("rules").style.visibility = "hidden";
    console.log("The game is running");

    inGame = true;
    playerCardNum = 0;
    dealerCardNum = 0;

    // Dealer's initial cards
    dealerCards[0] = generateCard();
    dealerCards[1] = "flipped";
    dealerCardNum = 1

    // Player's initial cards
    playerCards[0] = generateCard();
    playerCards[1] = generateCard();
    playerCardNum = 2
});



hitButton.addEventListener("click", function () {
    playerCards[playerCardNum] = generateCard();
    playerCardNum++;
});


standButton.addEventListener("click", function () {

    while (dealerTotal < 17) {
        dealerCards[dealerCardNum] = generateCard();
        dealerCardNum++;
        dealerTotal = handValue(dealerCards);
    }

    console.log(dealerTotal);
    inGame = false;

});

function generateCard() {
    let card = { face: "", suit: "", value: "" };
    const possibleFaces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
    const possibleSuits = ['S', 'C', 'H', 'D']

    /* const possibleCards = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
                    11       2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
                           2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
                           2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, ]
    */
    let faceCharIndex = getRandomInt(13)
    card.face = possibleFaces[faceCharIndex]
    card.suit = possibleSuits[getRandomInt(4)]

    if ((faceCharIndex > 0) || (faceCharIndex < 9)) {
        card.value = faceCharIndex + 1
    } else if (faceCharIndex = 0) {
        card.value = 11
    } else if (faceCharIndex > 8) {
        card.value = 10
    }


    return card;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function handValue(cardArray) {
    length = cardArray.length
    var totalValue;

    for (let i = 0; i < length; i++) {
        totalValue += cardArray[i].value
    }

    return totalValue;
}