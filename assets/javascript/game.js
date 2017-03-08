var computerChoice = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var win = 0;
var lose = 0;
var guessLeft = 9;
var randomLetter =[];
var userChoice = [];

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

document.onkeyup = function(event) {

	var pressedkey = event.key;

	userChoice.push(pressedkey);

	checkLetter(pressedkey);
	console.log(randomLetter);


	//gameOver(); 
}


function checkLetter(letterToCheck) { //add second handle to compare LETTER selection to position 
	if(letterToCheck === randomLetter) {
		win ++;
		alert("you win!");

	} 
	else{
		//you lost
		guessLeft--;
	}
	
}


