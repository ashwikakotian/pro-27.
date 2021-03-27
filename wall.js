class Wall{
    constructor(x,y,width,height){

        var options ={
            restitution:0.8,
            friction:1,
            density:1,
            isStatic:true
        }

        this.width= width;
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        
    }


    display(){
        var pos= this.body.position;
       
        
    
        fill("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);

        
    }
}