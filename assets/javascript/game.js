var computerChoice = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var win = 0;
var lose = 0;
var guessLeft = 9;
var randomLetter =[];

gameStart();

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

}

function gameOver(){
	if (lives === 0){
		alert ("You are the weakest link, goodbye!")
	}
}