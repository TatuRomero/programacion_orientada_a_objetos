let posX, posY;
let velX, velY;
let diametro;
let radio;

function setup() {
  createCanvas(windowWidth, windowHeight);

  radio = ceil(random(5, 50));
  diametro = radio * 2;
  // console.log(diametro);
  posX = random(radio, width - radio);
  posY = random(radio, height - radio);

  // velX =random(-10,10)
  // velY =random(-10,10)
  velX = 10;
  velY = 0;
}

function draw() {
  background(100);
  fill(255);
  noStroke();

  posX += velX;
  posY += velY;

  if (posX > width - radio) {
    velX *= -1;
    // console.log("se fué")
  }

  if (posX < radio) {
    velX *= -1;
  }

  circle(posX, posY, diametro);
}
