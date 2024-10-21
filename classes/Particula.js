class Particula {
  // Este método se ejecuta automáticamente, una sóla vez
  //   Aquí podemos generar variables para que el color, el tamaño, diámetro sea random.
  constructor(_x, _y) {
    this.posX = _x;
    this.posY = _y;
    this.estaViva = true;
    this.tiempoVida = round(random(10, 200));
    this.tamano = random(10, 50);
    this.color = color(random(150), random(150), random(50));
  }
  update() {
    this.tiempoVida -= 1;
    if (this.tiempoVida <= 0 || this.tamano <= 0) {
      this.estaViva = false;
      return;
    }
    this.posY -= 2;
    this.posX += random(-10, 10);
    this.tamano -= 0.5;
  }
  display() {
    fill(this.color);
    noStroke();
    circle(this.posX, this.posY, this.tiempoVida);
  }
}
/**
 * Así creo un comentario de varias líneas
 */
