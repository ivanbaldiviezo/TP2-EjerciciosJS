/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo                   Output: la vocal ‘o’ está en la posición 1
*/

const texto = prompt("Ingrese un texto:");

// Convertir el texto a minúsculas
const textoEnMinusculas = texto.toLowerCase();

let posicionPrimeraVocal = -1;

// Recorrer el texto para encontrar la posición de la primera vocal
for (let i = 0; i < textoEnMinusculas.length; i++) {
  const caracter = textoEnMinusculas[i];
  if ("aeiou".includes(caracter)) {
    posicionPrimeraVocal = i;
    break; 
  }
}

if (posicionPrimeraVocal !== -1) {
  document.write(`La primera vocal '${texto[posicionPrimeraVocal]}' está en la posición ${posicionPrimeraVocal}`);
} else {
  document.write("No se encontraron vocales en el texto.");
}