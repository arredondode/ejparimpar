/*ESTRUCTURA DE CONTROL - SELECCIÓN
Ejercicio Par Impar

. Desarrollar un algoritmo que dado un número
ingresado por el ususario determine si el
número es par e impar y le informe al ususario

. En caso de ser cero el algoritmo deberá
informarlo
*/

let numero: Number = Number(prompt("Ingrese un número"));

if (numero === 0) {
  console.log("el numero " + numero + " no es par ni impar");
} else {
  if (numero % 2 === 0) {
    console.log("el número " + numero + " es par");
  } else {
    if (numero % 1 === 0) {
      console.log("el número " + numero + " es impar");
    }
  }
}
