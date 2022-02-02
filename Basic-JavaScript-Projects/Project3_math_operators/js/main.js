function mathFunction(){
    var addition, subtraction, multiply, divide, ultimateProduct, modulator, randomNumber;
    multiply = 3 * 4; //assign multiply
    divide = 21 / 7; // assign divide
    addition = 2+4; //assign addition
    subtraction = 10-4; //assign subtraction
    modulator = 23 % 7; //assign modulator
    randomNumber = Math.random()*100 // make a random number
    ultimateProduct = (addition - subtraction) * multiply / divide + addition; //combind all but the random number
    return document.getElementById("Math").innerHTML = "2 + 4 = " + addition + ", you will also fine that 10 - 4 = " + subtraction // display the results of add and subtract
            + ". You can also mutiply 3 * 4 = " + multiply + ", and divide 21 / 7 = " + divide //display the results of multiply and divide
            + ". You can start with the sum of the addition, subtract the difference from subtraction, multiply the product of the multiplcation, divide by the results of the division, and add the addition back. That should give you "
            + ultimateProduct + ". You will also find that you can find the remainder of something like 23 / 7 which comes out to " + modulator //display the the combined number and the modulator
            + " or we can multiply by -1 which is " + -modulator + ". Lets go back to the big product, you can incrementally add or subtract it like this " // make the modulator negative
            + ++ultimateProduct + " or like this " + --ultimateProduct + ". There is also the ability to make a random number, like this one " + randomNumber //increment the combined number and make a random number
            + ". Now let's round it, " + Math.round(randomNumber); // round the random number to something usable
}