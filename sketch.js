let posX, posY;
let velX, velY;
let diametro;
let radio;
let fondo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fondo = color(random(100, 255), random(100), random(255));

  radio = ceil(random(5, 50));
  diametro = radio * 2;
  // console.log(diametro);
  posX = random(radio, width - radio);
  posY = random(radio, height - radio);

  velX = random(-10, 10);
  velY = random(-10, 10);
  // velX=10
  // velY=0
}

function draw() {
  background(fondo);
  fill(255);
  noStroke();

  posX += velX;
  posY += velY;

  if (posX > width - radio || posX < radio) {
    velX *= -1;
    fondo = color(random(100, 255), random(100), random(255));
    // console.log("se fué")
  }

  if (posY > height - radio || posY < radio) {
    velY *= -1;
    fondo = color(random(100, 255), random(100), random(255));
  }

  circle(posX, posY, diametro);
}
