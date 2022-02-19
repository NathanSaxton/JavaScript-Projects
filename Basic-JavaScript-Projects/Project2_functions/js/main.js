function newFunction(){ //create the function
    var part1 = "Firstly, I am serious. ", part2 = "Secondly, don't call my Shirley",
        voiceLine; //assign variables
    voiceLine = part1 +part2;  //concatenate part1 and part2
    return document.getElementById("line").innerHTML += voiceLine; //concatenate the existing line with the new voice line. 
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("line").classList.remove("fade-out");
});