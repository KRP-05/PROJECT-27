class Rope{
    constructor(body1,body2,offsetX,offsetY){
       this.offsetX = offsetX
       this.offsetY = offsetY
        var options = {
            bodyB:body2,
            bodyA:body1,
            //length:400,
           pointB:{x:this.offsetX, y:this.offsetY}
        }
        console.log(options)
        this.rope  = Constraint.create(options);
    World.add(world,this.rope);
        
    }
    display(x2,y2){
var pointA = this.rope.bodyA.position;
var pointB = this.rope.bodyA.position
strokeWeight(4)
line(pointA.x,pointA.y,x2,y2)

}
}