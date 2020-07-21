function Ball(){
    this.position = createVector(400,300);
    this.rad = 10;
    this.speed = 5;
    
    //velocities
    this.vx = this.speed*-1;
    this.vy = this.speed;
  
    this.update = function(){  
        if(this.position.x - this.rad <= 0){
            this.position.x = 400;
            this.position.y = 300;
          
            rightScore += 1;
        }else if(this.position.x + this.rad >= 800){
            this.position.x = 400;
            this.position.y = 300;
          
            leftScore += 1;
        }  
      
      
        this.position.x += this.vx;
        this.position.y += this.vy;
      
        if(this.position.y >= 590){
            this.vy *= -1;
        }
      
        if(this.position.y <= 10){
            this.vy *= -1;
        }
      
        if(this.position.x - this.rad <= leftPaddle.position.x + leftPaddle.width){
            if(this.position.y > leftPaddle.position.y && this.position.y < leftPaddle.position.y + 100){
                this.vx *= -1;
            }
        }
      
      
        if(this.position.x + this.rad >= rightPaddle.position.x){
            if(this.position.y > rightPaddle.position.y && this.position.y < rightPaddle.position.y + 100){
                this.vx *= -1;
            }
          
        }
    }
  
    this.show = function(){
        circle(this.position.x, this.position.y, this.rad*2);
    }
}