var pickWord = function() {
	
	var words = [  
		"javascript",
		"css",
		"michael",
		"jim",
		"hector"
		];

	return words[Math.floor(Math.random()*words.length)];

	};

var setupAnswerArray = function(word) {

	var answerArray = [];

	for(i = 0; i < word.length;i++){

		answerArray[i] = "_";

	}
	
	return answerArray;

};


var showPlayerProgress = function(answerArray){
	
	alert(answerArray.join(" "));

};


var getGuess = function(){


	return prompt("Guess a letter, or click cancel to stop.");

	

};




var updateGameState = function(guess, word, answerArray){

//Update answerArray and return a number showing how many times the huess appears in the 

	var appearances = 0;
	for(var j = 0; j < word.length; j++){

			if(word[j] === guess){
				answerArray[j] = guess;
				appearances++;

				}
			}
		
			return appearances;

		};

var showAnswerAndCongratulatePlayer = function(answerArray){

	showPlayerProgress(answerArray);
	alert("Good job! The answer was " + answerArray.join(" "));

};


var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

//Main Game Loop

while(remainingLetters > 0){showPlayerProgress(answerArray);
	var guess = getGuess();
	if guess (guess === null){
		break;

	} else if (guess.length !== 1){
		alert("Please enter a single letter.")

	}else{
		varCorrectGuess = updateGameState(guess, word, answerArray)
			;
		remainingLetters = remainingLetters - correctGuesses;

	}








}





