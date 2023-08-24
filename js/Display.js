class Display {
  constructor(valorPantalla) {
    this.valorPantalla = valorPantalla;
    this.tipoOperacion = undefined;
    this.valorActual = "";
  }

  agregarNumero(numero) {
    this.valorActual = this.valorActual + numero;
    this.imprimirValores();
  }

  imprimirValores() {
    this.valorPantalla.textContent = this.valorActual;
  }

  borrar() {
    this.valorActual = this.valorActual.slice(0, -1);
    this.imprimirValores();
  }

  borrarTodo() {
    this.valorActual = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }

  calcular() {
    try {
      this.valorActual = eval(this.valorPantalla.textContent);
      this.imprimirValores();
    } catch (error) {
      this.valorActual = "Error!";
      this.imprimirValores();
      setTimeout(() => {
        this.borrarTodo();
      }, 2000);
    }
  }
}
