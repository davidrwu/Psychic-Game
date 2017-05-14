      var computerLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

      var wins = 0;
      var losses = 0;
      var guessesLeft = 9;
      var userGuess;
      var guessList = [];
      var newGuess;
    
      var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];

      var newLetter = function(){
        computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
      }


      var reset = function(){
        guessesLeft = 9;
        guessList = [];
        newLetter();
      }


      document.onkeyup = function(event) {
        var userGuess = event.key;
        guessList.push(userGuess);
	      guessesLeft--;
       
        if (guessesLeft > 0 || userGuess === newGuess || userGuess === computerGuess){
            if (userGuess === newGuess || userGuess === computerGuess){
                wins++;
                document.querySelector('#wins').innerHTML = wins;
                reset();
            }
        }else if(guessesLeft === 0){
            losses++;
            document.querySelector('#losses').innerHTML = losses;
            reset();
        }
        
	  
       document.querySelector("#guessleft").innerHTML = guessesLeft;
       document.querySelector("#guessed").innerHTML = guessList;  
          
    	    for (i = 0; i < guessList.length; i++) {
            guessList[i];
	        }
	        console.log (computerGuess);
	             
          
      };