const valorPantalla = document.querySelector(".pantalla");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll("#operadores");

const display = new Display(valorPantalla);

botonesNumeros.forEach((boton) =>
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML))
);

botonesOperadores.forEach((boton) =>
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML))
);
