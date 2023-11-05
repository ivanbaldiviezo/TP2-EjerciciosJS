/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let sumaTotal = 0;

while (true) {
  const entrada = prompt(
    "Ingrese un número (o pulse 'cancelar' para finalizar):"
  );

  if (entrada === null) {
    break; // 'cancelar', salir del bucle
  }

  const numero = parseFloat(entrada);

  if (!isNaN(numero)) {
    sumaTotal += numero;
  } else {
    alert(
      "Lo que ingresó no es un número válido. Por favor, ingrese un número."
    );
  }
}

if (isNaN(sumaTotal)) {
  alert("No se ingresaron números válidos.");
} else {
  alert("La suma total de los números introducidos es: " + sumaTotal);
}
