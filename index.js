var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var numberDice1 = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", numberDice1);

var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var numberDice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", numberDice2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<i style='color: red; font-size: 6.5rem;' class='fas fa-flag'></i>Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!<i style = 'color: red; font-size: 6.5rem;' class='fas fa-flag'></i>";
}
