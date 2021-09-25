let dealButton = document.getElementById("dealButton");
let rulesButton = document.getElementById("rules");
// let hitButton = document.getElementById("hitButton");
// let standButton = document.getElementById("standButton")

let inGame = false;

dealButton.addEventListener("click", function () {
    dealButton = document.getElementById("dealButton").style.visibility = "hidden";
    rulesButton = document.getElementById("rules").style.visibility = "hidden";
    console.log("The game is running");
    inGame = true;
});


/*
hitButton.addEventListener("click", function () {
    hitButton = document.getElementById("hitButton")
});


button.addEventListener("click", function () {
    standButton = document.getElementById("standButton")


});
*/