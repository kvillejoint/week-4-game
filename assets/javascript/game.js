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
	var crystal1 = 0;
	var crystal2 = 0;
	var crystal3 = 0;
	var crystal4 = 0;

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

//Start game - random number populates, set all other values to = 0
	function startGame() {
		$("#randomNumber").text("Goal: " + randomNumber);
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		$("#totalScore").text("Total score: " + totalScore);

	}

startGame ();

//Assign random value for each crystal when button is clicked
	//function crystalRandomNumber() {
		//for (var i=0; i<=12; i++) {

		//}

//}


//function crystalRandomNumber() {
	crystal1 = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
	console.log(crystal1);
	crystal2 = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
	console.log(crystal2);
	crystal3 = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
	console.log(crystal3);
	crystal4 = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
	console.log(crystal4);
})
//$(button).on("click", function(event) {
	//$(total score).html(userScore)
	//when total score = goal then run  through if statements
//})

//EVENT CLICK FOR BUTTON AND ADD SCORE TO TOTAL SCORES
//crystalRandomNumber();

//Add value to total score on click or event key up

//If else statements - wins when total score = randomNumber then wins++ & alert
//if score > randomNumber then losses++ & resetGame
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
//reset game function: losses & total Score back to 0, new random values for goal & buttons
	function resetGame() {
		var totalScore = 0;
		$("#totalScore").text("Total score: " + totalScore);
		// New Random number generated for Goal & crystal values
		crystalRandomNumber();
		console.log("reset game is running");
	};

 	


//BONUS: start button & full reset button	