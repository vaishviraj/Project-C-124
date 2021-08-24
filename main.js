noseX = 0;
noseY = 0;
differnce = 0;
leftwristX = 0;
rightwristY = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){

        console.log(results);
    }
}

function draw(){
    background('#969A97');
}