$(document).ready(function(){  


//====================FUNCTIONS===============================//



// Dynatically create alphabet buttons 
//Use this array to dynamically create buttons on the screen.

 var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
 "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", 
 "X", "Y", "Z"];

 for(var i = 0; i < letters.length; i++){

//Inside the loop....

	var letterBtn = $("<button>");

	letterBtn.addClass("btn btn-primary");

	letterBtn.attr("dataLetter", letters[i]);

	letterBtn.text(letters[i]);

	$("#buttons").append(letterBtn);

 
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

var remainingLetters = word.length;





//======================ONCLICKEVENTS=========================//

//Start Game

$("#clickMe").on("click", function() {

	chooseWord(); 
 	
	var setupAnswerArray = function() {

	var answerArray = [];
	console.log(answerArray);
	console.log(word);



	
		
		$("#wordLength").append("<h2>This is a " + word.length + " letter word</h2>");
	 	


	};
	
	var answerArray = setupAnswerArray(word);
 	
 	$("#clickMe").remove();
 	//showPlayerProgress(answerArray);

});


//Create an "on-click" event attached to the "letters"
//Guess a letter and validate guess 
$(".btn-primary").on("click", function(){

	answerArray = [];

	var letter = $(this).attr('dataLetter');
	console.log("var holds value %s",letter);
	console.log("word var is %s",word);

	for(i=0;i <= word.length;i++){

		if(letter == word[i]){
			
			answerArray[i] = word[i];
			
			console.log("Good guess! %s", answerArray); 
			
			
			$("#wordDisplay").append("<span>" + answerArray[i] + "</span>");
		
		}


	}

});






















//Document Ready 
});
































/*

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




















  	


