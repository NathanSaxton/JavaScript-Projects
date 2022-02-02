document.write(typeof "Chocolate Milk"); //write the type
document.write(" Jenny's Number 867-" + 5309); //show type coercion
document.write("Jump" / "Fall"); //display NaN
document.write(isNaN("Jesse is a friend.")); //isNaN true
document.write(isNaN(007)); //isNaN false
document.write(10>=3); //true expression
document.write(10<3); //false expression
console.log(20+2); //Check out the hidden math in the console
console.log(10>30); //hide a false boolean in the console
document.writeln(22==23); //write false using the == comparison
document.writeln(22==22); // ditto but true
document.writeln(10===10); // display a true value type comparison
document.writeln(11==="23"); //display a false value type comparison
document.writeln(2==="2"); //display a false by type comparison
document.writeln(2===3); //display a false by value comparison
document.writeln(2===3 && 2==="5"); //display false with the && operator
document.writeln(2===2 && "blue"==="blue"); //display true with the && operator
document.writeln(!(2===3 && 2==="5")); //display true with ! operator
document.writeln(!(2===2) && "blue"==="blue"); //display fals with the same operator

function infinity(){
    document.getElementById("sugar").innerHTML = "" + 2E309 + " or " + -2E358; //write infinity and -infinity
}