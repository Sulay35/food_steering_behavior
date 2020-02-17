// Boids
let boids = [];

// Food
let foods = [];
let numFood = 400;
let maxFood = 200;



function setup() {
    createCanvas(windowWidth,windowHeight);
    // createCanvas(500,500);

    for(let i = 0; i <= 5; i++){
        boids.push(new Boid());
    }


    // generate food :
    for(let i = 0; i <= numFood; i++){
        foods.push(new Food());
    }
    frameRate(60)
}

function draw() {
    background(80);
    // FPS
    let fps = floor(frameRate());
    text(fps, 5, 10);
    // boids
    for(let i = 0; i < boids.length; i++){
        boids[i].eat(foods);
        boids[i].update();
    }
    
    
    // food:
    
        for(var i = 0; i < foods.length; i++){
            foods[i].draw();
        }
    if(foods.length <= numFood){
        foods.push(new Food())
    }
    // increase the number of foods
    numFood+= 0.1
    numFood = min(numFood, maxFood) // constrain

}