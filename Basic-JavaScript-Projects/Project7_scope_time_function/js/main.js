var x = 3; //global variable

function newFunction() {//add local and global variable
    var y = 8; //local variable
    document.writeln(x + y);
    console.log(x + y);
}

function newerFunction() { //create an error due to lack of local variable
    document.writeln(x + y);
    console.log(x + y);
}

function Morning() { //function using the Date() object
    if (new Date().getHours() >= 6) {
        document.getElementById("click").innerHTML = "Good Morning";
    } else {
        document.getElementById("click").innerHTML = "Go back to sleep.";
    }
}

function Hello() { //function using the else statement
    if (new Date().getMonth() == "1") {
        document.getElementById("something").innerHTML = "Happy Birth month!";
    } else {
        document.getElementById("something").innerHTML = "SSDD"
    }
}

function Game() { //guessing game i put together using if else statements
    var guess, winningNumber;
    guess = document.getElementById("number").value;
    winningNumber = Math.round((Math.random() * 10) + 1);
    console.log(winningNumber);
    if (guess == winningNumber) {
        document.getElementById("results").innerHTML = "You win!";
    } else if (guess >= 1 && guess <= 10 && guess != winningNumber) {
        document.getElementById("results").innerHTML = "Sike! That's the wrong number!";
    } else {
        document.getElementById("results").innerHTML = "Please enter a number between 1 and 10.";
    }
}

function Time_function() { //Time_function() outlined in the slides
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    } else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon.";
    } else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}