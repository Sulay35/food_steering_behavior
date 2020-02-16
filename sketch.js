let boid;
let foods = [];
function setup() {
    createCanvas(500,500);

    boid = new Boid;


    // generate food :
    for(let i = 0; i < 50; i++){
        foods.push(new Food());
    }
}

function draw() {
    background(80);
    for(var i = 0; i < foods.length; i++){
        foods[i].draw();
    }
    boid.update();
    boid.seek(foods);
    // food:

}