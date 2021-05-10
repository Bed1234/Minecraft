var canvas = new fabric.Canvas('myCanvas');
player_X=10;
player_Y=10;


block_width=30;
block_height=30;


var player_object="";
var block_object="";


function player_update(){
    fabric.Image.fromURL("player.png",function (Img){
        player_object=Img;
         player_object.scaleToWidth(150);
          player_object.scaleToHeight(140);
          player_object.set({
              top:player_Y,
              left:player_X
          });
          canvas.add(player_object);

    });

}




function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_object=Img;
         block_object.scaleToWidth(block_width);
         block_object.scaleToHeight(block_height);
          block_object.set({
              top:player_Y,
              left:player_X
          });
          canvas.add(block_object);
          
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed=e.keyCode;
  console.log(keyPressed);
  if(e.shiftKey==true && keyPressed=='80'){
      console.log("P and shift pressed together");
      block_width= block_width + 10;
      block_height= block_height + 10;
      document.getElementById("current_width").innerHTML=block_width;
      document.getElementById("current_height").innerHTML=block_height;

  }


  if(e.shiftKey==true && keyPressed=='77'){
    console.log("M and shift pressed together");
    block_width=block_width - 10;
    block_height=block_height - 10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;

}



if(keyPressed=='38'){
console.log("Up");
Up();
}


if(keyPressed=='40'){
    console.log("Down");
   Down();
    }
if(keyPressed=='37'){
 console.log("Left");
Left();
}

if(keyPressed=='39'){
   console.log("Right");
    Right();
     }





     if(keyPressed=='87'){
         new_image('wall.jpg');
        console.log("w");
        }

     if(keyPressed=='71'){
        new_image('ground.png');
       console.log("g");
       }

       
     if(keyPressed=='76'){
        new_image('light_green.png');
       console.log("l");
       }
       
     if(keyPressed=='84'){
        new_image('trunk.jpg');
       console.log("t");
       }
       
     if(keyPressed=='82'){
        new_image('roof.jpg');
       console.log("r");
       }
       
     if(keyPressed=='89'){
        new_image('yellow_wall.png');
       console.log("y");
       }
       
     if(keyPressed=='68'){
        new_image('dark_green.png');
       console.log("d");
       }
       
     if(keyPressed=='85'){
        new_image('unique.png');
       console.log("u");
       }

       
     if(keyPressed=='67'){
        new_image('cloud.jpg');
       console.log("c");
       }

}

function Up() {
  if(player_Y > 0){
   player_Y=player_Y-block_height;
   console.log("Block image height="+block_height);
   console.log("When up arrow key is pressed,X =" + player_X + " , Y = " + player_Y);
   canvas.remove(player_object);
   player_update();
  }
  
}


function Down() {
  if(player_Y < 500){
   player_Y=player_Y+block_height;
   console.log("Block image height="+block_height);
   console.log("When down arrow key is pressed,X =" + player_X + " , Y = " + player_Y);
   canvas.remove(player_object);
   player_update();
  }
  
}
function Left() {
  if(player_X > 0){
   player_X=player_X-block_width;
   console.log("Block image width="+block_width);
   console.log("When left arrow key is pressed,X =" + player_X + " , Y = " + player_Y);
   canvas.remove(player_object);
   player_update();
  }
  
}


function Right() {
  if(player_X < 850){
   player_X=player_X+block_width;
   console.log("Block image width="+block_width);
   console.log("When Right arrow key is pressed,X =" + player_X + " , Y = " + player_Y);
   canvas.remove(player_object);
   player_update();
  }
  
}




