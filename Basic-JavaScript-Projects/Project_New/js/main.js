function colorPicker(){
    var color = document.getElementById("color").value, colorStatement = "I love the color ";
    switch (color.toLowerCase()){
        case "red":
            colorStatement += "Red.";
            break;
        case "blue":
            colorStatement += "Blue.";
            break;
        case "green":
            colorStatement += "Green.";
            break;
        default:
            colorStatement = "You gotta pick from the colors above man.";
    }
    document.getElementById("printColor").innerHTML = colorStatement;
}

var c = document.getElementById("theCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("image");
var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "blue")

ctx.fillStyle = grd;
ctx.fillRect(20,20,150,100);
ctx.drawImage(img, 70, 10);