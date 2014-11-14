"use strict";

var makePerson = function(persArr){

    // The function should receive an array (persArr) with obj's as elements (obj: persons with names and their age) and return a new obj containing
    // minAge, maxAge, averageAge and a string with the names sorted in alphabetic order.
    
    // Function should pass all tests by fullfilling their requirements in order to be complete.
    
    // Args in perArr obj's contain the 2 props: name (string of first and last name) and age (number).
    // EX: var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    
    // Return obj's 4 props: minAge (number), maxAge (number), averageAge (number), 
    // names (string of all the names of the persons, seperated with ", " and sorted in alphabetic order).
    
    // Test by console.log the result:
    
    // var makePerson = function(persArr) { var result = {};
    // Complete the assignment
    // return result; } 
    // var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    // var result = makePerson(data);
    // console.log(result);
    // EX: Object {minAge: 36, maxAge: 46, averageAge: 40, names: "Johan Leitet", "John Häggerud", "Mats Loock"}
    
    // Star-assignment: No loops (of type: for, while, do while) or conditional statements (if, switch)
    // Implement error handling on obj's (if, switch) making sure they contain valid data, like age being an integer and the name is a string.

    var names = [];
	var ages = [];
	var minAge = 0;
	var maxAge = 0;
	var ageSum = 0;
	var averageAge = 0;
	var result = {minAge: 0, maxAge: 0, averageAge: 0, names: ""};
	
	names = persArr.map(function(persArr){
	    if (typeof persArr.name !== "string"){
	        throw new Error (persArr.name + "verkar vara felaktigt angivet då det inte kan tolkas som ett giltigt namn.");
	    }
	    else{
	        return persArr.name;
	    }
	});
	
	// How to sort swe chars?
	names.sort().join(", ");
	
	ages = persArr.map(function(persArr){
	    if (persArr.age !== parseInt(persArr.age, 10)){
	        throw new Error ("Åldern måste vara ett heltal.");
	    }
	    else{
	        return persArr.age;
	    }
	});
	
	// Sort age and get min/max from array index/length or other method?
	ages.sort();
	
	

};

