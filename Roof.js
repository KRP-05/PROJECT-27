class roof{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(400,100,600,50,options)
        World.add(world,this.body)
    }
    display(){
     rectMode(CENTER)
        rect(400,100,600,50)
    }
}