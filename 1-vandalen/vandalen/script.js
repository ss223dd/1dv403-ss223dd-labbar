"use strict";

var makePerson = function(persArr){
	
	// Uses the map method to iterate through "persArr" and, after verifying that the name is that of a valid string, 
	// creates/returns a new array (names) containing all the name props of persArr. 
	var names = persArr.map(function(persArr){
	    if (typeof persArr.name !== "string"){
	        throw new Error (persArr.name + "verkar vara felaktigt angivet då det inte kan tolkas som ett giltigt namn.");
	    }
	    else{
	        return persArr.name;
	    }
	});
	
	// Sorts the names using the localeCompare function in order to sort the strings even if they're in non-ASCII characters.
	names.sort(function(a, b){
		return a.localeCompare(b);
	});
	
	// Whatever error handling/data validation I use for the ages, the tests fail. When removing - the code passes all tests... What to use?
	var ages = persArr.map(function(persArr){
		//1st: if (persArr.age !== parseInt(persArr.age, 10)){
	    //         throw new Error ("Åldern måste vara ett heltal.");
	    //2nd: if (typeof persArr.age !== "number"){
	    //         throw new Error ("Åldern måste vara ett heltal.");
	    //3rd: if (isNaN(persArr.age)){
	    // 		   throw new Error ("Åldern måste vara ett heltal.");
	    //}
	    //else{
	        return persArr.age;
	    //}
	});
	
	// Sums up all the values within the ages-array.
	var ageSum = ages.reduce(function(a, b){
		return a + b;
	});
	
	// Self-explanatory but for clarification...
	var result = {
		minAge: Math.min.apply(Math, ages),
		maxAge: Math.max.apply(Math, ages),
		averageAge: Math.round(ageSum/ages.length),
		names: names.join(", ") // Joins all elements in the array into one string with the specified seperator ", ".
	};
	
	return result;
};

	var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    
    var result = makePerson(data);
    
    console.log(result);