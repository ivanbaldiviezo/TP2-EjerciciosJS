/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

*/

// Solicitar una nota al usuario
const entrada = prompt("Por favor, ingrese una nota (número del 0 al 10):");

// Intentar convertir la entrada a un número
const nota = parseFloat(entrada);

// Verificar si la entrada es un número válido y está dentro del rango de 0 a 10
if (!isNaN(nota) && nota >= 0 && nota <= 10) {
  //calificación según el rango de nota
  let calificacion;
  if (nota >= 0 && nota <= 2) {
    calificacion = "Muy deficiente";
  } else if (nota >= 3 && nota <= 4) {
    calificacion = "Insuficiente";
  } else if (nota >= 5 && nota <= 6) {
    calificacion = "Suficiente";
  } else if (nota === 7) {
    calificacion = "Bien";
  } else if (nota >= 8 && nota <= 9) {
    calificacion = "Notable";
  } else if (nota === 10) {
    calificacion = "Sobresaliente";
  }

  //mostrar la calificación
  alert(calificacion);
} else if (isNaN(nota)) {
  //número válido
  alert("Introduce un número válido.");
} else {
  //"número erróneo"
  alert("Número erróneo");
}
