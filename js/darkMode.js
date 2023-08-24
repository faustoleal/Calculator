const d = document,
  $boton = d.querySelector(".btn"),
  circulo = d.querySelector(".circulo"),
  $numeros = d.querySelectorAll(".numero"),
  $operadores = d.querySelectorAll(".operador"),
  $igual = d.querySelector(".igual"),
  $display = d.querySelector(".display"),
  $calculadora = d.querySelector(".calculadora");

function darkMode() {
  d.addEventListener("click", (e) => {
    if (e.target === circulo) {
      $operadores.forEach((el) => el.classList.toggle("dark"));
      $display.classList.toggle("dark");
      $boton.classList.toggle("btn-dark");
      $numeros.forEach((el) => el.classList.toggle("dark-calculadora"));
      $calculadora.classList.toggle("dark-calculadora");
      $igual.classList.toggle("dark-igual");
    }
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  darkMode();
});
