cont = true;
tillISay = 5;
count = 0;
function callLoop(){
    while (cont == true){
        document.writeln(count);
        if (count == tillISay) {
            cont = false;
        }
        count++;
    }
}