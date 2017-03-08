var computerChoice = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var win = 0;
var lose = 0;
var guessLeft = 9;
var randomLetter =[];
var userChoice=[];

gameStart();

man.innerHTML = "You have "  + "" + guessLeft + "" + " guesses remaining";

var html =
"<p>wins: " + win + "</p>" +
"<p>losses: " + lose + "</p>";

document.querySelector("#game").innerHTML = html;

$(document).ready(function() {
   $("#restartButton").on("click", function () {
     location.reload();
 	});
});

function gameStart() {
	guessLeft = 9;
	randomLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];

}

document.onkeyup = function(event){
	var pressedkey=event.key;
	userChoice.push(event.key);
	var check = (userChoice === event.key); //.indexOf(event.key);
	checkLetter(check,event.key);
	console.log(guessLeft, randomLetter, userChoice, userGuess, lose);
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	gameOver();

	//gameOver(); 
}


function checkLetter(check,key,userGuess){ //add second handle to compare LETTER selection to position 
	if (userGuess !== randomLetter){
		guessLeft--;
		man.innerHTML = "You have " + guessLeft + " lives remaining ";
	}
	else if (userGuess === randomLetter){
		win++;
		alert("oyjhjh")
	}
}

function gameOver(){
	if(guessLeft === 0){
		alert("try again!!");
		lose ++;
		lose.innerHTML = lose;
	}
}
