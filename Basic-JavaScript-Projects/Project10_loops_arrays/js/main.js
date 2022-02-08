cont = true;
tillISay = document.getElementById("Loop").innerHTML;
count = 0;
function callLoop(){
    while (cont == true){ // basic while loop
        document.writeln(count);
        if (count == tillISay.length) {
            cont = false;
        }
        count++;
    }
}
var instruments = ["Goats", "Milk", "Piano", "Pickle"], content = "", j;
function forLoop(){
    for (let j = 0; j < instruments.length; j++) {
        if (instruments[j] == "Piano") { // make turkeys and insturment
            instruments.push("Turkey");
            continue;
        } else if (instruments[j] == "Turkey"){ // never reveal the turkeys cause mayonnaise is the real instrument
            instruments.unshift("Mayonnaise");
            break;
        }
        content += instruments[j] + "<br />";
    }
    document.getElementById("Instruments").innerHTML = content;
}

const realInstruments = {wind: "Flute", precusion: "Bongos", brass: "Tuba"};

function constant_function(){ // function to test realInstruments ability to change constants
    realInstruments.wind = "Clarinet";
    realInstruments.strings = "Violin"
    document.getElementById("constant").innerHTML = realInstruments.precusion + " " + realInstruments.wind + " " 
    + realInstruments.strings + " " + rStatement(realInstruments.brass);

    function rStatement (x) {
        var statement = "These are all nice instruments.";
        const y = "Trumpet";
        if(x === y){// determine if a tuba is as good as a trumpet
            return statement; 
        } else {// it definitely isn't as good as a trumpet
            statement = "This should be a trumpet."
        }
        return statement;
    }
}
function showMe() { // function I called to create the game object and display the synopsis
    let game = {
        year: "2033 ",
        os: "Windows ",
        genre: "Platformer ",
        rating: "Teen ",
        synopsis: function() {
            return "In the year " + this.year + this.os
            + "will continue to release it's best " + this.rating + this.genre
            + "yet."
        }
    }
    document.getElementById("Paca").innerHTML = game.synopsis();
}