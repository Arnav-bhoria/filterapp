noseX=0;
noseY=0;


leftEyeX=0;
leftEyeY=0;
rightEyeX=0;
leftEyeY=0;

function preload(){

   
   clown_beard= loadImage("https://i.postimg.cc/L5S6t7Rb/mustache.png");
}

function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    video = createCapture (VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
image (video,0,0,400,400);
fill("#ff0000");
stroke("#ff0000");


image(clown_beard,noseX-10,noseY+5,40,40);
}

function snapshot(){
    save("filter");
}

function modelLoaded(){
    console.log("poseNet is initailized");
}

function gotPoses(results){
 if (results.length > 0){
     console.log(results);
     console.log("nose x= "+ results[0].pose.nose.x);
     console.log("nose y= "+ results[0].pose.nose.y);
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;


     leftEyeX=results[0].pose.leftEye.x;
     leftEyeY=results[0].pose.leftEye.y;
     rightEyeY=results[0].pose.rightEye.y;
     rightEyeX=results[0].pose.rightEye.x;

 }
}