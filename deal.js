function dealCards(card, playerCardIndex, dealerCardIndex, turn, orient) {
    let gameSpace = document.getElementById("gameSpace");
    console.log(card);
    if(orient % 2 != 0) {
        let faceUp = document.createElement("img");
        console.log("test");
        if(turn%2 == 0) {
            faceUp.setAttribute("class", "playerCard card");
            
            faceUp.setAttribute("src", "./images/playingCards/cardBack.png");
            moveToPlayer(faceUp, playerCardIndex, 400, card);
            
        } else if(turn%2!=0) {
            faceUp.setAttribute("class", "dealerCard card");
            faceUp.setAttribute("src", "./images/playingCards/cardBack.png");
            moveToDealer(faceUp, dealerCardIndex, card);
        }
            

        gameSpace.appendChild(faceUp);
    }
    if(orient % 2 == 0) {
        let faceDown = document.createElement("img");
        faceDown.setAttribute("src", "./images/playingCards/cardBack.png");
        faceDown.setAttribute("class", "dealerCard card");
        faceDown.setAttribute("id", "flipped");
        moveToDealerFD(faceDown, dealerCardIndex);

        gameSpace.appendChild(faceDown);
    }
    
}

function moveToPlayer(faceUp, playerCardIndex, ypx, card) {
    var id = null;
    var elem = faceUp;
    elem.style.width =  "132.219px";
    elem.style.height = "191.969px";
    var right = 0;
    var rightMax = 60 - 6*playerCardIndex;
    var widthPercent = 1;
    var top = 10;
    elem.style.right = "0px";
    elem.style.top = "10px";
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (right == rightMax) {
          clearInterval(id);
        } else {
            widthPercent = 1 - right/(rightMax/2);
            //console.log(Math.abs(widthPercent));
            right+=1;
            top += ypx/rightMax;
            if(widthPercent < 0)
                elem.setAttribute("src", "./images/playingCards/"+card+".png");
            elem.style.width = (132.219 * Math.abs(widthPercent)) + 'px';
            elem.style.right = right + '%'; 
            elem.style.top = top + 'px'; 
        }
    }
}

function moveToDealer(faceUp, dealerCardIndex, card) {
    var id = null;
    var elem = faceUp;
    elem.style.width =  "132.219px";
    elem.style.height = "191.969px";
    var right = 0;
    var rightMax = 50 - 8*dealerCardIndex;
    var widthPercent = 1;
    elem.style.right = "0px";
    elem.style.top = "10px";
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (right == rightMax) {
          clearInterval(id);
        } else {
            widthPercent = 1 - right/(rightMax/2);
            //console.log(Math.abs(widthPercent));
            right+=1;
            if(widthPercent < 0)
                elem.setAttribute("src", "./images/playingCards/"+card+".png");
            elem.style.width = (132.219 * Math.abs(widthPercent)) + 'px';
            elem.style.right = right + '%';  
        }
    }
}

function moveToDealerFD(faceDown, dealerCardIndex) {
    var id = null;
    var elem = faceDown;
    elem.style.width =  "132.219px";
    elem.style.height = "191.969px";
    var right = 0;
    var rightMax = 50 - 8*dealerCardIndex;
    elem.style.right = "0px";
    elem.style.top = "10px";
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (right == rightMax) {
          clearInterval(id);
        } else {
            right+=1;
            elem.style.right = right + '%';  
        }
    }
}