noseX = 0;
noseY = 0;
difference = 0;
right_wrist_x = 0;
right_wrist_y = 0;
left_wrist_x = 0;
left_wrist_y = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet has been initialized!")
}

function draw()
{
    background("#831032");
    textSize(10);
    fill("#F5EEF8");
    text("Veda Samhita", 30, 200);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + "nose y = " + noseY);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("right wrist x = " + right_wrist_x + "left wrist x = "
         + left_wrist_x + "difference = " + difference);
    }
}