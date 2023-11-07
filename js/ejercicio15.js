// 15- Realiza un script que cuente el número de vocales que tiene un texto.


const texto = prompt('Ingrese un texto: ');

const textoMinusculas = texto.toLowerCase();

let contadorVocales = 0;

// contar las vocales
for (let i = 0; i < textoMinusculas.length; i++) {
  const caracter = textoMinusculas[i];
  if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    contadorVocales++;
  }
}

document.write(`El texto tiene ${contadorVocales} vocales.`);