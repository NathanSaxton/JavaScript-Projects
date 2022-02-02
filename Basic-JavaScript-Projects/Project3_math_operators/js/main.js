function mathFunction(){
    var addition, subtraction, multiply, divide;
    multiply = 3 * 4;
    divide = 21 / 7;
    addition = 2+4;
    subtraction = 10-4;
    return document.getElementById("Math").innerHTML = "2 + 4 = " + addition + ", you will also fine that 10 - 4 = " + subtraction + 
        ". You can also mutiply 3 * 4 = " + multiply + ", and divide 21 / 7 = " + divide;
}