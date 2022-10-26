function setup() {
  canvas = createCanvas(680, 423);
  canvas.center();
  Objectdetector=ml5.objectDetector('cocossd',modelloaded);
  document.getElementById("status").innerHTML="status:detecting objects";
}
status="";
img="";
objects =[];
function modelloaded()
{
    console.log("model is loaded");
    status=true;
    Objectdetector.detect(img,gotresults);
}

function gotresults(error,results)
{
  if(error)
  {
    console.error(error);
  }  
  else{
    console.log(results);
    objects=results;
  }
}

function preload()
{
  img=loadImage("dog_cat.jpg")
}
function draw(){
   image(img, 0,0,680,423);
   if (status!="")
   {
    for(i=0;i<objects.length;i++)
    {
      document.getElementById("status").innerHTML="Status:Object Detected";

      fill("#FF0000");
      percent= floor(objects[i].confidence*100);
      text(objects[i].label+ " " + percent + "%",objects[i].x+15,objects[i].y+15);
      noFill();
      stroke("#FF0000");
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
   }
}