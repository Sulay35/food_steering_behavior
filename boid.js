class Boid{
    constructor(){
        this.x1 = random(0, width);
        this.y1 = random(0, height);

        this.position = createVector(this.x1, this.y1);

        // this.velocity = createVector(0,-2);
        this.velocity = createVector(random(-2,2),random(-2, 2));
        this.maxSpeed = 2;
        this.acceleration = createVector(1,1);
        
        this.maxForce = 0.2;

        // Circle and size
        this.size = 20;
        this.maxSize = 250;

        this.perception = this.size*3;
        this.maxPerception = this.maxSize+this.size/1.5;
        
        this.toGetBigger = 0; 
        
        this.applyForce = function(force){
            this.acceleration.add(force);
        }
        
    }
    
    draw(){
        circle(this.position.x, this.position.y, this.size);
        
        // Detection circle :
        push();
        stroke(50,50,255,220);
        strokeWeight(3);
        fill(0,0,0,0);
        ellipse(this.position.x, this.position.y, this.perception*2)
        pop();
        
        
    }   
    
    eat(foods){
        let record = Infinity;
        let closest = null;
        for(var i = 0; i < foods.length; i++){
            let distance = this.position.dist(foods[i].position);
            if(distance < record && distance < this.perception){
                record = distance;
                closest = i;
            }
            
        }
        if(closest != null){
            // Closest capture circle
            push();
            stroke(50,150,105,220);
            strokeWeight(3);
            fill(0,0,0,0)
            ellipse(this.position.x, this.position.y, this.position.dist(foods[closest].position)*2)
            pop();
            
            this.seek(foods[closest])
            push();
            stroke(0,255,55,200);
            strokeWeight(5);
            line(this.position.x, this.position.y, foods[closest].position.x, foods[closest].position.y)
            pop();     
            // Ate :
            if(this.position.dist(foods[closest].position) < this.size/2){
                foods.splice(closest,1);
                
                // Get bigger +
                this.toGetBigger += 1
            }
        }
        
    }
    
    seek(target){
        let desired = p5.Vector.sub(target.position, this.position);
        desired.setMag(this.maxSpeed);
        
        let steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);
        
        this.applyForce(steer)
        return steer;
        
    }
    
    update(){
        
        // Off the view
        if(this.position.x+2*this.size <= 0) this.position.x = width+this.size;
        else if(this.position.x-this.size >= width) this.position.x = -this.size;
        
        if(this.position.y+2*this.size <= 0) this.position.y = height+this.size;
        else if(this.position.y-this.size >= height) this.position.y = -this.size;
        
        // Update
        this.velocity.add(this.acceleration);
        // Limit the speed
        this.velocity.limit(this.maxSpeed);
        // Avancer
        this.position.add(this.velocity);
        this.acceleration.mult(0)
        
        // Size control
        
        this.size = min(this.size, this.maxSize)
        // Perception is proportional from size
        this.perception = this.size*1.2;
        this.perception = min(this.perception, this.maxPerception)
        this.maxPerception = this.maxSize+this.size/1.5;
        
        // Get bigger
        this.size+= this.toGetBigger/50
        this.toGetBigger-=this.toGetBigger/50
        
        this.draw();
        
        
    }
            
}