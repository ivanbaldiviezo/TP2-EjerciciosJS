/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/
/*
let cadenasConcatenadas = "";

while (true) {
  const cadena = prompt("Ingrese una cadena de texto (o pulse 'cancelar' para finalizar):");
  if (cadena === null) {
    break; // 'cancelar', salir del bucle
  }
  cadenasConcatenadas += cadena + "-";
}

if (cadenasConcatenadas) {
  alert("Cadenas concatenadas: " + cadenasConcatenadas);
} else {
  alert("No se ingresaron cadenas.");
}
*/
/*
let cadenasConcatenadas = "";

while (true) {
  const cadena = prompt("Ingrese una cadena de texto (o pulse 'cancelar' para finalizar):");
  if (cadena === null) {
    break; // El usuario ha pulsado 'cancelar', salir del bucle
  }
  cadenasConcatenadas += cadena + " - ";
}

if (cadenasConcatenadas) {

  alert("Cadenas concatenadas: " + cadenasConcatenadas);
} else {
  alert("No se ingresaron cadenas.");
}
*/

let cadenasConcatenadas = "";

while (true) {
  const cadena = prompt("Ingrese una cadena de texto");
  
  if (cadena === null) {
    const confirmacion = confirm("¿Desea finalizar?");
    if (confirmacion) {
      break; // El usuario ha pulsado 'cancelar' y confirmó salir, salir del bucle
    }
  }
  
  if (cadena !== null) {
    if (cadenasConcatenadas !== "") {
      cadenasConcatenadas += "-";
    }
    cadenasConcatenadas += cadena;
  }
}

if (cadenasConcatenadas) {
  alert("Cadenas concatenadas: " + cadenasConcatenadas);
} else {
  alert("No se ingresaron cadenas.");
}