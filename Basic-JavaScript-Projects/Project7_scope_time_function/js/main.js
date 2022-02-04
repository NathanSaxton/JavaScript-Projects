var x = 3;

function newFunction() {
    var y = 8;
    document.writeln(x + y);
    console.log(x + y);
}

function newerFunction() {
    document.writeln(x + y);
    console.log(x + y);
}

function Morning() {
    if (new Date().getHours() >= 6) {
        document.getElementById("click").innerHTML = "Good Morning";
    } else {
        document.getElementById("click").innerHTML = "Go back to sleep.";
    }
}

function Hello() {
    if (new Date().getMonth() == "1") {
        document.getElementById("something").innerHTML = "Happy Birth month!";
    } else {
        document.getElementById("something").innerHTML = "SSDD"
    }
}

function Game() {
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