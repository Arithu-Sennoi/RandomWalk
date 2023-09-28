let x = 50;
let y = 70;
let stringBody = "";

let createPixel = function (x, y) {
    x *= 10;
    y *= 10;
    stringBody += "<div class=\"pixel\" style=\"position: absolute;top: " + y + "px; left: " + x + "px;\"></div>"
}

let takeStep = function () {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) x--;  //goes left if random number is 0. 
    
    else if (randomNumber == 1) y--; //goes up if random number is 1. 
        
    else x++;  //goes right if random number is 2.
        
    
    createPixel(x, y); // Calls the createPixel function to draw a box at given coordinates. 
}

for (let i = 0; i < 100; i++) {
    takeStep();
}

document.getElementById("main").innerHTML = stringBody;

