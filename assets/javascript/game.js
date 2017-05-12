// To make sure JavaScript only runs after HTML loads
$(document).ready(function() {

        //Variables for game stats, counters
        var wins = 0;
        var losses = 0;
        var totalScore = 0;

        //Variable to generate randomNumber between 30 and 120
        var minNumber = 30;
        var maxNumber = 120;
        var randomNumber = randomNumberFromRange(minNumber, maxNumber);

        //Function for computer to choose random number between range of 30 to 120	
        function randomNumberFromRange(minNumber, maxNumber) {
            return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        }
        console.log(randomNumber);

        // variable for crystal array
        var crystal = 0;
        // boolean variable for initial crystal value of null
        var crystal1 = 0;
        var crystal2 = 0;
        var crystal3 = 0;
        var crystal4 = 0;

        //Variables and function for generating values for gem buttonsActions for buttons - random value between 1-12 for each button
        var crystalMinNumber = 1;
        var crystalMaxNumber = 12;
        var crystalRandomNumber = randomNumberFromRange(crystalMinNumber, crystalMaxNumber);

        /* function addButtonRandomValue () {
		for (var i=0; i < array.length; i++) {
		buttonArray[1]	
	}
}
	var buttonArray = ["button"]
	*/
        //Assign random value for each crystal when button is clicked
        function giveCrystalRandomNumber() {
            $("#crystal1")[0].value = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
            $("#crystal2")[0].value = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
            $("#crystal3")[0].value = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
            $("#crystal4")[0].value = Math.floor(Math.random() * (crystalMaxNumber - crystalMinNumber + 1)) + crystalMinNumber;
        }

        //Start game - random number populates, set all other values to = 0
        function startGame() {
            $("#randomNumber").html("Goal: " + randomNumber);
            $("#wins").html("Wins: " + wins);
            $("#losses").html("Losses: " + losses);
            $("#totalScore").html("Total score: " + totalScore);
            giveCrystalRandomNumber();
        }

        startGame();

        //Define totalScore - empty array for button values to go into
        var totalScore = 0;

        //create event so that on click the crystal value adds to  total score
        $(".button").on("click", function(event) {
        	console.log(this);
        	console.log(this.value);
            totalScore = totalScore + this.value;
  //NEEDS FIXING: THIS IS ADDING BUTTON VALUES NEXT TO EACH OTHER NOT ADDING THEM!!
            $("#totalScore").html("Total score: " + totalScore);
            scoreChecker();
        });
        
        // update HTML with total score with each button click

        //If else statements - wins when total score = randomNumber then wins++ & alert
        //If score > randomNumber then losses++ & resetGame
        function scoreChecker() {
            if (totalScore === randomNumber) {
                wins++;
                $("#wins").html("Wins: " + wins);
                alert("Congrats, you win!");
            } else if (totalScore > randomNumber) {
                losses++;
                $("#losses").html("Losses: " + losses);
                alert("You lose!");
                resetGame();
            }
        }
        //reset game function: losses & total Score back to 0, new random values for goal & buttons
        function resetGame() {
            totalScore = 0;
            $("#randomNumber").html("Goal: " + randomNumber);
            $("#wins").html("Wins: " + wins);
            $("#losses").html("Losses: " + losses);
            $("#totalScore").html("Total score: " + totalScore);
            // New Random number generated for Goal & crystal values
            randomNumberFromRange();
            givecrystalRandomNumber();
            console.log("reset game is running");
        };




    })
    //BONUS: start button & full reset button
