// p5 file

console.log("this is script.js comment");

function setup() {
    var myCanvas = createCanvas(800, 250);
    //has to parent to an id
    myCanvas.parent('mySketch');
    background(24, 49, 89);
}

function draw() {

    if (mouseIsPressed) {
        fill(211, 250, 255);
        noStroke();
        ellipse(mouseX, mouseY, 10, 30);
    }
           
}
