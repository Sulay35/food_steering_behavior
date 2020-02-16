class Boid{
    constructor(){
        this.x1 = random(0, width);
        this.y1 = random(0, height);

        this.position = createVector(this.x1, this.y1);

        this.velocity = createVector(random(),random());

        this.radius = 20;
        this.velocity.mult(2)
    }
    draw(){
        ellipse(this.position.x, this.position.y, this.radius);
    
    }   

    seek(foods){

        
        
        for(var i = 0; i < foods.length; i++){
            let distance = this.position.dist(foods[i].position);

            // Detection circle :
            push();
            stroke(50,50,255,220);
            strokeWeight(8);
            fill(0,0,0,0)
            ellipse(this.position.x, this.position.y, 200)
            pop()

            if(distance < 100){
                push();
                stroke(0,255,55,200);
                strokeWeight(5);
                line(this.position.x, this.position.y, foods[i].position.x, foods[i].position.y)
                pop()
            }else{
                push();
                stroke(255,50,0,120);
                strokeWeight(2);
                line(this.position.x, this.position.y, foods[i].position.x, foods[i].position.y)
                pop()
            }
        }

    }

    update(){
        this.position.add(this.velocity);

        // Off the view
        if(this.position.x+this.radius <= 0) this.position.x = width+this.radius;
        if(this.position.x-this.radius >= width) this.position.x = -this.radius;
        
        if(this.position.y+this.radius <= 0) this.position.y = height+this.radius;
        if(this.position.y-this.radius >= height) this.position.y = -this.radius;


        this.draw();
    }

}