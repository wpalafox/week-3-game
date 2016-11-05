$(document).ready(function(){  

var chooseWord = function() {
	
	var words = [  
		"zilkerpark",
		"mopac",
		"sixthstreet",
		"rainystreet",
		"bartonsprings",
		"texasstatecapital",
		"laketravis",
		"cathedralofjunk",
		"snarfs",
		"homslicepizza",
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


	return prompt("guess a letter");

	

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

var showAnswerAndCongratulatePlayer = function(answerArray){

	showPlayerProgress(answerArray);
	alert("sweet, the answer was " + answerArray.join(" "));

	};


var word = chooseWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

//Main Game Loop

 $("#clickMe").on("click", function() {

while(remainingLetters > 0){showPlayerProgress(answerArray);
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

});






});








  	


