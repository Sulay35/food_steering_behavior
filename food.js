class Food{
    constructor(){
        this.position = createVector(random(5, width - 5), random(5, height - 5));
        // this.xoff = random(0, width*2);
        // this.yoff = random(0, height*2);
    }
    draw(){
        push()
        noStroke();
        fill(255,0,0)
        ellipse(this.position.x, this.position.y, 10);
        pop();
        // this.xoff += 0.001;
        // this.yoff += 0.001;
        // this.position.x = map(noise(this.xoff),0,1,0-40,width+50);
        // this.position.y = map(noise(this.yoff),0,1,0-40,height+50);
        
    }
}