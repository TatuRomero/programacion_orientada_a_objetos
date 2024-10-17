class Particula {
  // Este método se ejecuta automáticamente, una sóla vez
  //   Aquí podemos generar variables para que el color, el tamaño, diámetro sea random.
  constructor(_x, _y) {
    this.posX = _x;
    this.posY = _y;
    this.estaViva = true;
    this.tiempoVida = round(random(100, 200));
  }
  update() {
    this.tiempoVida -= 1;
    if (this.tiempoVida <= 0) {
      this.estaViva = false;
      return;
    }
    this.posY += 2;
  }
  display() {
    fill(255);
    noStroke();
    circle(this.posX, this.posY, 10);
  }
}
