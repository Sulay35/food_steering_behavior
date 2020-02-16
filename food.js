class Food{
    constructor(){
        this.position = createVector(random(50, width - 50), random(50, height - 50));

    }
    draw(){
        push()
        noStroke();
        fill(255,0,0)
        ellipse(this.position.x, this.position.y, 5);
        pop()
    }
}