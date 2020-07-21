function Paddle(){
    this.speed = 10;
    this.width = 20;
    this.height = 100;
    this.position = createVector(0, 250);
  
    this.show = function(){
        rect(this.position.x, this.position.y, this.width, this.height);
    }
  
    this.moveUp = function(){
        if(this.position.y > 0){
            this.position.y -= this.speed;
        }
    }
  
    this.moveDown = function(){
        if(this.position.y < 500){
            this.position.y += this.speed;
        }
    }
}