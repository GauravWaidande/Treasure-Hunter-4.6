class Game {
  constructor() {
    this.playButton=createButton("Play");
    this.fireButton = createButton("Fire");
  }

  start(){
   form = new Form();
   form.display();
  }

  setElementsPosition(){
    this.playButton.position(width/2-30,height/2);
    this.fireButton.position(2600,300);
  }

  setElementsStyle(){
    this.playButton.class("customButton")
    this.fireButton.class("customButton2")
  }

  hide(){
    this.playButton.hide();
  }

  handlemousePressed(){
    this.playButton.mousePressed(()=>{
      this.playButton.hide();
      gameState=2;

      stoneGroup = new Group();

      this.fireButton.position(100,50);

      this.fireButton.mousePressed(()=>{
        shootF();
      })
      stone1=createSprite(48,325,10,10);
      stone1.addImage("s1",stoneImg);
      stone1.scale=0.5;
      stoneGroup.add(stone1);

      stone2=createSprite(475,250,10,10);
      stone2.addImage("s2",stoneImg);
      stone2.scale=0.5;
      stoneGroup.add(stone2);

      stone3=createSprite(900,300,10,10);
      stone3.addImage("s3",stoneImg);
      stone3.scale=0.5;
      stoneGroup.add(stone3);

      stone4=createSprite(1300,200,10,10);
      stone4.addImage("s4",stoneImg);
      stone4.scale=0.5;
      stoneGroup.add(stone4);

      stone5=createSprite(1925,275,10,10);
      stone5.addImage("s5",stoneImg);
      stone5.scale=0.5;
      stoneGroup.add(stone5);

      stone6=createSprite(2325,325,10,10);
      stone6.addImage("s6",stoneImg);
      stone6.scale=0.5;
      stoneGroup.add(stone6);

      stone7=createSprite(2700,250,10,10);
      stone7.addImage("s7",stoneImg);
      stone7.scale=0.5;
      stoneGroup.add(stone7);

      stone8=createSprite(3100,275,10,10);
      stone8.addImage("s8",stoneImg);
      stone8.scale=0.5;
      stoneGroup.add(stone8);

      stone9=createSprite(3525,325,10,10);
      stone9.addImage("s9",stoneImg);
      stone9.scale=0.5;
      stoneGroup.add(stone9);

      stone10=createSprite(3900,225,10,10);
      stone10.addImage("s10",stoneImg);
      stone10.scale=0.5;
      stoneGroup.add(stone10);

      stone11=createSprite(4300,300,10,10);
      stone11.addImage("s11",stoneImg);
      stone11.scale=0.5;
      stoneGroup.add(stone11);

      stone12=createSprite(4725,250,10,10);
      stone12.addImage("s12",stoneImg);
      stone12.scale=0.5;
      stoneGroup.add(stone12);

      stone13=createSprite(5100,275,10,10);
      stone13.addImage("s13",stoneImg);
      stone13.scale=0.5;
      stoneGroup.add(stone13);

      stone14=createSprite(5500,225,10,10);
      stone14.addImage("s14",stoneImg);
      stone14.scale=0.5;
      stoneGroup.add(stone14);

      stone15=createSprite(5925,300,10,10);
      stone15.addImage("s15",stoneImg);
      stone15.scale=0.5;
      stoneGroup.add(stone15);

      stone16=createSprite(6300,325,10,10);
      stone16.addImage("s16",stoneImg);
      stone16.scale=0.5;
      stoneGroup.add(stone16);

      stone17=createSprite(6700,250,10,10);
      stone17.addImage("s17",stoneImg);
      stone17.scale=0.5;
      stoneGroup.add(stone17);

      stone18=createSprite(7125,275,10,10);
      stone18.addImage("s18",stoneImg);
      stone18.scale=0.5;
      stoneGroup.add(stone18);

      stone19=createSprite(7500,325,10,10);
      stone19.addImage("s19",stoneImg);
      stone19.scale=0.5;
      stoneGroup.add(stone19);

      stone20=createSprite(7950,250,10,10);
      stone20.addImage("s20",stoneImg);
      stone20.scale=0.5;
      stoneGroup.add(stone20);

      stone=createSprite(8350,325,500,35);
      stoneGroup.add(stone);
      stone.shapeColor="#DE711F";

      treasure=createSprite(8385,300,10,10);
      treasure.addImage("c1",treasureImg);
      treasure.scale=0.30;

      player=createSprite(50,250,10,10);
      player.addImage("p",playerImg);
      player.scale=0.25;
      
      //Key logo
      kLogo=createSprite(width-100,28,10,10);
      kLogo.addAnimation("lo1",keyImg);
      kLogo.addAnimation("lo2",coinImg);
      kLogo.scale=0.15;
  
      //Spawning key sprites
      k=createSprite(580,125,10,10);
      k.addAnimation("1",keyImg);
      k.addAnimation("2",coinImg);
      //k.addAnimation("3",bulletImg);
      k.scale=0.15;
  
      //Spawning life sprites
      life=createSprite(1500,200,10,10);
      life.addImage("l2",lifeImg);
      life.scale=0.15;
  
      //Life logo
      lLogo=createSprite(width-200,20,10,10);
      lLogo.addImage("l2",lifeImg);
      lLogo.scale=0.15;

      thorns=createSprite(700,175,10,10);
      thorns.addImage("t1",thornsImg);
      thorns.scale=0.5;

      skull=createSprite(1225,255,10,10);
      skull.addImage("s1",skullImg);
      skull.scale=0.20;

      gun=createSprite(player.x,player.y-5,10,10);
      gun.addImage("g1",gunImg);
      gun.scale=0.04;

      bLogo=createSprite(width-300,15,10);
      bLogo.addImage("l3",bulletImg);
      bLogo.scale=0.08;

    })
  }

  handleControl(){

    if(keyDown(RIGHT_ARROW)){
      player.position.x+=5;
    }
    if(keyDown(UP_ARROW) ){
      player.velocityY=-5;
    }

    player.velocityY=player.velocityY+1;
    player.velocityX=-2;
    player.setCollider("rectangle",0,0,250,450);
    player.collide(stoneGroup);

    gun.x=player.x;
    gun.y=player.y+5;
    gun.setCollider("rectangle",0,0,200,100);

    stone1.setCollider("rectangle",0,-50,390,150);
    stone1.velocityX=-2;
    stone2.setCollider("rectangle",0,-50,390,150);
    stone2.velocityX=-2;
    stone3.setCollider("rectangle",0,-50,390,150);
    stone3.velocityX=-2;
    stone4.setCollider("rectangle",0,-50,390,150);
    stone4.velocityX=-2;
    stone5.setCollider("rectangle",0,-50,390,150);
    stone5.velocityX=-2;
    stone6.setCollider("rectangle",0,-50,390,150);
    stone6.velocityX=-2;
    stone7.setCollider("rectangle",0,-50,390,150);
    stone7.velocityX=-2;
    stone8.setCollider("rectangle",0,-50,390,150);
    stone8.velocityX=-2;
    stone9.setCollider("rectangle",0,-50,390,150);
    stone9.velocityX=-2;
    stone10.setCollider("rectangle",0,-50,390,150);
    stone10.velocityX=-2;
    stone11.setCollider("rectangle",0,-50,390,150);
    stone11.velocityX=-2;
    stone12.setCollider("rectangle",0,-50,390,150);
    stone12.velocityX=-2;
    stone13.setCollider("rectangle",0,-50,390,150);
    stone13.velocityX=-2;
    stone14.setCollider("rectangle",0,-50,390,150);
    stone14.velocityX=-2;
    stone15.setCollider("rectangle",0,-50,390,150);
    stone15.velocityX=-2;
    stone16.setCollider("rectangle",0,-50,390,150);
    stone16.velocityX=-2;
    stone17.setCollider("rectangle",0,-50,390,150);
    stone17.velocityX=-2;
    stone18.setCollider("rectangle",0,-50,390,150);
    stone18.velocityX=-2;
    stone19.setCollider("rectangle",0,-50,390,150);
    stone19.velocityX=-2;
    stone20.setCollider("rectangle",0,-50,390,150);
    stone20.velocityX=-2;
    stone.setCollider("rectangle",0,0,500,35);
    stone.velocityX=-2;
    treasure.velocityX=-2;

    k.velocityX=-2;
    k.setCollider("circle",130,20,200);
    life.velocityX=-2;
    life.setCollider("circle",50,0,100);
    thorns.velocityX=-2;
    thorns.setCollider("rectangle",10,-10,180,25);
    skull.velocityX=-2;

    drawSprites();

  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handlemousePressed();
  }
 
}
