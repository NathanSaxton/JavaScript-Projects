var x = 3;

function newFunction(){
    var y = 8;
    document.writeln(x+y);
    console.log(x+y);
}

function newerFunction(){
    document.writeln(x+y);
    console.log(x+y);
}

function Morning(){
    if (new Date().getHours() >= 6){
        document.getElementById("click").innerHTML = "Good Morning";
    } else {
        document.getElementById("click").innerHTML = "Go back to sleep.";
    }
}

function Hello(){
    if (new Date().getMonth() == "1"){
        document.getElementById("something").innerHTML = "Happy Birth month!";
    } else {
        document.getElementById("something").innerHTML = "SSDD"
    }
}