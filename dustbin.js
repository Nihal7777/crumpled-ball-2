class Dustbin {
    constructor(x, y) {
        var options = {
            isStatic:true
            
            
        }
        this.left = Bodies.rectangle(x-100, y-35,15,60,options);
        this.right = Bodies.rectangle(x+100, y-35,15,60,options);
        this.bottom = Bodies.rectangle(x, y,200,15,options);
       
         World.add(world,this.left);
         World.add(world,this.right);
         World.add(world,this.bottom);

         }
         display(){
             var pos1=this.left.position;
             var pos2=this.right.position;
             var pos3=this.bottom.position;

        fill ("white");
        rectMode(CENTER);
        rect(pos1.x,pos1.y,15,60);
        rect(pos2.x,pos2.y,15,60);
        rect(pos3.x,pos3.y,200,15);
            
           
         }

        }