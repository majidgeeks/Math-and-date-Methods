// |	MATH METHODS	| DATE	METHODS|


// 1. Write a program that takes a positive integer from user & 
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 

// var h1 = document.querySelectorAll("h1")[0];

// var userInput = +prompt("type number here");

// h1.innerHTML =typeof(userInput)+": " + userInput;

// h1.innerHTML = "round off value : "+ Math.round( userInput);

// h1.innerHTML = "floor value : "+ Math.floor(userInput)

// h1.innerHTML = "ceil value : "+ Math.ceil(userInput);



// 2. Write a program that takes a negative integer from user & 
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 

// var h1 = document.querySelectorAll("h1")[0];

// var userInput = +prompt("type negative number value here");

// h1.innerHTML =typeof(userInput)+": " + userInput;

// h1.innerHTML = "round off value : "+ Math.round( userInput);

// h1.innerHTML = "floor value : "+ Math.floor(userInput)

// h1.innerHTML = "ceil value : "+ Math.ceil(userInput);


// 3. Write a program that takes a positive floating point number 
// from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var h1 = document.querySelectorAll("h1")[0];

// var userInput = +prompt("type floating number value here");

// h1.innerHTML = "number is : "+ userInput;


// h1.innerHTML = "round off value : "+ Math.round(userInput);


// h1.innerHTML = "Floor value is : "+Math.floor(userInput);


// h1.innerHTML = "ceil value is "+Math.ceil(userInput);


// 4. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var h1 = document.querySelectorAll("h1")[0];

// var userInput = +prompt("type negative floating number value here");

// h1.innerHTML = "number is : "+ userInput;

// h1.innerHTML = "round off number value is : " +Math.round(userInput);

// h1.innerHTML = "floor value is : " +Math.floor(userInput);

// h1.innerHTML = "ceil value is : " +Math.ceil(userInput);


// 5. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 


// var h1 = document.querySelectorAll("h1")[0];

// var userInput = +prompt("type negative floating number value here");

// h1.innerHTML = "absolute value is : "+ Math.abs(userInput);


// 6. Write a program that simulates a dice using random() method 
// of JS Math class. Display the value of dice in your browser.


// var h1 = document.querySelectorAll("h1")[0];

// // var userInput = +prompt("type number here for random");

// h1.innerHTML =Math.floor(Math.random()*10);

// 7. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser.

// var h1 = document.querySelectorAll("h1")[0];

// var toss = Math.floor(Math.random()*2);

// document.write(toss);

// var player1 = "head";
// var player2 = "tail";

// if(toss === 0){
//     alert("player1 win");
// }
// else{
//     alert("player2 win");
// };


// 8. Write a program that shows a random number between 1 and 
// 100 in your browser.


// var h1 = document.querySelectorAll("h1")[0];

// var randomNumber =  Math.floor(Math.random()*100);

// h1.innerHTML = randomNumber;


// 9. Write a program that asks the user about his weight. Parse the 
// user input and display his weight in your browser. Possible user 
// inputs can be:
// a. 50

// var userwieght =parseInt(prompt("type your wieght"));

// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = userwieght;

// b. 50kgs


// var userwieght =parseInt(prompt("type your wieght"));

// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = userwieght + " Kgs ";

// c. 50.2kgs

// var userwieght =parseInt(prompt("type your wieght"));

// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = userwieght + " Kgs ";

// d. 50.2kilograms

// var userwieght =parseInt(prompt("type your wieght"));

// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = userwieght + " Kilograms ";



// 10. Write a program that stores a random secret number from 1 
// to 10 in a variable. Ask the user to input a number between 1 
// and 10. If the user input equals the secret number, congratulate 
// the user

// var userInput = +prompt("enter number from 1 to 10");

// var myNum = 5;

// var randomNumber = Math.floor(Math.random(userInput)*10 );

// console.log(randomNumber);

// if(randomNumber === myNum) {
//     alert("you won");
    
// }
// else{
//     alert("you lose");
// }



// 11. Write a program that displays current date and time in your 
// browser.

// var d = new Date();

// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = d;



// 12. Write a program that alerts the current month in words. For 
// example December.


// var d = new Date();

// var now = d.getMonth();

// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = now;



// 13. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show Sun.

// var month = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];


// var d = new Date();

// var now = month[d.getDay()];


// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = now;



// 14. Write a program that displays a message “It’s Fun day” if its 
// Saturday or Sunday today.

// var d = new Date("april 2, 2023");

// var now = d.getDay();

// var h1 = document.querySelectorAll("h1")[0];

// if(now === 0 || now === 6){
//    h1.innerHTML = "its Fun Day";
// }


// 15. Write a program that shows the message “First fifteen days of the 
// month” if the date is less than 16th of the month else shows “Last 
// days of the month”.

// var d = new Date();

// var day = d.getDate();

// var h1 = document.querySelectorAll("h1")[0];

// if(day < 15){
//     h1.innerHTML = "it is start days of month";
// }
// else{
//     h1.innerHTML = "last days of month";
// }



// 16. Write a program that determines the minutes since midnight, Jan. 
// 1, 1970 and assigns it to a variable that hasn't been declared 
// beforehand. Use any variable you like to represent the Date object.

// var d = new Date();

// var time = d.getTime(d.getMinutes())
// console.log(time)


// 17. Write a program that tests whether it's before noon and alert “Its 
// AM” else “its PM”.

// var d = new Date();

// var time = d.getHours();

// if(time < 12 ){
//     alert("AM")
// }
// else{
//     alert("PM")
// }

// 18. Write a program that creates a Date object for the last day of the 
// last month of 2020 and assigns it to variable named laterDate

// var laterDate = new Date("December 31, 2020");


// 19. Create a date object of the starting date of this Ramadan and alert 
// the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

//?????????????????????????????????/



// 20. Write a program that displays in your browser the seconds that 
// elapse between the reference date and the beginning of 2015.

// var d = new Date("January 1, 2015 12:43:00");

// var seconds = d.getTime();

// console.log(seconds / 1000);

// 21. Create a Date object for the current date and time. Extract the 
// hours, reset the date object an hour ahead and finally display the 
// date object in your browser.

// var d = new Date();

// var time = d.getTime() /(1000 * 60 * 60 * 24);
// console.log(time)

// var hour = d.setHours(1);

// console.log(hour)

// 22. Write a program that creates a date object and show the date 
// in an alert box that is reset to 100 years back?

// var now = new Date();
// var year100Ago = now.getFullYear()-100;
// console.log(year100Ago);



// 23. Write a program to ask the user about his age. Calculate and 
// show his birth year in your browser.

// var userAge = prompt("enter your age");
//????????????????????????????????????





// 24. Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 decimal 
// places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// &
// Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge