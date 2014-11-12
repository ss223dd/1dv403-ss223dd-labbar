"use strict";

window.onload = function(){

	var birthday = function(date){
	var userDate = new Date(date);
	var currentDate = new Date();
	var daysTilNextBd;
	
	// Makes sure the user input isn't empty, can be read as a valid date/format
	// (.toISOString? Need to ask what goes here) and isn't of a future value. 
	if (!Date.parse(userDate.toString())){
		throw new Error ("Vänligen ange ett giltigt datum.");
	}
	else if (userDate > currentDate){
		throw new Error ("Kontrollera att du angivit rätt födelsedatum.");	
	}
	// Sets the year of the user input to be the same as the current year
	// in order to check if user's bd is to be or has already been this year...
	userDate.setFullYear(currentDate.getFullYear());
	
	//... and in case of the latter, we need to set the bd to be next year.
	if (userDate < currentDate){
		userDate.setFullYear(currentDate.getFullYear() + 1);
	}
	// Calculates the millisec diff of user's next bd to current date, rounded up and by division converted into a nr of days format. 
	// (switched from Math.floor/round before figuring out and determing this to be the better option in this case)
	daysTilNextBd = Math.ceil((userDate.getTime() - currentDate.getTime()) / (24*60*60*1000));
	
	// Since using the .ceil-rounding off method above (up to nearest integer), 
	// it leaves 365 instead of the BD case value of 0. Corrected with below.
	if (daysTilNextBd === 365){
		return 0;
	}
	return daysTilNextBd;

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};