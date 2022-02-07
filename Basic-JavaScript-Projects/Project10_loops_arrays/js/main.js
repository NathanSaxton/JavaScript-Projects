cont = true;
tillISay = document.getElementById("Loop").innerHTML;
count = 0;
function callLoop(){
    while (cont == true){
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
        content += instruments[j] + "<br />";
    }
    document.getElementById("Instruments").innerHTML = content;
}