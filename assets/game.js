$(document).ready(function(){  

//Arrays to host the incorrect and correct guesses
var wrongGuesses = [];
var rightGuesses = [];

var answerArray = [];

answerArray.join("");

var removedLetter;

//variables to check game status
var gameOver =false;
var guessesRemaining = 12;
var count = 0; 

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
		"HOMESLICE",
		"HOPDODDY",
		"GUADALUPE"
	];

	return word = words[Math.floor(Math.random()*words.length)];

};



//======================ONCLICKEVENTS============================//

//Start Game

$("#clickMe").on("click", function() {
	

	//clears all buttons then generates new ones
	$("#buttons").empty();
	createButtons();
	

	//empties counts
	$("#countDisplay").empty();
	
	
	
	//Empties word display and chooses a new word
	$("#wordDisplay").empty();
	chooseWord(); 

	var word = chooseWord();

	var remainingLetters = word.length;
 	
	var setupAnswerArray = function() {

	var answerArray = [];
	console.log(answerArray);
	console.log(word);

	$("#wordLength").empty();

	$("#wordLength").append("<h2> "+ word.length + " letter word</h2>");
	 	


	};
	
	var answerArray = setupAnswerArray(word);
 	
 	//$("#clickMe").remove();
 	//showPlayerProgress(answerArray);

});


//Create an "on-click" event attached to the "letters"
//Guess a letter and validate guess - basically the game loop
$(document).on("click",".btn-primary" ,function(){

	//handles and diplays the letters pushed




	//handles and displays the number of attempts 
	$("#countDisplay").empty();
	count++;

	wordDisplayBuffer = [];
	$("#countDisplay").append("<h2>attempts: " + count + "</h2>");



	//handles the user inputs and compares to word array 

	var letter = $(this).attr('dataLetter');
	
	var index = letters.indexOf(letter);

	console.log("Index of letter is: "
		+ index);

	if(word.includes(letter)&&(!(answerArray.includes(letter)))){
			answerArray.push(letter);
	}
	
	
	for(i=0;i <= word.length ;i++){

		if(answerArray.includes(word[i])){
			wordDisplayBuffer.push(word[i]);
		}
					
			
			
	}

	console.log("Good guess! %s", answerArray.join(""));

	$("#wordDisplay").empty();
			
	$("#wordDisplay").append("<h2>" + wordDisplayBuffer.join("") + "</h2>");
		


	if(wordDisplayBuffer.join("") === word){
		
		//clears all buttons then generates new ones
		$("#buttons").empty();
		createButtons();

		//empties word display and length
		//$("#wordDisplay").empty();
		//$("#wordLength").empty();

		//TODO: choose new word and clear answer array
		chooseWord();
		$("#wordDisplay").empty();
		
		alert("Nice! You found the answer "+wordDisplayBuffer.join("")+" in "+count+" attempts");
		count = 0; 
		$("#countDisplay").empty();
		console.log("Congratulations!")
	}


});































//Document Ready
});













