/*## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.*/

var counter = 1;
function printCounter(){
        console.clear();
        console.log(counter);
        counter++;
        printSettimeOut();
}

function printSettimeOut(){
    setTimeout(printCounter, 1000);
}

printSettimeOut();










































































// (Hint: setTimeout)