function newDictionary() {
    var Person = {   //Setting up a new disctionary
        name: "Chad",
        wealth: "a lot",
        age: 34,
        survRate: "higher than average"
    };
    delete Person.name; //deleting from said dictionary
    document.getElementById("dictionary").innerHTML = Person.name; //display the deleted name
}