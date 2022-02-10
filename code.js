var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7ab636d4-1f46-447f-b71a-d36ed3ba0677","9108ebb1-6a5d-42f5-9a8b-f054a8d40cad","d7a0d2e4-e940-4896-bb2f-3e3950fddfe4","8985c542-04de-4b30-8f3c-9509bfb7b571","f0776f66-ff53-4b43-a6ab-bd76a8259c00"],"propsByKey":{"7ab636d4-1f46-447f-b71a-d36ed3ba0677":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png","frameSize":{"x":244,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"03rBgUkpKK_9hg1RkGHc820nxLAp_lB8","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png"},"9108ebb1-6a5d-42f5-9a8b-f054a8d40cad":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"},"d7a0d2e4-e940-4896-bb2f-3e3950fddfe4":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/aTUsgo4ku0TfYyq2IhJSHxXbA7uRCxFr/category_robots/robot_26.png","frameSize":{"x":396,"y":256},"frameCount":1,"looping":true,"frameDelay":2,"version":"aTUsgo4ku0TfYyq2IhJSHxXbA7uRCxFr","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":256},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aTUsgo4ku0TfYyq2IhJSHxXbA7uRCxFr/category_robots/robot_26.png"},"8985c542-04de-4b30-8f3c-9509bfb7b571":{"name":"house","sourceUrl":"assets/api/v1/animation-library/gamelab/Jkt8vQ9jWmaQ2Qg.jH._yQSl0m6Mw77V/category_buildings/beachhouse_09.png","frameSize":{"x":276,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"Jkt8vQ9jWmaQ2Qg.jH._yQSl0m6Mw77V","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":276,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Jkt8vQ9jWmaQ2Qg.jH._yQSl0m6Mw77V/category_buildings/beachhouse_09.png"},"f0776f66-ff53-4b43-a6ab-bd76a8259c00":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200, 200);
bg.setAnimation("background")

//top wall
var wall1 = createSprite(250, 130, 300, 5);

//bottom wall
var wall2 = createSprite(150, 270, 300, 5);

//player
var you = createSprite(20, 335, 15, 15);
you.setAnimation("player");
you.scale=0.1;


 

//bottom section balls
var ball1 = createSprite(80, 335, 10, 10);
var ball2 = createSprite(120, 335, 10, 10);
var ball3 = createSprite(160, 335, 10, 10);
var ball4 = createSprite(200, 335, 10, 10);
var ball5 = createSprite(240, 335, 10, 10);
var ball6 = createSprite(280, 335, 10, 10);
ball1.setAnimation("enemy1");
ball2.setAnimation("enemy1");
ball3.setAnimation("enemy1");
ball4.setAnimation("enemy1");
ball5.setAnimation("enemy1");
ball6.setAnimation("enemy1");
ball1.scale=0.05; 
ball2.scale=0.05; 
ball3.scale=0.05; 
ball4.scale=0.05; 
ball5.scale=0.05; 
ball6.scale=0.05; 

//doors
var sDoor1 = createSprite(360, 270, 50, 8);
var sDoor2 = createSprite(40, 130, 50, 8);
sDoor1.setAnimation("enemy2");
sDoor1.scale=0.1; 
sDoor2.setAnimation("enemy2");
sDoor2.scale=0.1; 

//middle section
var line1 = createSprite(125, 200, 50, 7);
var line2 = createSprite(200, 200, 50, 7);
var line3 = createSprite(275, 200, 50, 7);
line1.setAnimation("enemy2")
line2.setAnimation("enemy2")
line3.setAnimation("enemy2")
line1.scale=0.1; 
line2.scale=0.1; 
line3.scale=0.1; 

//top section
var ball7 = createSprite(200, 100, 10, 10);
var ball8 = createSprite(250, 100, 10, 10);
var ball9 = createSprite(200, 50, 10, 10);
var ball10 = createSprite(250, 50, 10, 10);
ball7.setAnimation("enemy1");
ball8.setAnimation("enemy1");
ball9.setAnimation("enemy1");
ball10.setAnimation("enemy1");
ball7.scale=0.05;
ball8.scale=0.05;
ball9.scale=0.05;
ball10.scale=0.05;
//trophy
var win = createSprite(360, 75, 20, 20);
win.shapeColor = "yellow";
win.setAnimation("house");
win.scale = 0.2;


var score = 0;

//game states
var gameState = "play";

velocity();

function draw() {
  background("lightblue");
  bounce();
  
  
  if(keyDown("left")){
   you.x = you.x-3;
  }
  if(keyDown("right")){
    you.x = you.x+3;
  }
  if(keyDown("up")){
    you.y = you.y-3;
  }
  if(keyDown("down")){
    you.y = you.y+3;
  }
  
  text("DEATHS: "+score, 10, 10);
  
  
  if(you.collide(ball1)||you.collide(ball2)||you.collide(ball3)||you.collide(ball4)
     ||you.collide(ball5)||you.collide(ball6)||you.collide(ball7)||
     you.collide(ball8)||you.collide(ball9)||you.collide(ball10)||
     you.collide(sDoor1)||you.collide(sDoor2)||you.collide(line1)||
     you.collide(line2)||you.collide(line3)){
    reset();
    score = score+1;
    playSound("assets/Computer-beep-beeping-1-www.FesliyanStudios.com.mp3")
    
  }
  
  if(you.collide(win)){
    gameState = "over";
    text("YOU WIN!",200, 200);
    you.velocityX = 0.0000001;
    you.velocityY = 0.0000001;
    score = 0;
  }
  
  drawSprites();
  
}
function reset(){
  you.x = 20;
  you.y = 335;
  you.velocityX = 0;
  you.velocityY = 0;
}


function velocity(){
  
  
  ball1.velocityY = 4;
  ball2.velocityY = -4;
  ball3.velocityY = 4;
  ball4.velocityY = -4;
  ball5.velocityY = 4;
  ball6.velocityY = -4;
  ball7.velocityY = 4;
  ball8.velocityX = -4;
  ball9.velocityX = 4;
  ball10.velocityY = -4;
  line1.velocityY = 4;
  line2.velocityY = -4;
  line3.velocityY = 4;
  sDoor1.velocityX = 3;
  sDoor2.velocityX = -3;
}



function bounce(){
  createEdgeSprites();
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball7.bounceOff(edges);
  ball8.bounceOff(edges);
  ball9.bounceOff(edges);
  ball10.bounceOff(edges);
  sDoor1.bounceOff(edges);
  sDoor2.bounceOff(edges);
  you.bounceOff(edges);
  
  
  ball1.bounceOff(wall2);
  ball2.bounceOff(wall2);
  ball3.bounceOff(wall2);
  ball4.bounceOff(wall2);
  ball5.bounceOff(wall2);
  ball6.bounceOff(wall2);
  
  sDoor1.bounceOff(wall2);
  sDoor2.bounceOff(wall1);
  
  line1.bounceOff(wall1);
  line1.bounceOff(wall2);
  line2.bounceOff(wall1);
  line2.bounceOff(wall2);
  line3.bounceOff(wall1);
  line3.bounceOff(wall2);
  line1.bounceOff(edges);
  line2.bounceOff(edges);
  line3.bounceOff(edges);
  
  ball7.bounceOff(wall1);
  ball8.bounceOff(wall1);
  ball9.bounceOff(wall1);
  ball10.bounceOff(wall1);
  
  you.bounceOff(wall1);
  you.bounceOff(wall2);
}










// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
