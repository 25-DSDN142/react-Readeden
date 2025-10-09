// ----=  Faces  =----
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }

    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // ForeHead not using
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;
    
    let Lowerforeheadx = face.keypoints[9].x;   //topforhead triangle
    let Lowerforeheady = face.keypoints[9].y;   //topforhead triangle

    let Leftforeheadx = face.keypoints[67].x;   //topforhead triangle
    let Leftforeheady = face.keypoints[67].y;   //topforhead triangle

    let Rightforeheadx = face.keypoints[297].x;   //topforhead triangle
    let Rightforeheady = face.keypoints[297].y;   //topforhead triangle
    
    let middleforeheadx = face.keypoints[151].x    //topforhead triangle colour
    let middleforeheady = face.keypoints[151].y    //topforhead triangle colour
    
   //Right(R) eyebrow(EB) quad(Q)
    let RtopEBQx = face.keypoints[336].x  
    let RtopEBQy = face.keypoints[336].y      

    let RbottemEBQx = face.keypoints[285].x     
    let RbottemEBQy = face.keypoints[285].y   

    let RtopmidEBQx = face.keypoints[334].x   
    let RtopmidEBQy = face.keypoints[334].y   

    let RbottemmidEBQx = face.keypoints[282].x    
    let RbottemmidEBQy = face.keypoints[282].y  

    let RcolourEBQx = face.keypoints[295].x   
    let RcolourEBQy = face.keypoints[295].y     
    
//Left(L) eyebrow(EB) quad(Q)
    let LtopEBQx = face.keypoints[107].x    
    let LtopEBQy = face.keypoints[107].y    

    let LbottemEBQx = face.keypoints[55].x        
    let LbottemEBQy = face.keypoints[55].y    

    let LtopmidEBQx = face.keypoints[105].x   
    let LtopmidEBQy = face.keypoints[105].y 

    let LbottemmidEBQx = face.keypoints[52].x   
    let LbottemmidEBQy = face.keypoints[52].y   

    let LcolourEBQx = face.keypoints[65].x    
    let LcolourEBQy = face.keypoints[65].y    

       //Right(R) eyebrow(EB) trinagle(T)
    let RtopEBTx = face.keypoints[334].x; 
    let RtopEBTy = face.keypoints[334].y; 
   
    let RbottemEBTx = face.keypoints[282].x; 
    let RbottemEBTy = face.keypoints[282].y; 

    let RrightEBTx = face.keypoints[276].x;  
    let RrightEBTy = face.keypoints[276].y;  
  
    let RcolourEBTx = face.keypoints[283].x;  
    let RcolourEBTy = face.keypoints[283].y;   
   
        //Left(L) eyebrow(EB) trinagle(T)
    let LtopEBTx = face.keypoints[105].x; 
    let LtopEBTy = face.keypoints[105].y; 
   
    let LbottemEBTx = face.keypoints[52].x; 
    let LbottemEBTy = face.keypoints[52].y; 

    let LrightEBTx = face.keypoints[70].x;  
    let LrightEBTy = face.keypoints[70].y;  
  
    let LcolourEBTx = face.keypoints[53].x;  
    let LcolourEBTy = face.keypoints[53].y;   
    
    let nosex = face.keypoints[2].x;    
    let nosey = face.keypoints[2].y;

    //lower lip
    let Lcornerx = face.keypoints[61].x;    
    let Lcornery = face.keypoints[61].y;
    
    let Rcornerx = face.keypoints[291].x;    
    let Rcornery = face.keypoints[291].y;
    
    let Mmouthx = face.keypoints[17].x;    
    let Mmouthy = face.keypoints[17].y;
    
    let Lmouthx = face.keypoints[181].x;    
    let Lmouthy = face.keypoints[181].y;

    let Rmouthx = face.keypoints[405].x;    
    let Rmouthy = face.keypoints[405].y;
    
    let Cmouthx = face.keypoints[5].x;    
    let Cmouthy = face.keypoints[5].y;
    //  9/10/25 Rearanching progect
    
    
    /*
    Start drawing on the face here
    */
  noStroke();
//Left(L) eyebrow(EB) quad(Q)
   let LcolourEBQ = get(LcolourEBQx,LcolourEBQy)
 //Left(L) eyebrow(EB) trinagle(T)
   let LEBT = get(LcolourEBTx,LcolourEBTy)
//Right(R) eyebrow(EB) trinagle(T)
   let REBT = get(RcolourEBTx,RcolourEBTy)
  //Right(R) eyebrow(EB) quad(Q)
   let RcolourEBQ = get(RcolourEBQx,RcolourEBQy)
  //lower mouth
  let Cmouth = get(Cmouthx,Cmouthy)
   
  
  fill(0)
  rect(0, 0, 580, 720);
  

  fill(Cmouth)
    beginShape();
  vertex(Lcornerx, Lcornery);
  vertex(Rcornerx, Rcornery);
  vertex(Rmouthx, Rmouthy);
  vertex(Mmouthx, Mmouthy);
 vertex(Lmouthx,Lmouthy);
  endShape(CLOSE)

//Left(L) eyebrow(EB) quad(Q)
   fill(LcolourEBQ);
   quad(LtopEBQx, LtopEBQy, LbottemEBQx, LbottemEBQy, LbottemmidEBQx, LbottemmidEBQy, LtopmidEBQx, LtopmidEBQy);

    //Left(L) eyebrow(EB) trinagle(T)
   fill(LEBT)
   triangle(LtopEBTx,LtopEBTy,LbottemEBTx,LbottemEBTy,LrightEBTx,LrightEBTy)


   //Right(R) eyebrow(EB) trinagle(T)
   fill(REBT)
   triangle(RtopEBTx,RtopEBTy,RbottemEBTx,RbottemEBTy,RrightEBTx,RrightEBTy)
   
 //Right(R) eyebrow(EB) quad(Q)
   fill(RcolourEBQ);
   quad(RtopEBQx, RtopEBQy, RbottemEBQx, RbottemEBQy, RbottemmidEBQx, RbottemmidEBQy, RtopmidEBQx, RtopmidEBQy);













   
  //   //topforhead triangle
  //  let topforheadcolor = get(middleforeheadx,middleforeheady)    //topforhead triangle colour
  //  fill(topforheadcolor);
  //  triangle(Lowerforeheadx, Lowerforeheady, Leftforeheadx, Leftforeheady, Rightforeheadx, Rightforeheady);
   
  //   fill(get(leftEyeCenterX, leftEyeCenterY))  //left eye fill
    
  //   ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight); //Left eye fill
    

    
    
    
    
    // drawPoints(face.leftEye);
    // drawPoints(face.leftEyebrow);
    // drawPoints(face.lips);
    // drawPoints(face.rightEye);
    // drawPoints(face.rightEyebrow);

    // drawX(rightEyeCenterX,rightEyeCenterY);  //crossed out eyes
    // drawX(leftEyeCenterX,leftEyeCenterY);


    //  drawX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function drawX(X, Y) {// draws a cross on face
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}