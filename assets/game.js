$(document).ready(function(){  

//Arrays to host the incorrect and correct guesses
var wrongGuesses = [];
var rightGuesses = [];
var lettersArray = []; 
var answerArray = [];

answerArray.join("");

var removedLetter;

//variables to check game status
var gameOver =false;
var guessesRemaining = 12;


//====================FUNCTIONS===============================//


// Dynatically create alphabet buttons 
//Use this array to dynamically create buttons on the screen.

 var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
 "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", 
 "X", "Y", "Z"];

 
var createButtons = function(){ 
 


 for(var i = 0; i < letters.length; i++){


//Inside the loop....

	var letterBtn = $("<button>");

	letterBtn.addClass("btn btn-primary");

	letterBtn.attr("dataLetter", letters[i]);

	letterBtn.text(letters[i]);

	$("#buttons").append(letterBtn);

 
	};

};





var chooseWord = function() {

//Beginning of alert-based program 
	var words = [  
		"LONGHORNS",
		"BATS",
		"WEIRD",
		"ACL",
		"BARBECUE",
		"BREAKFAST",
		"BOOTS",
		"LESLIE",
		"MUSIC",
		"WHATABURGER",
	];

	return words[Math.floor(Math.random()*words.length)];

};


var word = chooseWord();

var remainingLetters = word.length;





//======================ONCLICKEVENTS=========================//

//Start Game

$("#clickMe").on("click", function() {

	

	createButtons();

	chooseWord(); 
 	
	var setupAnswerArray = function() {

	var answerArray = [];
	console.log(answerArray);
	console.log(word);



	
		
		$("#wordLength").append("<h2> "+ word.length + " letter word</h2>");
	 	


	};
	
	var answerArray = setupAnswerArray(word);
 	
 	$("#clickMe").remove();
 	//showPlayerProgress(answerArray);

});


//Create an "on-click" event attached to the "letters"
//Guess a letter and validate guess - basically the game loop
$(document).on("click",".btn-primary" ,function(){

	//Set of instructions to delete the pushed button 

	var letter = $(this).attr('dataLetter');
	
	var index = letters.indexOf(letter);

	console.log("Index of letter is: "
		+ index);

	if(index > -1){
		letters.splice(index, 1);
	}

	$('#buttons').empty();

	createButtons();

	 for(i=0;i <= word.length ;i++){

		if(letter == word[i]){
			
			//splice the letter in the appropriate index position
			answerArray.splice(i, 0, word[i]);

			console.log("Good guess! %s", answerArray.join(""));

			console.log("in Func");
			
			$("#wordDisplay").empty();
			
			$("#wordDisplay").append("<h2>" + answerArray.join("") + "</h2>");
		
		}


	}

	if(answerArray.length === word.length){

		alert("You Win! Keep Austin Weird :)");
		$("#youWin").append("<h2>YOU WON!</h2>");
		console.log("Congratualtions!")
	}


});







//Document Ready 
});











//Code Graveyard


/*

var showPlayerProgress = function(answerArray){
	
	alert(answerArray.join(" "));

};

var getGuess = function(){


	return prompt("guess a letter");

	
};



var showAnswerAndCongratulatePlayer = function(answerArray){

	showPlayerProgress(answerArray);
	alert("sweet, the answer was " + answerArray.join(" "));

	};



var updateGameState = function(guess, word, answerArray){

//Update answerArray and return a number showing how many times the guess appears in the 

	var appearances = 0;
	for(var j = 0; j < word.length; j++){

			if(word[j] === guess){
				answerArray[j] = guess;
				
				appearances++;
				
				
				}
			}
		
	return appearances;
		
};

while(remainingLetters > 0){
	showPlayerProgress(answerArray);
	var guess = getGuess();
	if(guess === null){
		break;

	} else if (guess.length !== 1){
		alert("enter a single letter, please")

	}else{
		
		var correctGuess = updateGameState(guess, word, answerArray);
		
		remainingLetters = remainingLetters - correctGuess;

	}

	
	}

	showAnswerAndCongratulatePlayer(answerArray); 

	*/


