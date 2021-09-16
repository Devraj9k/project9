var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9654939a-0c65-47b6-86ad-e00f0b6a6d41","95557ef0-22c5-4827-8d1b-c807ef4d9f6f","13794345-1f02-4f52-93be-27bfb57aafaf","fd5881d3-337f-47cd-aa51-d25e85ada841","1b11d58f-fec6-439f-b27f-7d7614b9cfbc","37fef596-8cf6-49cd-94a3-7932bacc54ba","f67b21a8-b5d8-4f12-8c1a-d10e48ad353b","819e40d1-12f9-4c32-b90b-dd05bf391bb5","2ae707ed-9b15-4fdd-90b7-7b37da4de2f9"],"propsByKey":{"9654939a-0c65-47b6-86ad-e00f0b6a6d41":{"name":"start","sourceUrl":null,"frameSize":{"x":649,"y":217},"frameCount":1,"looping":true,"frameDelay":12,"version":"oxYDW.yOB7rMYFW3TitYn1VA5Cx_xeXS","loadedFromSource":true,"saved":true,"sourceSize":{"x":649,"y":217},"rootRelativePath":"assets/9654939a-0c65-47b6-86ad-e00f0b6a6d41.png"},"95557ef0-22c5-4827-8d1b-c807ef4d9f6f":{"name":"cactus","sourceUrl":"assets/v3/animations/jw2kRHNnN7yNWgFLZGKIqq_Fn_crXV3Ds9XdL_awW44/95557ef0-22c5-4827-8d1b-c807ef4d9f6f.png","frameSize":{"x":92,"y":89},"frameCount":1,"looping":true,"frameDelay":4,"version":"UWL8KBsKTQ2JyfO6T7vyvNk9gEjNclcQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":89},"rootRelativePath":"assets/v3/animations/jw2kRHNnN7yNWgFLZGKIqq_Fn_crXV3Ds9XdL_awW44/95557ef0-22c5-4827-8d1b-c807ef4d9f6f.png"},"13794345-1f02-4f52-93be-27bfb57aafaf":{"name":"trex_jump","sourceUrl":null,"frameSize":{"x":88,"y":92},"frameCount":1,"looping":true,"frameDelay":12,"version":"HaMrx05pwlMvr_7fFuqgE0MN6cdD2lf7","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":92},"rootRelativePath":"assets/13794345-1f02-4f52-93be-27bfb57aafaf.png"},"fd5881d3-337f-47cd-aa51-d25e85ada841":{"name":"T-rex","sourceUrl":null,"frameSize":{"x":88,"y":93},"frameCount":3,"looping":true,"frameDelay":4,"version":"T9cH9T0g1J8r.jKFRUQAd.CW6mdH8BUk","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":186},"rootRelativePath":"assets/fd5881d3-337f-47cd-aa51-d25e85ada841.png"},"1b11d58f-fec6-439f-b27f-7d7614b9cfbc":{"name":"ground","sourceUrl":null,"frameSize":{"x":800,"y":159},"frameCount":1,"looping":true,"frameDelay":12,"version":"dMTXcvJ3h_awo1O9fkrB4zxd2icU.dYa","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":159},"rootRelativePath":"assets/1b11d58f-fec6-439f-b27f-7d7614b9cfbc.png"},"37fef596-8cf6-49cd-94a3-7932bacc54ba":{"name":"cloud","sourceUrl":"assets/v3/animations/CpbZmKwiOJAAubBCzEGYk7-pz1JEagIZIDk0H_RYTwU/37fef596-8cf6-49cd-94a3-7932bacc54ba.png","frameSize":{"x":570,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"VSeeOYXG.imnqXSP5e28f4To9E0gQx_j","loadedFromSource":true,"saved":true,"sourceSize":{"x":570,"y":300},"rootRelativePath":"assets/v3/animations/CpbZmKwiOJAAubBCzEGYk7-pz1JEagIZIDk0H_RYTwU/37fef596-8cf6-49cd-94a3-7932bacc54ba.png"},"f67b21a8-b5d8-4f12-8c1a-d10e48ad353b":{"name":"food","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"tF8uRJXt8l7_nasuAoy_Dfy5kVS7K9Ko","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f67b21a8-b5d8-4f12-8c1a-d10e48ad353b.png"},"819e40d1-12f9-4c32-b90b-dd05bf391bb5":{"name":"cactus1","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"DPNAHjoMSoinXHkJnNZaFJKhVg2kQbtu","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/819e40d1-12f9-4c32-b90b-dd05bf391bb5.png"},"2ae707ed-9b15-4fdd-90b7-7b37da4de2f9":{"name":"trex2","sourceUrl":null,"frameSize":{"x":80,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"m3Xspzd8iNI5tJHnOG4PZB7tf6NsgevJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":70},"rootRelativePath":"assets/2ae707ed-9b15-4fdd-90b7-7b37da4de2f9.png"}}};
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

// Create sprites
var trex = createSprite(200,270,100,100);
trex.setAnimation("trex2");
trex.scale = 0.7;

var start_game = createSprite(200,200);
start_game.setAnimation("start");
start_game.scale = 0.15;

var floor1 = createSprite(200, 385);
floor1.setAnimation("ground");
floor1.height=170;
floor1.width=800;

//creating cactusgroups;
var cactusGroup = createGroup();

// Create groups for clouds
var CloudsGroup = createGroup();

//Variable for points sprites
var pointsgroup = createGroup();
var countpoint = 0;

//Sprite x-position variable for increament
var spriteXval = 6;
//Variable for score
var score = 0;


function draw() {
  background("lightgreen");
  
//Fix camera on the sprite
  camera.x = trex.x;
  camera.y = trex.y;

//Increase x-position of the sprite to make it look moving
trex.x = trex.x + spriteXval;
floor1.x = floor1.x + spriteXval;

//When UP key is pressed
if (keyWentDown("up")) {
  trex.setAnimation("trex_jump");
  trex.velocityY = -8;
  playSound("assets/default.mp3", false);
  setTimeout(function() {
  trex.velocityY = trex.velocityY + 12;
  }, 500);
}

// set the collider
floor1.setCollider("rectangle", 0, 0, 800, 150);
// floor1.debug=true;

//To avoid trex fall below floor
if(trex.collide(floor1))
{
  trex.setAnimation("T-rex");
}

//Call function clouds
clouds();

//Call function cactus
  cactus();


//When sprite touches obstacle and sound
  if (cactusGroup.isTouching(trex)) {
    score = score - 10;
    trex.x = trex.x - 200;
    floor1.x = floor1.x - 200;
  }



  food_Points();



  for (var i = 0; i < countpoint; i++) {
    if (pointsgroup.get(i) != undefined && trex.isTouching(pointsgroup.get(i))) {
      pointsgroup.get(i).destroy();
      score = score+20;
      playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3", false);
    }
  }


  drawSprites();
  
  //Display score
  fill("green");
  textSize(20);
  text("Score = " + score, trex.x - 200, trex.y - 130);

}

//Define a Function obstacles


//Define a Function clouds
function clouds() {
  var DistNum1 = randomNumber(10, 100);
  var DistNum2 = randomNumber(10, 100);
  if (DistNum1 == DistNum2) {
    var cloud1 = createSprite(trex.x + 300, randomNumber(70,135));
    cloud1.setAnimation("cloud");
    cloud1.scale=0.15;
    cloud1.lifetime = 1000;
    CloudsGroup.add(cloud1);
  }
}


// Define a Function points
function cactus() {
  var num1 = randomNumber(30, 150);
  var num2 = randomNumber(30, 150);
  if (num1 == num2) {
    var cactus = createSprite(trex.x + 400, 270);
    cactus.setAnimation("cactus");
    cactus.scale = 0.7;
    cactusGroup.add(cactus);
    cactus.setCollider("rectangle");
  }
}

function food_Points() {
  var num1 = randomNumber(30, 150);
  var num2 = randomNumber(30, 150);
  if (num1 == num2) {
    var food = createSprite(trex.x + 300, randomNumber(140, 200));
    food.setAnimation("food");
    food.scale = 0.3;
    pointsgroup.add(food);
    countpoint = countpoint+1;
  }
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
