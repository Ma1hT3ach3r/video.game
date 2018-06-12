var currentScene;
var bg;
var createCanvas;

var setup = function(){
  createCanvas(4000,4000);
};
var drawButton = function() {
    fill(81, 166, 31);
    rect(340, 10, 50, 25);
    fill(255, 255, 255);
    textSize(16);
    text("NEXT", 344, 29);
}; 
// starting scene
var drawScene1  = function() {
    currentScene = 1;
      background(38, 25, 25);
    textSize(46);
    for(var i =0; i<8; i++){
        text("POLYBIUS",i+84,43*i+28,309,111);

}
};
var drawScene2 = function() {
  currentScene = 2;
    for (var j = -3; j < 13; j++) {
    for (var i = 0; i < 22; i++) {
    image(getImage("cute/StoneBlock"), i*35, j*29, 48, 67);
    }
}

   fill(72, 109, 181);
   textSize(35);
   text("The kid in the maze", 47, height/2);
   image(getImage("avatars/robot_male_2"), 216, 266);
};

var drawScene3 = function() {
    background(144, 240, 234);
// Draw the sun
noStroke();
fill(255, 140, 0);
ellipse(335, 66, 70, 70);

// Get images from library and remember in variables
var grass = getImage("cute/GrassBlock");
var tree = getImage("cute/TreeUgly");

// Draw the tree and grass once
var landscape = 0;
while(landscape<400){
    image(grass, landscape, 270);
    image(tree, landscape, 200);
    landscape+=101;

};

    currentScene = 3;
    fill(7, 14, 145);
    textSize(23);
    text("The kid was walking in the forest!", 10, 135);
    image(getImage("avatars/robot_male_2"), width/2, height/1.5);
   
};

    currentScene = 3;
    fill(7, 14, 145);
    textSize(23);
    text("The kid was walking at the forest!", 10, 100);
    image(getImage("avatars/robot_male_2"), width/2, height/2);
   
};

var drawScene4 = function() {
    currentScene = 4;
    background(4, 7, 8);
    fill(167, 170, 209);
    textSize(39);
    text("The kid fell down a pit!", 10, 100);
    image(getImage("avatars/robot_male_2"), width/2, height/2);
};

var drawScene5 = function() {
    currentScene = 5;
     background(5, 5, 5);
    image(getImage("avatars/robot_male_1"),+177, +101,158, 123);
    text("The kid can't see anything and gets scared",10,100);
    
};

var drawScene6 = function() {
    currentScene = 6;
    background(189, 212, 217);
    fill(7, 14, 145);
    textSize(27);
    text("The kid have to escape before ", 10, 58);
    text("the dark comes and get eaten", 10, 81);
    text("by the monsters!", 10, 106);
    textSize(20);
    text("Make more keys and find the right key",10,143);
    text("Drag to make more keys", 10, 174);
    
    image(getImage("avatars/robot_male_3"), 21, 257);
    fill(71, 71, 71);
    rect(32, 257, 108, 15);
    rect(46, 197, 82, 60);
    
};


mouseDragged = function() {
    if (currentScene === 5) {
        image(getImage("avatars/aqualine-sapling"), mouseX-20, mouseY-20);
    }
    drawButton();
};

draw = function() {
    if (currentScene === 4) {
        drawScene4();
    }
    drawButton();
};
//gameover scene
var drawScene8 = function() {
    currentScene = 8;
background(220);
textSize(41);
for(var i =0; i<2; i++)

{  text("GAME OVER",i+97,36*i+52,319,111);
}

};
mouseClicked = function() {
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene4();
    } else if (currentScene === 4) {
        drawScene5();
    }  else if (currentScene === 5) {
        drawScene6();
    } else if (currentScene === 7) {
      drawScene8();
    }
    drawButton();
};

drawScene1();
drawButton();
