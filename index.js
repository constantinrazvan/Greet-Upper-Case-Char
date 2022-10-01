var name = prompt("What's your name?")          // taking value of name
var firstChar = name.slice(0,1);                // taking first character from name
var upperFirst = firstChar.toUpperCase();       // making first char upper case 
var restOf = name.slice(1, name.length);        // taking the rest of the name
var restLower = restOf.toLowerCase();           // making it lower case to be sure that this is lower case
var result = upperFirst + restLower;            // adding both together
alert(`Hello, ${result}`);                      // alert the result
