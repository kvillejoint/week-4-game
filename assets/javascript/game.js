// To make sure JavaScript only runs after HTML loads
$(document).ready(function() {

//Variables for game stats, counters
	var wins = 0;
	var losses = 0;
	var totalScore = 0;

//Variable to generate randomNumber between 30 and 120
	var minNumber = 30;
	var maxNumber = 120;
	var randomNumber = randomNumberFromRange (minNumber, maxNumber);

//Function for computer to choose random number between range of 30 to 120	
	function randomNumberFromRange (minNumber, maxNumber) {
		return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	}
	console.log(randomNumber);

// variable for crystal array
	var crystal = [];
// boolean variable for initial crystal value of null
	var crystal1 = [];
	var crystal2 = [];
	var crystal3 = [];
	var crystal4 = [];

//Variables and function for generating values for gem buttonsActions for buttons - random value between 1-12 for each button
	var crystalMinNumber = 1;
	var crystalMaxNumber = 12;
	var crystalRandomNumber = randomNumberFromRange (crystalMinNumber, crystalMaxNumber);

	/* function addButtonRandomValue () {
		for (var i=0; i < array.length; i++) {
		buttonArray[1]	
	}
}
	var buttonArray = ["button"]
	*/
//Assign random value for each crystal when button is clicked
function givecrystalRandomNumber () {
	crystal1 = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
	console.log(crystal1);
	crystal2 = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
	console.log(crystal2);
	crystal3 = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
	console.log(crystal3);
	crystal4 = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
	console.log(crystal4);
}

//Start game - random number populates, set all other values to = 0
	function startGame() {
		$("#randomNumber").text("Goal: " + randomNumber);
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		$("#totalScore").text("Total score: " + totalScore);
		givecrystalRandomNumber();
	}

startGame ();

//Define totalScore - empty array for button values to go into
	var totalScoreArray = [];

//create event so that on click the crystal value adds to  total score
	$(".button").on("click", function(event) {	
		totalScoreArray = totalScore + crystalRandomNumber;
		$(totalScore).html(totalScoreArray);
	//$(".button").on("click", function() {

// update HTML with total score with each button click



//If else statements - wins when total score = randomNumber then wins++ & alert
//if score > randomNumber then losses++ & resetGame
	function scoreChecker () {
		if (totalScore === randomNumber) {
			wins++;
			$("#wins").text("Wins: " + wins);
			alert("Congrats, you win!");
		}
		else if (totalScore > randomNumber) {
			losses++;
			$("#losses").text("Losses: " + losses);
			alert("You lose!");
			resetGame();
		}
	}
//reset game function: losses & total Score back to 0, new random values for goal & buttons
	function resetGame() {
		totalScore = 0;
		$("#totalScore").text("Total score: " + totalScore);
		// New Random number generated for Goal & crystal values
		randomNumberFromRange ();
		givecrystalRandomNumber();
		console.log("reset game is running");
	};


	});	

})
//BONUS: start button & full reset button	