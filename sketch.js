let boid;
let foods = [];
let numFood = 2;
let maxFood = 51
function setup() {
    createCanvas(windowWidth,windowHeight);
    // createCanvas(500,500);

    boid = new Boid;


    // generate food :
    for(let i = 0; i < 20; i++){
        foods.push(new Food());
    }
    frameRate(60)
}

function draw() {
    background(80);
    // FPS
    let fps = floor(frameRate());
    text(fps, 5, 10);


    for(var i = 0; i < foods.length; i++){
        foods[i].draw();
    }
    boid.eat(foods);
    boid.update();
    // food:
    if(foods.length <= numFood){
        foods.push(new Food())
    }
    // increase the number of foods
    numFood+= 1
    numFood = min(numFood, maxFood) // constrain

}