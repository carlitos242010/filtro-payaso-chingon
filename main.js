nose_x =0;
nose_y =0;

function preload(){
narizdepayaso = loadImage("https://i.postimg.cc/pVcYcTy2/payasin.png");

}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video= createCapture(VIDEO);
     video.size(500,500);
     video.hide();
     posenet= ml5.poseNet(video,modelo_cargado);
     posenet.on("pose",gotposes);
}
function modelo_cargado(){
    console.log("modelo cargado con exito");
}
function gotposes(resultadiño){
if(resultadiño.length>0){
    console.log(resultadiño);
console.log("nose x =" + resultadiño[0].pose.nose.x);
console.log("nose y =" + resultadiño[0].pose.nose.y);
nose_x = resultadiño[0].pose.nose.x +-30;
nose_y = resultadiño[0].pose.nose.y +-20;
}
}
function draw(){
    image(video,0,0,500,500);
fill("turquoise");
stroke("black");
//circle(nose_x,nose_y,30);
 image (narizdepayaso,nose_x,nose_y,50,50);

}
function take_snapshot(){
    save("nariz.png")
}