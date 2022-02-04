function wordPlay() {
    var line1 = "I am serious, ";
    var line2 = "and don't call me Shirley";
    var wholeLine = line1.concat(line2);
    document.getElementById("first").innerHTML = wholeLine.toUpperCase();
}

function slice() {
    var sentence = document.getElementById("first").innerHTML;
    var sliced = sentence.slice(5, 15);
    document.getElementById("Slice").innerHTML = sliced;
    document.getElementById("position").innerHTML = sliced.search(/a/i);
}

function stringItUp() {
    var x = 12;
    var y = 1354861.51651361;
    document.getElementById("number").innerHTML = x.toString() + " " + y.toPrecision(10);

}