class Plinko {
    constructor(x,y,w,h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
         this.w = w;
         this.h = h;
         World.add(world,this.body);
         circle(180,30,10);
    }

       display() {
        var pos = this.body.position;
        circle(100,50,10);
        circle(250,50,10);
        circle(50,50,10);
        circle(199,50,10);
        circle(150,50,10);
        circle(200,50,10);
        circle(300,50,10);
        circle(350,50,10);
        circle(10,50,10);
        circle(400,50,10);

        circle(30,100,10);
        circle(80,100,10);
        circle(120,100,10);
        circle(170,100,10);
        circle(220,100,10);
        circle(280,100,10);
        circle(330,100,10);
        circle(370,100,10);


        circle(100,150,10);
        circle(250,150,10);
        circle(50,150,10);
        circle(199,150,10);
        circle(150,150,10);
        circle(200,150,10);
        circle(300,150,10);
        circle(350,150,10);
        circle(10,150,10);
        circle(400,150,10);

        circle(30,200,10);
        circle(80,200,10);
        circle(120,200,10);
        circle(170,200,10);
        circle(220,200,10);
        circle(280,200,10);
        circle(330,200,10);
        circle(370,200,10);

        circle(100,250,10);
        circle(250,250,10);
        circle(50,250,10);
        circle(199,250,10);
        circle(150,250,10);
        circle(200,250,10);
        circle(300,250,10);
        circle(350,250,10);
        circle(10,250,10);
        circle(400,250,10);
        fill(0);
        rect(pos.x,pos.y,this.w,this.h,);  
        
       

       };
};