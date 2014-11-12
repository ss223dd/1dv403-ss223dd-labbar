"use strict";

window.onload = function(){
	
	var secret = Math.floor( Math.random() * 100)+1; // Randomizes an integer between 1-100.
	var numberOfGuesses = 0;
	
	// Will put in additional/further comments here later.
	// Also need to ask more about the d's/don't's/when to use th +op for variables types conversion and whatnot.
	// Plus the == and ==='s and how to prevent floating number. Want to use isInterger function.
	var guess = function(number){
		console.log("Det hemliga talet: " + secret);
		console.log("Du gissade: " + number);
		
		if (+number >= 1 && +number <= 100){
			
			numberOfGuesses += 1;
			
			if (+number === +secret){
				return [true, "Grattis du gissade rätt! Det hemliga talet var " + secret + 
				" och du behövde " + numberOfGuesses + " giltiga gissningar för att hitta det."];
			}
			else if (+number < +secret){
				return [false, "Fel! Det hemliga talet är högre än " + number +"! Försök igen."];
			}
			else{
				return [false, "Fel! Det hemliga talet är lägre än " + number +"! Försök igen."];
			}
		}
		else if (Number.isNaN(+number)){
			return [false, "Fel format! Vänligen ange ett heltal."];
		}
		else{
			return [false, number + " är utanför intervallet 0 - 100. Försök igen."];
		}
	};
	
	// ------------------------------------------------------------------------------

	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");
	
	input.focus(); // Sets focus to textbox upon page load. 														<<<<----CHANGE!
	
	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
		
		var form = document.getElementById("myForm"); // Clears textbox after each attempt. 						<<<<----CHANGE!
		form.reset();
		
		p.innerHTML = answer[1]; // Skriver ut texten från arrayen som skapats i funktionen.

		if(answer[0] === true){ // Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};