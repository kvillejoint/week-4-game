// To make sure JavaScript only runs after HTML loads
$(document).ready(function() {

//Variables for game stats and counters
	var wins = 0;
	var losses = 0;

//Variable for computerGuess to pick random value as user goal between 30 and 120
	var minNumber = 30;
	var maxNumber = 120;
	var randomNumber = randomNumberFromRange (minNumber, maxNumber);

//Function for computer to choose random number between range	
	function randomNumberFromRange (minNumber, maxNumber) {
		return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	}
	console.log(randomNumber);
















}