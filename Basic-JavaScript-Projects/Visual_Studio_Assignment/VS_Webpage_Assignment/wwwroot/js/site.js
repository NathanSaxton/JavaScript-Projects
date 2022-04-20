// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function loadVid() {
    var vid = document.getElementById("vid")
    vid.style.display = "block";
}

var wait = null;

function moveTheSquare(){
    var square = document.getElementById("movingSquare");
    var location = 0;
    clearInterval(wait);
    wait = setInterval(frame, 5);
    function frame() {
        if (location == 350) {
            clearInterval(wait);
        } else {
            location++;
            square.style.top = location + 'px';
            square.style.left = location + 'px';
        }
    }
 }
