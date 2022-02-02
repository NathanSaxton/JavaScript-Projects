function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}

function voterAge(){ //simple ternary function
    var yearsOld, canVote;
    yearsOld = document.getElementById("age").value;
    canVote = (yearsOld >= 18) ? "Welcome voting citizen.":"Run along children.";
    document.getElementById("vote").innerHTML = canVote;
}

function Vehicle(make, model, year, color){ //declaration of the Vehicle constructor
    this.vehicleMake = make; //assigning the perameters to the object using "this"
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}

var Jimmy = new Vehicle("Dodge", "Viper", 1999, "Blue"); //creation of objects using "new"
var Joni = new Vehicle("Chevy", "Sierra", 2015, "Purple");
var Vonda = new Vehicle("Chrysler", "Potato", 2001, "Pink");


function newFunction(){ //write something using an instance of Vehicle and it's properties
    document.getElementById("New_and_This").innerHTML =
        "Jimmy drives a " + Jimmy.vehicleColor + "-colored " + Jimmy.vehicleModel +
        " manufactured in " + Jimmy.vehicleYear;
}

function chocolateBar(){ //Creation of a nested function to write Chocolatebar
    var cocoa = "Chocolate"
    function razzleDazzle(){cocoa += "bar";}
    razzleDazzle();
    return document.getElementById("Nested_Function").innerHTML = cocoa;
}