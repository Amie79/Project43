var hr,mn,sc,scAngle;

function setup() {
  createCanvas(600,600);
  //createSprite(400, 200, 50, 50);

}

function draw() {
  background(0);  
  //hr=hour();
  mn=minute();
  sc=second();
  if(hour()>12){
    hr=hour()-12
    }
    else if(hour()<=12){
      hr=hour();

    }
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr,0,12,0,360);
  camera.position.x=0;
  camera.position.y=0;
  angleMode(DEGREES);

  noFill();
  
  strokeWeight(10);
  stroke(255,0,0);
  arc(0,0,400,400,-90,scAngle-90);

  strokeWeight(10);
  stroke(0,0,255);
  arc(0,0,370,370,-90,mnAngle-90);

  strokeWeight(10);
  stroke(0,255,0);
  arc(0,0,340,340,-90,hrAngle-90);

  push()
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,-200,0,0);
  pop()  

  push()
  rotate(mnAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,-150,0,0);
  pop();
  
  push()
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,-100,0,0);
  pop();
  
  drawSprites();
}
