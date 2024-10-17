// let posX, posY;
// let velX, velY;
// let diametro;
// let radio;
// let fondo;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   fondo = color(random(100, 255), random(100), random(255));

//   radio = ceil(random(5, 50));
//   diametro = radio * 2;
//   // console.log(diametro);
//   posX = random(radio, width - radio);
//   posY = random(radio, height - radio);

//   velX = random(-10, 10);
//   velY = random(-10, 10);
//   // velX=10
//   // velY=0
// }

// function draw() {
//   background(fondo);
//   fill(255);
//   noStroke();

//   posX += velX;
//   posY += velY;

//   if (posX > width - radio || posX < radio) {
//     velX *= -1;
//     fondo = color(random(100, 255), random(100), random(255));
//     // console.log("se fué")
//   }

//   if (posY > height - radio || posY < radio) {
//     velY *= -1;
//     fondo = color(random(100, 255), random(100), random(255));
//   }

//   circle(posX, posY, diametro);
// }

// let fondo;
// let pelotas = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   fondo = color(random(100, 255), random(100), random(255));
//   for (let i = 0; i < 100; i++) {
//     let nuevaPelota = new Pelota();
//     pelotas.push(nuevaPelota);
//   }
// }

// function draw() {
//   background(fondo);
//   for (let i = 0; i < 100; i++) {
//     pelotas[i].update();
//     pelotas[i].display();
//   }
// }

// class Pelota {
//   // Creación de la pelota
//   constructor() {
//     this.rad = ceil(random(5, 30));
//     this.diam = this.rad * 2;
//     this.posX = random(this.rad, width - this.rad);
//     this.posY = random(this.rad, height - this.rad);
//     this.velX = random(-10, 10);
//     this.velY = random(-10, 10);
//     console.log("estoy viaaaaa!");
//   }
//   // método update
//   update() {
//     this.posX += this.velX;
//     this.posY += this.velY;

//     if (this.posX > width - this.rad || this.posX < this.rad) {
//       this.velX *= -1;
//     }
//     if (this.posY > height - this.rad || this.posY < this.rad) {
//       this.velY *= -1;
//     }
//   }

//   display() {
//     fill(random(255, 300), random(150, 70), 100, 255);
//     noStroke();
//     circle(this.posX, this.posY, this.diam);
//   }
// }
let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(20);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }
  // for (let i = 0; i < particulas.length; i++) {
  // 	if (!particulas[i].estaViva) {
  // 		particulas.splice(i, 1);
  // 	}
  // }

  particulas = particulas.filter((pelota) => pelota.estaViva);

  
  noFill();
  stroke(252, 99, 145);
  strokeWeight(1);

  for (let i = 0; i < particulas.length-1; i++){  
  line(particulas[i].posX; particulas[i].posY;particulas[i+1].posX; particulas[i+1].posY ) }


}
console.log(particulas.length);
