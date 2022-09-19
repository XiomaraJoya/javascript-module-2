var jumbotro = document.querySelector(".jumbotron");
var donaBike = document.querySelector(".buttons .btn-primary");
var voluntary = document.querySelector(".buttons .btn-secondary");

var blueButton = document.querySelector("#blueBtn")
blueButton.addEventListener("click", changeBlue)

function changeBlue () {
jumbotro.style.backgroundColor = "#588fbd";

donaBike.style.backgroundColor = "#ffa500";
voluntary.style.backgroundColor = "black";
voluntary.style.color = "white";
}

var orangeButton = document.querySelector("#orangeBtn")
orangeButton.addEventListener("click", changeOrange)

function changeOrange () {
jumbotro.style.background = "#f0ad4e";

donaBike.style.backgroundColor = "#5751fd";
voluntary.style.backgroundColor = "#31b0d5";
voluntary.style.color = "white";

}

var greenButton = document.querySelector("#greenBtn")
greenButton.addEventListener("click", changeGreen)

function changeGreen () {
jumbotro.style.backgroundColor = "#87ca8a";

donaBike.style.backgroundColor = "black";
voluntary.style.backgroundColor = "#8c9c08";

}
Footer
