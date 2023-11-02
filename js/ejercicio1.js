/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/


// Solicitar la edad al usuario
const entrada = prompt("Por favor, ingrese su edad:");

// Intentar convertir la entrada a un número
const edad = parseInt(entrada);

// Verificar si la entrada es un número válido
if (!isNaN(edad)) {
  // Comprobar si la edad es mayor o igual a 18
  if (edad >= 18) {
    alert("¡Ya puede conducir!");
  } else {
    alert("Usted no cumple con la edad mínima para conducir.");
  }
} else {
  alert("La entrada no es un número válido. Por favor, ingrese un número válido.");
}