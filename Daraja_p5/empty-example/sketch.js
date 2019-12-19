function setup() {
  createCanvas(700, 700, WEBGL);
  //detailX = createSlider(80, 24, 8);
  //detailX.position(20, height + 10);
  //detailX.style('width', '80px');
  noStroke();
}

function draw() {
  pointLight(252, 231, 172,mouseX-100,mouseY-100);
  background(255, 255, 255)
  
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;

  rotateX(millis() / 3000);
  rotateY(millis() / 3000);
  
  //ambientMaterial(255,255,255);
ambientMaterial(255, 224, 138);
  directionalLight(252, 226, 154,-dirX, -dirY, -1);
  //directionalLight(250,240,100);
  //directionalLight(240,230,90);
  //directionalLight(200,200,50);
  directionalLight(250,200,50);
  
  fill(252, 231, 172)
  sphere(150, 42);

}