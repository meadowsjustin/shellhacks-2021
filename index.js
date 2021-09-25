const dealButton = document.getElementById("dealButton");
// const hitButton = document.getElementById("hitButton");
// const standButton = document.getElementById("standButton")

let inGame = false;

dealButton.addEventListener("click", function () {
    dealButton = document.getElementById("dealButton").style.visibility = "hidden";
    inGame = true;
    console.log("The game is running");
});
/*
button.addEventListener("click", function () {
    hitButton = document.getElementById("hitButton")
});


button.addEventListener("click", function () {
    standButton = document.getElementById("standButton")


});
*/