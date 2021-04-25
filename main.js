image="";
function preload()
{
video-createCapture('babym pic.jpg')
video.hide();

}
function setup()
{
    canvas= createCanvas(480, 400);
    canvas.center();
}
function draw()
{
    image(0, 0, 480, 400);
}
function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("start").innerHTML="Status: Finding Baby";
}
function modelLoaded()
{
    console.log("Model Loaded!")
    status=true;
    
}