$(document).ready(function () {
	var hangman = [
		"</br></br></br></br></br> _ _ _",
		"</br>|</br>|</br>|</br>|</br>|_ _ _</br>",
		"&nbsp;_ _ _ _</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>|</br>|</br>|</br>|_ _ _</br>",
		"&nbsp;_ _ _ _</br>| /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>|</br>|</br>|</br>|_ _ _</br>",
		"&nbsp;_ _ _ _</br>| /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O</br>|</br>|</br>|_ _ _</br>",
		"&nbsp;_ _ _ _</br>| /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>|</br>|_ _ _</br>",
		"&nbsp;_ _ _ _</br>| /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/|</br>|</br>|_ _ _</br>",
		"&nbsp;_ _ _ _</br>| /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/|\\</br>|</br>|_ _ _</br>",
		"&nbsp;_ _ _ _</br>| /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/|\\</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/</br>|_ _ _</br>",
		"&nbsp;_ _ _ _</br>| /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/|\\</br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ \\</br>|_ _ _</br>",
		]
	var randomWordList = [
		"DIAMOND",
		"GALAXY",
		"FLOWER",
		"WATCH",
		"COMPUTER",
		"CHRISTMAS",
		"ROLLERCOASTER",
		"RHINOCEROS",
		"ARSON",
		"SILHOUETTE",
		"PHENOMENAL",
		"ROULETTE",
		"EPHEMERAL",
		"MALNOURISH",
		"INFURIATE",
		"PANDEMONIUM",
		"ASTONISHING",
		"BITTERSWEET",
		"CONTENTMENT",
		"PICTURESQUE",
		"ELOQUENCE",
		"ESCAPADE",
		
	]
	function start(){
		$('body').html('<a href="https://emilyrb.github.io" style="border:3px solid black;width:70px;height:20px;position:absolute;top:0;left:0;">HOME</a><header><h1>Hangman</h1><h3>Guess the word</h3></header><div id="main"><div id="popUpBox"><div id="popUpText"></div></div><div id="lines"></div><div id="inputArea"><input type="text" id="guess"><input type="submit" id="enter"></div><div id="bottom"><div id="incorrectGuesses"><p>Incorrect Guesses: </p><p id="incGuessLetter"></p></div><div id="hangmanLives"><p>Life</p><div id="display"><p id="hangmanDisplay"></p></div></div></div></div><footer><h6>Coded by Emily G</h6></footer>');
		theChosenWord = randomWordList[Math.floor((Math.random() * randomWordList.length))]
		numLines = [];
		
		for (var x = 0; x < theChosenWord.length; x++){
			numLines.push('_&nbsp;&nbsp;'); 
		}
		$('#lines').html(numLines);
		incGuessLetterList = [];
		numOfIncGuess = 0;
		totalGuessed = [];
	}
	start();
	
	$("#guess").keyup(function(event) {
		if (event.keyCode == 13) {
			document.getElementById("enter").click();
		}
	});
	
	// Check if letter guess is valid
	$(document).on('click', "#enter", function() {
	var letterGuess = $('#guess').val();
	$('#guess').val('');
		if (letterGuess.length > 1){
			$('#popUpText').text('Guess: ' + letterGuess.toUpperCase() + ' . Please only guess one letter.').fadeIn( 800 ).fadeOut( 800 );  
			//alert('Guess: ' + letterGuess.toUpperCase() + ' . Please only guess one letter.');
		} else if (letterGuess.length < 1){
			$('#popUpText').text('Guess: ' + letterGuess.toUpperCase() + ' . Please guess one letter').fadeIn( 800 ).fadeOut( 800 );
		} else if (isNaN(letterGuess) === false || letterGuess == " "){
			$('#popUpText').text('Guess: ' + letterGuess + ' . Please guess a letter').fadeIn( 800 ).fadeOut( 800 );  
		} else if (totalGuessed.includes(letterGuess)){
			$('#popUpText').text('Guess: ' + letterGuess.toUpperCase() + ' . You have already guessed ' + letterGuess).fadeIn( 800 ).fadeOut( 800 );  
		} else if (/^[a-zA-Z]+$/.test(letterGuess) === false){
			$('#popUpText').text('Guess: ' + letterGuess + ' . Is an invalid character').fadeIn( 800 ).fadeOut( 800 );  
		} else {
			totalGuessed.push(letterGuess);
			if (theChosenWord.includes(letterGuess.toUpperCase())){
				for (var i = 0; i < theChosenWord.length; i++){
					if (theChosenWord[i] == letterGuess.toUpperCase()){
						numLines[i] = letterGuess.toUpperCase() + '&nbsp;';
					}$('#lines').html(numLines);
				} 
			} else {
				numOfIncGuess++;
				incGuessLetterList.push(letterGuess.toUpperCase() + '&nbsp;&nbsp;');
				$('#incGuessLetter').html(incGuessLetterList);
			}
		}
		
		$('#hangmanDisplay').html(hangman[numOfIncGuess - 1]);
		if (numOfIncGuess >= 10){
			$('body').html("<h1>GAME OVER</h1><h2>The word was " + theChosenWord+ "</h2><h3>PLAY AGAIN?</h3><div id='yesno'><div id='yes'>YES</div><div id='no'>NO</div></div>");
			return false;
		}
		if (/_/.test(numLines) === false){
			$('body').html("<h1>YOU WON!!</h1><h2>The word was " + theChosenWord+ "</h2><h3>PLAY AGAIN?</h3><div id='yesno'><div id='yes'>YES</div><div id='no'>NO</div></div>");		
		}
	});
	$(document).on('click', "#yes", function() {
		start();
	});
	$(document).on('click', "#no", function() {
		$('body').html("<h1>ARE YOU SURE YOU WANT TO QUIT?</h1><div id='yesno'><div id='finalYes'>YES I WANT TO QUIT</div><div id='finalNo'>I WANT TO PLAY AGAIN</div></div>");
	});
	$(document).on('click','#finalYes',function(){
		window.close();
	});
	$(document).on('click','#finalNo',function(){
		start();
	});
});