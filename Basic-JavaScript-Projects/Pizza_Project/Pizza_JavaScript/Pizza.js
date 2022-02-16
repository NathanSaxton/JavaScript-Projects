function getReceipt() { //function used to print what the customer ordered using the pizza size as the base
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) { //runs through all of the different sizes to see which one is selected
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br />";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //determines the subtotal before toppings are added
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1);//Checks for toppings
}

function getTopping(runningTotal, text1) { //takes the total and the receipt and adds the toppings to both
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {//run through all the toppings to determine which ones are selected
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br />";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) { //provide one topping for free
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //combind size total with the topping total to get the full amount for the pizza
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping -1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1; //print the receipt
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>"; //print the total
}