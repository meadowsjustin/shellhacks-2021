function generateCard() {
    let card = "";
    const possibleFaces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const possibleSuits = ['S', 'C', 'H', 'D']

    card += possibleFaces[getRandomInt(12)]
    card += possibleSuits[getRandomInt(4)]

    return card;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(generateCard())