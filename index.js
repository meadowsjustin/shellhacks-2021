let dealButton = document.getElementById("dealButton");
let rulesButton = document.getElementById("rulesButton");
let rules = document.getElementById("rules");
let hitButton = document.getElementById("hitButton");
let standButton = document.getElementById("standButton");
let deck = document.getElementById("deck");
let counter = document.getElementById("counter");
let dealerCounter = document.getElementById("dealerCounter");
let playAgainButton = document.getElementById("playAgain");

let choices = document.getElementById("choices");

let inGame = false;
let settingUp = false;
let playerCardNum = 0;
let dealerCardNum = 0;
let dealerCards = [];
let playerCards = [];
let dealerTotal = 0;

// function generateCard() {
//     let card = { face: "", suit: "", value: "" };
//     const possibleFaces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
//     const possibleSuits = ['S', 'C', 'H', 'D']

//     /* const possibleCards = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
//                     11       2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
//                            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
//                            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, ]
//     */
//     let faceCharIndex = getRandomInt(13)
//     card.face = possibleFaces[faceCharIndex]
//     card.suit = possibleSuits[getRandomInt(4)]

//     if ((faceCharIndex > 0) || (faceCharIndex < 9)) {
//         card.value = faceCharIndex + 1
//     } else if (faceCharIndex = 0) {
//         card.value = 11
//     } else if (faceCharIndex > 8) {
//         card.value = 10
//     }


//     return card;
// }

function CardConstructor(face, suit, value) {
    this.face = face;
    this.suit = suit;
    this.value = value;
}

function cardGenerator() {
    const possibleFaces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
    const possibleSuits = ['S', 'C', 'H', 'D']
    let faceCharIndex = getRandomInt(13)

    if(faceCharIndex <= 9) {
        cardValue = faceCharIndex + 1;
    }else if(faceCharIndex > 9) {
        cardValue = 10;
    }

    let card = new CardConstructor(possibleFaces[faceCharIndex],possibleSuits[getRandomInt(4)], cardValue);
    return card; 
}



rules.style.display = "none";
rulesButton.addEventListener("click", () => {

    if(rules.style.display === "none") {
        rules.style.display = "block";
        rulesButton.innerText = "HIDE RULES";
    } else {
        rules.style.display = "none";
        rulesButton.innerText = "SHOW RULES";
    }
    console.log("Rules button Click");


});

let dealerCardIndex = 0;
let turn = 0;
let orient = 1;

totalHandValue = 0;
totalDealerValue = 0;



dealButton.addEventListener("click", function () {
    dealButton.style.display = "none";
    rulesButton.style.display = "none";
    rules.style.display = "none";
    console.log("The game is running");

    inGame = true; 
    
    deck.style.visibility = "visible";

    playerCards[playerCardNum++]=cardGenerator();
    console.log(playerCards[0]);
    updateCounter(playerCards[0].value);
    console.log(totalHandValue);
    //1st player card

    dealerCards[dealerCardNum++]=cardGenerator();
    console.log(dealerCards[0]);
    updateDealerCounter(dealerCards[0].value);
    console.log(totalDealerValue);
    //1st dealer card
        
    playerCards[playerCardNum++]=cardGenerator();
    console.log(playerCards[1]);
    updateCounter(playerCards[1].value);
    console.log(totalHandValue);
    //2nd player card        
    
        
    dealCards(playerCards[0].face + playerCards[0].suit, 0, 0, turn++, 1) 
    setTimeout(function(){dealCards(dealerCards[0].face + dealerCards[0].suit, 1, 0, turn++, 1)}, 1000);
    setTimeout(function(){dealCards(playerCards[1].face + playerCards[1].suit, 1, 1, turn++, 1)}, 2000);
    setTimeout(function(){dealCards("cardBack", 2, 1, turn++, 0)}, 3000); // 2nd Dealer Card (FD)
    let flipped = document.getElementById("flipped");
    dealerCardNum++;
    
    setTimeout(function(){
        choices.style.display = "inline-block";
        counter.style.visibility = "visible";
        dealerCounter.style.visibility = "visible";
        counter.innerHTML = totalHandValue;
        dealerCounter.innerHTML = totalDealerValue;
    }, 4000);
    
        
    console.log(playerCardNum);
});

function updateCounter(value) {
    totalHandValue += value;
    counter.innerHTML = totalHandValue;
    if(totalHandValue <21) {
        counter.style.color = "black";
    }
    else if(totalHandValue == 21) {
        counter.style.color = "green";
    }
    else if(totalHandValue >= 21) {
        counter.style.color = "red";
    }
    
}

function updateDealerCounter(value) {
    totalDealerValue += value;
    dealerCounter.innerHTML = totalDealerValue;
    if(totalDealerValue <21) {
        dealerCounter.style.color = "black";
    }
    else if(totalDealerValue == 21) {
        dealerCounter.style.color = "green";
    }
    else if(totalDealerValue >= 21) {
        dealerCounter.style.color = "red";
    }
    
}

function mainMenu() {
    hitButton.style.display = "none";
    standButton.style.display = "none";
    playAgainButton.style.display = "inline";
}

playAgainButton.addEventListener("click", function() {
    location.reload();
});

hitButton.addEventListener("click", function () {
    playerCards[playerCardNum] = cardGenerator();
    console.log(playerCards[playerCardNum]);
    let cardString = playerCards[playerCardNum].face + playerCards[playerCardNum].suit;

    
    dealCards(cardString, playerCardNum, dealerCardNum, turn, orient);
    updateCounter(playerCards[playerCardNum].value);
    playerCardNum++;
    
    if(totalHandValue > 21) {
        setTimeout(()=>{counter.innerHTML = "You went bust!"; mainMenu();}, 2000);
    }else if(totalHandValue == 21) {
        setTimeout(()=>{counter.innerHTML = "BLACKJACK"; mainMenu()}, 2000);
    }

    
    turn +=2;


    // console.log(playerCardNum);
});

function flipCard(elem) {
    var id = null;
    var card = cardGenerator();
    elem.style.width =  "132.219px";
    elem.style.height = "191.969px";
    elem.style.right = elem.right;
    elem.style.top = "10px";
    var widthPercent = 1;
    right = 0;
    rightMax = 60;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
        if (right == rightMax) {
          clearInterval(id);
        } else {
            widthPercent = 1 - right/(rightMax/2);
            right ++;
            //console.log(Math.abs(widthPercent));
            if(widthPercent < 0)
                elem.setAttribute("src", "./images/playingCards/"+card.face + card.suit+".png");
            elem.style.width = (132.219 * Math.abs(widthPercent)) + 'px';  
        }
    }
    updateDealerCounter(card.value);
}

standButton.addEventListener("click", function () {

    flipCard(flipped);
    mainMenu();

    while(totalDealerValue < 17) {
        dealerCards[++dealerCardNum]=cardGenerator();
            console.log(dealerCards[dealerCardNum]);
        updateDealerCounter(dealerCards[dealerCardNum].value);
            console.log(totalDealerValue);
        setTimeout(function(){dealCards(dealerCards[dealerCardNum].face + dealerCards[dealerCardNum].suit, 1, 0, turn++, 1)}, 1000);
    }
    if(totalHandValue >= totalDealerValue) {
        setTimeout(()=>{counter.innerHTML = "You won against the Dealer!"; mainMenu();}, 2000);
    }

});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}