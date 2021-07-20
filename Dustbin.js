class Dustbin{
    constructor(x,y,width,height){
var options={
isStatic:true,
restitution:0.3,
friction:0.5,
density:0.9,
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
this.image=loadImage("dustbingreen.png")





World.add(world,this.body)


    }
display(){
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

}
} 
